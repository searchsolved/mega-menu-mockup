import Link from "next/link";

export default function MigrationPlanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-[#d32f2f] hover:underline mb-4 inline-block"
        >
          &larr; Back to Navigation Mockup
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#1a2456] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Migration Plan
          </span>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Awaiting Approval
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a2456] mb-3">
          WooCommerce Category Migration Plan
        </h1>
        <p className="text-gray-600 text-lg">
          A step-by-step plan to restructure the product categories on
          weldingandwelder.com. This document is for stakeholder review before
          any changes are made to the live site.
        </p>
      </div>

      {/* What's Changing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          What&apos;s Changing?
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The current site organises products into broad categories like
            &ldquo;Welding Equipment&rdquo; and &ldquo;Consumables &amp;
            Supplies&rdquo;. Customers often need to click through several
            levels to find what they need.
          </p>
          <p>
            The new structure groups products by{" "}
            <strong>welding process</strong> (MIG, TIG, Arc, Plasma, Gas) so
            customers can go straight to the products relevant to their
            work. New standalone sections for Wire &amp; Rods, Abrasives,
            Pipe Welding, and Fume Extraction make popular product groups
            easier to find.
          </p>
        </div>
      </section>

      {/* Before & After */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          Before &amp; After: Category Structure
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">
                CURRENT
              </span>
              11 Top-Level Categories
            </h3>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {[
                "Offers & Deals",
                "Welding Equipment",
                "Consumables & Supplies",
                "Gas Delivery & Control",
                "Gas & Plasma Cutting Machines",
                "Fume Extraction",
                "Pipe Welding & Cutting",
                "Welding Tools & Benches",
                "Safety Equipment",
                "Air Tools & Compressors",
                "Metal Saws & Mag Drills",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-[#1a2456] rounded-lg p-5">
            <h3 className="font-bold text-[#1a2456] mb-3 flex items-center gap-2">
              <span className="bg-[#d32f2f] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                NEW
              </span>
              13 Top-Level Categories
            </h3>
            <ul className="space-y-1.5 text-sm text-gray-700">
              {[
                "MIG Welding",
                "TIG Welding",
                "Arc Welding",
                "Plasma Cutting",
                "Gas & Oxy-Fuel",
                "Wire & Rods",
                "Pipe Welding",
                "Welding Machines",
                "Safety & PPE",
                "Fume Extraction",
                "Welding Workshop",
                "Abrasives",
                "Brands",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d32f2f] rounded-full" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          Step-by-Step Migration Process
        </h2>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: "Build on Staging First",
              desc: "All changes are made on a staging (test) copy of the site, not the live store. Customers see no changes until everything is verified.",
            },
            {
              step: 2,
              title: "Create New Categories",
              desc: "The new category structure (13 top-level, ~90 sub-categories) is created in WooCommerce using an import file we've already prepared.",
            },
            {
              step: 3,
              title: "Re-assign All 5,944 Products",
              desc: "Every product is moved from its old category to the correct new category using a bulk CSV import. No products are deleted or modified - only their category assignment changes.",
            },
            {
              step: 4,
              title: "Set Up 301 Redirects",
              desc: "Every old category URL (e.g. /product-category/welding-equipment/) is redirected to its new equivalent (e.g. /product-category/mig-welding/). This preserves Google rankings and ensures bookmarked links still work.",
            },
            {
              step: 5,
              title: "Update the Navigation Menu",
              desc: "The main site menu is updated to match the new category structure, using the mega menu design shown in the mockup.",
            },
            {
              step: 6,
              title: "Verify on Staging",
              desc: "Full verification: every product is in the correct category, all old URLs redirect properly, the menu works on desktop and mobile, and checkout is unaffected.",
            },
            {
              step: 7,
              title: "Go Live",
              desc: "Once verified on staging, the changes are pushed to the live site. This can be done during a low-traffic period (e.g. early morning) and takes effect immediately.",
            },
            {
              step: 8,
              title: "Post-Launch Monitoring",
              desc: "Monitor Google Search Console for crawl errors, check analytics for any traffic drops, and verify customer-facing category pages are rendering correctly.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 bg-gray-50 rounded-lg p-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a2456] text-white rounded-full flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-[#1a2456]">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Changes for Customers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          What Changes for Customers?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 mb-2">URLs Redirect</h3>
            <p className="text-sm text-green-700">
              Any bookmarked or shared links to old category pages will
              automatically redirect to the new equivalent. No broken links.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 mb-2">
              Same Products
            </h3>
            <p className="text-sm text-green-700">
              No products are added, removed, or modified. All 5,944
              products stay exactly as they are - only their category
              assignment changes.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 mb-2">
              Better Navigation
            </h3>
            <p className="text-sm text-green-700">
              Customers can find products faster with process-specific menus
              (MIG, TIG, Arc) instead of generic &ldquo;Welding
              Equipment&rdquo;.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          Risk Mitigation
        </h2>
        <div className="space-y-3">
          {[
            {
              risk: "Broken links / lost Google rankings",
              mitigation:
                "301 redirects for every old category URL. Google treats 301s as permanent moves and transfers ranking signals.",
            },
            {
              risk: "Products end up in wrong categories",
              mitigation:
                "Automated verification script checks every product has a valid category assignment before import. Manual spot-checks on staging.",
            },
            {
              risk: "Customers can't find products during migration",
              mitigation:
                "All work done on staging first. Live site is unchanged until staging is fully verified. Go-live is a single push, not a gradual rollout.",
            },
            {
              risk: "Something goes wrong after go-live",
              mitigation:
                "Full database backup taken before go-live. Can revert to the previous state within minutes if needed.",
            },
            {
              risk: "SEO impact from URL changes",
              mitigation:
                "301 redirects preserve link equity. New category slugs are SEO-optimised with target keywords. Sitemap is resubmitted to Google Search Console immediately after launch.",
            },
          ].map((item) => (
            <div
              key={item.risk}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded mt-0.5">
                  RISK
                </span>
                <div>
                  <p className="font-medium text-gray-800">{item.risk}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold text-green-700">
                      Mitigation:
                    </span>{" "}
                    {item.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          Migration Checklist
        </h2>
        <div className="space-y-2">
          {[
            {
              task: "Navigation mockup reviewed and approved",
              status: "in-progress",
            },
            {
              task: "New category hierarchy CSV prepared",
              status: "done",
            },
            {
              task: "Product-to-category mapping CSV prepared (5,944 products)",
              status: "done",
            },
            {
              task: "Old categories to delete list prepared",
              status: "done",
            },
            {
              task: "Verification script written and passed",
              status: "done",
            },
            {
              task: "Stakeholder approval received",
              status: "pending",
            },
            {
              task: "Staging site access obtained",
              status: "pending",
            },
            {
              task: "Category sitemap exported from live site",
              status: "pending",
            },
            {
              task: "301 redirect map generated",
              status: "pending",
            },
            {
              task: "New categories created on staging",
              status: "pending",
            },
            {
              task: "Products re-assigned on staging",
              status: "pending",
            },
            {
              task: "Navigation menu updated on staging",
              status: "pending",
            },
            {
              task: "Full staging verification complete",
              status: "pending",
            },
            { task: "Database backup of live site", status: "pending" },
            { task: "Push changes to live", status: "pending" },
            {
              task: "301 redirects activated on live",
              status: "pending",
            },
            {
              task: "Sitemap resubmitted to Google Search Console",
              status: "pending",
            },
            {
              task: "Post-launch monitoring (7 days)",
              status: "pending",
            },
          ].map((item) => (
            <div
              key={item.task}
              className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                  item.status === "done"
                    ? "bg-green-500 border-green-500 text-white"
                    : item.status === "in-progress"
                    ? "bg-amber-100 border-amber-400"
                    : "border-gray-300"
                }`}
              >
                {item.status === "done" && (
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {item.status === "in-progress" && (
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                )}
              </span>
              <span
                className={`text-sm ${
                  item.status === "done"
                    ? "text-gray-500 line-through"
                    : item.status === "in-progress"
                    ? "text-amber-800 font-medium"
                    : "text-gray-700"
                }`}
              >
                {item.task}
              </span>
              {item.status === "in-progress" && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                  In Progress
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Files Prepared */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-4 border-b-2 border-[#d32f2f] pb-2">
          Prepared Migration Files
        </h2>
        <div className="space-y-3">
          {[
            {
              file: "new-category-hierarchy.csv",
              desc: "All new WooCommerce categories with parent/child relationships and URL slugs. Ready to import.",
            },
            {
              file: "product-category-update.csv",
              desc: "WooCommerce-importable CSV with updated category assignments for all 5,944 products.",
            },
            {
              file: "categories-to-delete.txt",
              desc: "List of old categories that will be empty after migration and can be safely removed.",
            },
            {
              file: "verify_migration.py",
              desc: "Python script that validates the product-category-update.csv for correctness, coverage, and distribution.",
            },
          ].map((item) => (
            <div
              key={item.file}
              className="border border-gray-200 rounded-lg p-4 flex items-start gap-3"
            >
              <span className="flex-shrink-0 bg-[#1a2456] text-white text-xs font-mono px-2 py-1 rounded">
                FILE
              </span>
              <div>
                <p className="font-mono font-bold text-[#1a2456] text-sm">
                  {item.file}
                </p>
                <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="border border-dashed border-gray-300 rounded-lg p-4 flex items-start gap-3 opacity-60">
            <span className="flex-shrink-0 bg-gray-400 text-white text-xs font-mono px-2 py-1 rounded">
              PENDING
            </span>
            <div>
              <p className="font-mono font-bold text-gray-500 text-sm">
                301-redirects.csv
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                Requires category sitemap export from the live site.
                Will be generated after approval and site access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200 text-sm text-gray-400">
        <p>
          Welding &amp; Welder - Migration Plan Document - For stakeholder
          review only
        </p>
      </footer>
    </div>
  );
}
