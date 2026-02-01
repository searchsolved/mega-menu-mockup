"""
Generate WooCommerce migration prep files:
1. new-category-hierarchy.csv
2. product-category-update.csv
3. categories-to-delete.txt
"""

import csv
import re
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MOCKUP_DIR = os.path.join(BASE_DIR, "mega-menu-mockup")
PRODUCT_CSV = os.path.join(BASE_DIR, "wc-product-export-1-2-2026-1769956302605.csv")
MAPPING_CSV = os.path.join(MOCKUP_DIR, "category_navigation_mapping.csv")

# ── Output paths ──
HIERARCHY_OUT = os.path.join(MOCKUP_DIR, "new-category-hierarchy.csv")
PRODUCT_UPDATE_OUT = os.path.join(MOCKUP_DIR, "product-category-update.csv")
DELETE_OUT = os.path.join(MOCKUP_DIR, "categories-to-delete.txt")


def slug_from_href(href: str) -> str:
    """Extract the last segment of a href as a slug."""
    return href.strip("/").split("/")[-1]


def full_slug_path(href: str) -> str:
    """Convert href like /mig-welding/wire/aluminium to mig-welding/wire/aluminium."""
    return href.strip("/")


# ═══════════════════════════════════════════════════════════════════
# FILE 1: new-category-hierarchy.csv
# ═══════════════════════════════════════════════════════════════════

def generate_hierarchy():
    """Parse menuData.ts and extract all categories with parent/child relationships."""

    menu_data_path = os.path.join(MOCKUP_DIR, "app", "data", "menuData.ts")
    with open(menu_data_path, "r") as f:
        content = f.read()

    rows = []
    seen = set()

    # Parse top-level items
    top_pattern = re.compile(
        r'label:\s*"([^"]+)",\s*\n\s*href:\s*"([^"]+)"',
        re.MULTILINE
    )

    # Parse columns (headings)
    col_pattern = re.compile(
        r'heading:\s*"([^"]+)",\s*\n\s*href:\s*"([^"]+)"',
        re.MULTILINE
    )

    # Parse items
    item_pattern = re.compile(
        r'\{\s*label:\s*"([^"]+)",\s*href:\s*"([^"]+)"\s*\}',
        re.MULTILINE
    )

    # We need structured parsing. Let's parse block by block.
    # Split by top-level menu items (// 1. MIG, // 2. TIG, etc.)
    blocks = re.split(r'//\s*\d+\.\s*\w+', content)

    # Find all top-level items
    top_items = top_pattern.findall(content)

    # For structured parsing, re-read and parse the TS more carefully
    # using the children blocks

    # Strategy: find each menuItem block and extract its hierarchy
    # Split content into individual menu item objects

    # Find positions of each top-level label
    item_starts = []
    for match in re.finditer(r'label:\s*"([^"]+)",\s*\n\s*href:\s*"([^"]+)"', content):
        # Check if this is a top-level item (followed by children or badge)
        after = content[match.end():match.end()+200]
        if 'children:' in after or 'badge:' in after:
            item_starts.append((match.start(), match.group(1), match.group(2)))

    # For each top-level item, extract its children blocks
    for idx, (start, label, href) in enumerate(item_starts):
        # Determine the end of this block
        if idx + 1 < len(item_starts):
            end = item_starts[idx + 1][0]
        else:
            end = len(content)

        block = content[start:end]
        top_slug = full_slug_path(href)

        # Add top-level category
        if top_slug not in seen:
            rows.append({
                "name": label,
                "slug": slug_from_href(href),
                "full_path": top_slug,
                "parent": "",
                "level": 0
            })
            seen.add(top_slug)

        # Find column headings within this block
        for col_match in col_pattern.finditer(block):
            col_name = col_match.group(1)
            col_href = col_match.group(2)
            col_slug = full_slug_path(col_href)

            if col_slug not in seen:
                rows.append({
                    "name": col_name,
                    "slug": slug_from_href(col_href),
                    "full_path": col_slug,
                    "parent": top_slug,
                    "level": 1
                })
                seen.add(col_slug)

            # Find items after this heading until next heading or end of block
            col_pos = col_match.end()
            next_col = col_pattern.search(block, col_pos)
            col_end = next_col.start() if next_col else len(block)
            col_block = block[col_pos:col_end]

            for item_match in item_pattern.finditer(col_block):
                item_name = item_match.group(1)
                item_href = item_match.group(2)
                item_slug = full_slug_path(item_href)

                if item_slug not in seen:
                    rows.append({
                        "name": item_name,
                        "slug": slug_from_href(item_href),
                        "full_path": item_slug,
                        "parent": col_slug,
                        "level": 2
                    })
                    seen.add(item_slug)

    # Write CSV
    with open(HIERARCHY_OUT, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["name", "slug", "full_path", "parent", "level"])
        writer.writeheader()
        writer.writerows(rows)

    print(f"[1] new-category-hierarchy.csv: {len(rows)} categories written")
    return rows


# ═══════════════════════════════════════════════════════════════════
# FILE 2: product-category-update.csv
# ═══════════════════════════════════════════════════════════════════

