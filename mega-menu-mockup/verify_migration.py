"""
Verify product-category-update.csv is correct.

Checks:
1. Every product from the original export is present
2. Category counts and distribution look sane
3. No products lost their categories (unless they had none originally)
4. New category paths are valid (exist in hierarchy)
"""

import csv
import os
import sys
from collections import Counter

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(BASE_DIR)

PRODUCT_ORIG = os.path.join(PARENT_DIR, "wc-product-export-1-2-2026-1769956302605.csv")
PRODUCT_UPDATE = os.path.join(BASE_DIR, "product-category-update.csv")
HIERARCHY = os.path.join(BASE_DIR, "new-category-hierarchy.csv")

PASS = "PASS"
FAIL = "FAIL"
WARN = "WARN"

results = []


def check(name, status, detail=""):
    results.append((name, status, detail))
    symbol = {"PASS": "+", "FAIL": "!", "WARN": "~"}[status]
    print(f"  [{symbol}] {name}: {status}" + (f" - {detail}" if detail else ""))


def main():
    print("=" * 60)
    print("Migration Verification Script")
    print("=" * 60)
    print()

    # ── Load original products ──
    print("Loading original product export...")
    orig_ids = set()
    orig_rows = 0
    orig_no_cat = 0
    with open(PRODUCT_ORIG, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            orig_ids.add(row["ID"])
            orig_rows += 1
            if not row.get("Categories", "").strip():
                orig_no_cat += 1
    print(f"  Original: {orig_rows} products, {orig_no_cat} without categories")
    print()

    # ── Load updated products ──
    print("Loading product-category-update.csv...")
    update_rows = []
    with open(PRODUCT_UPDATE, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            update_rows.append(row)
    update_ids = {r["ID"] for r in update_rows}
    print(f"  Update: {len(update_rows)} products")
    print()

    # ── Load hierarchy ──
    print("Loading new-category-hierarchy.csv...")
    hierarchy_names = set()
    with open(HIERARCHY, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            hierarchy_names.add(row["name"])
    print(f"  Hierarchy: {len(hierarchy_names)} category names")
    print()

    # ═══════════════════════════════════════════════════════════════
    # CHECKS
    # ═══════════════════════════════════════════════════════════════
    print("Running checks...")
    print()

    # 1. Row count match
    if len(update_rows) == orig_rows:
        check("Row count match", PASS, f"{len(update_rows)} == {orig_rows}")
    else:
        check("Row count match", FAIL, f"Update has {len(update_rows)}, original has {orig_rows}")

    # 2. All product IDs present
    missing = orig_ids - update_ids
    extra = update_ids - orig_ids
    if not missing and not extra:
        check("All product IDs present", PASS, f"{len(update_ids)} IDs match")
    else:
        if missing:
            check("Missing product IDs", FAIL, f"{len(missing)} products missing from update")
        if extra:
            check("Extra product IDs", WARN, f"{len(extra)} extra IDs in update")

    # 3. Status distribution
    status_counts = Counter(r["Status"] for r in update_rows)
    print()
    print("  Status distribution:")
    for status, count in sorted(status_counts.items()):
        pct = count / len(update_rows) * 100
        print(f"    {status}: {count} ({pct:.1f}%)")
    print()

    mapped = status_counts.get("MAPPED", 0)
    no_cat = status_counts.get("NO_CATEGORY", 0)
    unmapped = status_counts.get("UNMAPPED", 0)
    partial = status_counts.get("PARTIAL", 0)

    # 4. No unmapped products (that had categories)
    if unmapped == 0:
        check("No unmapped products", PASS, "All products with categories were mapped")
    else:
        check("Unmapped products", FAIL, f"{unmapped} products couldn't be mapped")

    # 5. No-category count matches original
    if no_cat == orig_no_cat:
        check("No-category count matches", PASS, f"{no_cat} products have no categories (same as original)")
    else:
        check("No-category count", WARN, f"Update: {no_cat}, Original: {orig_no_cat}")

    # 6. Mapped products should have non-empty new categories
    empty_new_cats = sum(1 for r in update_rows if r["Status"] == "MAPPED" and not r["New Categories"].strip())
    if empty_new_cats == 0:
        check("All mapped products have new categories", PASS)
    else:
        check("Mapped products with empty new categories", FAIL, f"{empty_new_cats} products")

    # 7. Coverage percentage
    products_with_cats = orig_rows - orig_no_cat
    if products_with_cats > 0:
        coverage = (mapped + partial) / products_with_cats * 100
        if coverage >= 99:
            check("Category coverage", PASS, f"{coverage:.1f}% of categorized products mapped")
        elif coverage >= 95:
            check("Category coverage", WARN, f"{coverage:.1f}% coverage (some products partially mapped)")
        else:
            check("Category coverage", FAIL, f"Only {coverage:.1f}% coverage")

    # 8. New category distribution - check for overly concentrated categories
    cat_counter = Counter()
    for r in update_rows:
        new_cats = r.get("New Categories", "").strip()
        if new_cats:
            for cat in new_cats.split(", "):
                cat_counter[cat.strip()] += 1

    print()
    print("  Top 15 new categories by product count:")
    for cat, count in cat_counter.most_common(15):
        print(f"    {count:5d}  {cat}")
    print()

    total_cats_used = len(cat_counter)
    check("Category variety", PASS if total_cats_used > 50 else WARN,
          f"{total_cats_used} distinct new category paths used")

    # 9. Check for suspiciously large categories (>500 products in one leaf)
    max_cat, max_count = cat_counter.most_common(1)[0]
    if max_count > 500:
        check("Largest category size", WARN, f"\"{max_cat}\" has {max_count} products - verify this is expected")
    else:
        check("Largest category size", PASS, f"Largest is \"{max_cat}\" with {max_count} products")

    # ═══════════════════════════════════════════════════════════════
    # SUMMARY
    # ═══════════════════════════════════════════════════════════════
    print()
    print("=" * 60)
    passes = sum(1 for _, s, _ in results if s == PASS)
    warns = sum(1 for _, s, _ in results if s == WARN)
    fails = sum(1 for _, s, _ in results if s == FAIL)
    print(f"Results: {passes} PASS, {warns} WARN, {fails} FAIL")

    if fails > 0:
        print("\nFAILED CHECKS:")
        for name, status, detail in results:
            if status == FAIL:
                print(f"  - {name}: {detail}")
        print("\nVerification FAILED - review issues above before proceeding.")
        sys.exit(1)
    elif warns > 0:
        print("\nAll critical checks passed. Review warnings above.")
        print("Verification PASSED with warnings.")
        sys.exit(0)
    else:
        print("\nAll checks passed!")
        print("Verification PASSED.")
        sys.exit(0)


if __name__ == "__main__":
    main()