def load_mapping():
    """Load the category_navigation_mapping.csv into a lookup dict.

    Maps old CSV category name -> new WooCommerce category path.
    """
    mapping = {}

    with open(MAPPING_CSV, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            old_cat = row["csv_category"].strip()
            nav_top = row["nav_top_menu"].strip()
            nav_col = row["nav_column"].strip()
            nav_item = row["nav_item_matched"].strip()

            # Build the new WooCommerce category path
            # Format: Top Level > Column Heading > Item
            if nav_item in ("[Parent]", "[Column]"):
                # Map to the column level
                new_path = f"{nav_top} > {nav_col}"
            elif nav_item == "[Sub-cat]":
                # Map to the column level (sub-category within column)
                new_path = f"{nav_top} > {nav_col}"
            else:
                # Map to the specific item
                new_path = f"{nav_top} > {nav_col} > {nav_item}"

            mapping[old_cat] = new_path

    return mapping


def parse_old_categories(cat_string: str) -> list:
    """Parse WooCommerce category string like 'A > B > C, D > E > F' into leaf categories."""
    if not cat_string or not cat_string.strip():
        return []

    # Split by comma, but be careful with commas inside category names
    # WooCommerce uses ' > ' as hierarchy separator and ', ' between multiple categories
    # Actually the format is: "Cat1 > Sub1 > Sub2, Cat3 > Sub3"
    # We need to split on ', ' that separates category paths

    paths = []
    current = []

    # Split the whole string by ', ' but we need to handle the hierarchy
    # The CSV uses " > " within a path and ", " between paths
    raw_paths = cat_string.split(", ")

    for path in raw_paths:
        path = path.strip()
        if path:
            # Get the leaf category (last segment)
            parts = [p.strip() for p in path.split(" > ")]
            leaf = parts[-1]
            paths.append(leaf)

    return paths


def generate_product_update(mapping):
    """Generate product-category-update.csv with new category assignments."""

    rows_out = []
    unmapped = set()
    mapped_count = 0
    no_cat_count = 0

    with open(PRODUCT_CSV, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)

        for row in reader:
            product_id = row["ID"]
            sku = row["SKU"]
            name = row["Name"]
            old_categories = row.get("Categories", "")

            if not old_categories or not old_categories.strip():
                # Product with no categories - flag it
                no_cat_count += 1
                rows_out.append({
                    "ID": product_id,
                    "SKU": sku,
                    "Name": name,
                    "Old Categories": "",
                    "New Categories": "",
                    "Status": "NO_CATEGORY"
                })
                continue

            # Parse old categories and map each leaf to new
            leaves = parse_old_categories(old_categories)
            new_cats = set()
            product_unmapped = []

            for leaf in leaves:
                if leaf in mapping:
                    new_cats.add(mapping[leaf])
                else:
                    # Try case-insensitive match
                    found = False
                    for key in mapping:
                        if key.lower() == leaf.lower():
                            new_cats.add(mapping[key])
                            found = True
                            break
                    if not found:
                        product_unmapped.append(leaf)
                        unmapped.add(leaf)

            if new_cats:
                mapped_count += 1
                status = "MAPPED" if not product_unmapped else "PARTIAL"
            else:
                status = "UNMAPPED"

            rows_out.append({
                "ID": product_id,
                "SKU": sku,
                "Name": name,
                "Old Categories": old_categories,
                "New Categories": ", ".join(sorted(new_cats)),
                "Status": status
            })

    # Write output
    with open(PRODUCT_UPDATE_OUT, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["ID", "SKU", "Name", "Old Categories", "New Categories", "Status"])
        writer.writeheader()
        writer.writerows(rows_out)

    total = len(rows_out)
    print(f"[2] product-category-update.csv: {total} products written")
    print(f"    Mapped: {mapped_count}, No category: {no_cat_count}, Unmapped leaves: {len(unmapped)}")

    if unmapped:
        print(f"    Unmapped old categories ({len(unmapped)}):")
        for u in sorted(unmapped):
            print(f"      - {u}")

    return rows_out, unmapped


# ═══════════════════════════════════════════════════════════════════
# FILE 3: categories-to-delete.txt
# ═══════════════════════════════════════════════════════════════════

def generate_delete_list(mapping, product_rows):
    """Find old categories that won't exist in the new structure."""

    # Collect all old category names from the product export
    old_categories = set()
    with open(PRODUCT_CSV, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            cats = row.get("Categories", "")
            if cats:
                # Extract all category names (both parents and leaves)
                for path in cats.split(", "):
                    parts = [p.strip() for p in path.split(" > ")]
                    for part in parts:
                        if part:
                            old_categories.add(part)

    # The mapping covers leaf categories. Categories NOT in the mapping
    # are ones that will be empty or redundant after migration.
    mapped_old = set(mapping.keys())

    # Categories to delete = old categories that exist in the product export
    # but are NOT mapped to anything in the new structure
    # (these are parent/container categories that won't have products after migration)
    to_delete = sorted(old_categories - mapped_old)

    with open(DELETE_OUT, "w") as f:
        f.write("# WooCommerce Categories to Delete After Migration\n")
        f.write("# These old categories will be empty after products are re-assigned.\n")
        f.write(f"# Total: {len(to_delete)} categories\n")
        f.write("#\n")
        f.write("# IMPORTANT: Only delete these AFTER verifying all products\n")
        f.write("# have been successfully re-assigned to new categories.\n")
        f.write("# 301 redirects should be in place before deletion.\n\n")
        for cat in to_delete:
            f.write(f"{cat}\n")

    print(f"[3] categories-to-delete.txt: {len(to_delete)} old categories to delete")
    return to_delete


# ═══════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════

if __name__ == "__main__":
    print("=" * 60)
    print("WooCommerce Migration File Generator")
    print("=" * 60)
    print()

    # File 1
    hierarchy = generate_hierarchy()
    print()

    # Load mapping for files 2 & 3
    mapping = load_mapping()
    print(f"Loaded {len(mapping)} category mappings")
    print()

    # File 2
    product_rows, unmapped = generate_product_update(mapping)
    print()

    # File 3
    delete_list = generate_delete_list(mapping, product_rows)
    print()

    print("=" * 60)
    print("All migration files generated successfully!")
    print(f"  {HIERARCHY_OUT}")
    print(f"  {PRODUCT_UPDATE_OUT}")
    print(f"  {DELETE_OUT}")
    print("=" * 60)
