"use client";

import { menuItems } from "../data/menuData";

export default function OverviewSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a2456] to-[#2a3a7a] rounded-xl p-8 md:p-12 mb-12 text-white">
        <div className="max-w-2xl">
          <span className="bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Navigation Proposal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Proposed Mega Menu Navigation
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed">
            Proposed navigation restructure for weldingandwelder.com. Process-first
            menus replace generic categories, with shorter labels, dedicated
            Wire &amp; Rods, Abrasives, Pipe Welding, and Fume Extraction sections.
            Hover over the menu items above to explore all 13 dropdowns.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm">
              {menuItems.reduce(
                (sum, item) =>
                  sum +
                  (item.children?.reduce(
                    (s, col) => s + col.items.length,
                    0
                  ) ?? 0),
                0
              )}{" "}
              categories mapped
            </span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm">
              13 top-level items
            </span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm">
              100% coverage
            </span>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-6">
          Before &amp; After Comparison
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before - Current Live Site */}
          <div className="border-2 border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Current Site
              </span>
              <h3 className="font-bold text-gray-700">11 Items</h3>
            </div>
            <ul className="space-y-2">
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
                <li
                  key={item}
                  className="text-sm text-gray-600 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
              Long, inconsistent labels across 11 items. No dedicated
              wire/rods hub. Safety and extraction bundled together.
              Abrasives buried inside other menus.
            </div>
          </div>

          {/* After - Proposed */}
          <div className="border-2 border-[#1a2456] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Proposed
              </span>
              <h3 className="font-bold text-[#1a2456]">13 Items, Short Labels</h3>
            </div>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="text-sm text-gray-700 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-[#d32f2f] rounded-full flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                  {item.children && (
                    <span className="text-xs text-gray-400">
                      ({item.children.length} columns,{" "}
                      {item.children.reduce(
                        (sum, col) => sum + col.items.length,
                        0
                      )}{" "}
                      links)
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
              Shorter, consistent labels across 13 items. Offers in banner
              strip. Wire &amp; rods available both in process menus AND a
              dedicated hub. Every product category mapped.
            </div>
          </div>
        </div>
      </section>

      {/* Menu Structure Detail */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-6">
          Full Menu Structure
        </h2>
        <div className="space-y-6">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="bg-[#1a2456] text-white px-6 py-3 flex items-center justify-between">
                <h3 className="font-bold uppercase tracking-wide">
                  {item.label}
                </h3>
                {item.children && (
                  <span className="text-blue-200 text-sm">
                    {item.children.reduce(
                      (sum, col) => sum + col.items.length,
                      0
                    )}{" "}
                    links across {item.children.length} columns
                  </span>
                )}
              </div>
              {item.children && (
                <div
                  className="grid gap-6 p-6"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(item.children.length, 4)}, 1fr)`,
                  }}
                >
                  {item.children.map((col, ci) => (
                    <div key={ci}>
                      <h4 className="font-bold text-[#1a2456] text-sm uppercase tracking-wide border-b-2 border-[#d32f2f] pb-2 mb-3">
                        {col.heading}
                      </h4>
                      <ul className="space-y-1">
                        {col.items.map((link, li) => (
                          <li key={li} className="text-sm text-gray-600">
                            {link.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Brand Pages Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-6">
          Brand Landing Pages
        </h2>
        <p className="text-gray-600 mb-6">
          Each brand page should include: brand logo, story &amp; USPs, full
          product range filtered by brand, category filters, and
          featured/bestselling products.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Jasic", color: "#e63946" },
            { name: "Parweld", color: "#1a2456" },
            { name: "SWP", color: "#2a6496" },
            { name: "Newarc", color: "#333" },
            { name: "Sif / Weldability", color: "#0066cc" },
            { name: "Weldstar", color: "#444" },
            { name: "Mosa", color: "#c62828" },
            { name: "Kemper", color: "#1565c0" },
            { name: "F-Tech", color: "#2e7d32" },
            { name: "Gas Arc", color: "#1a2456" },
            { name: "Exact", color: "#e65100" },
            { name: "Tecna", color: "#6a1b9a" },
            { name: "TAG", color: "#37474f" },
            { name: "Devcon", color: "#00695c" },
            { name: "Magswitch", color: "#ad1457" },
            { name: "Thermal Dynamics", color: "#283593" },
            { name: "Binzel", color: "#004d40" },
            { name: "WSL", color: "#546e7a" },
          ].map((brand) => (
            <div
              key={brand.name}
              className="border-2 border-gray-200 rounded-xl p-4 flex items-center justify-center text-center hover:border-[#d32f2f] hover:shadow-md transition-all cursor-pointer group"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.name[0]}
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#d32f2f]">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Changes Summary */}
      <section className="mb-12 bg-gray-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-[#1a2456] mb-6">
          Key Changes vs Current Site
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Process-first navigation",
              desc: "\"Welding Equipment\" and \"Consumables & Supplies\" replaced with specific process menus: MIG Welding, TIG Welding, Arc Welding, Plasma Cutting, Gas & Oxy-Fuel.",
            },
            {
              title: "Shorter, consistent labels",
              desc: "\"Gas & Plasma Cutting Machines\" \u2192 PLASMA CUTTING. \"Welding Tools & Benches\" \u2192 WELDING WORKSHOP. Labels are concise and SEO-friendly.",
            },
            {
              title: "\"Offers & Deals\" \u2192 Red banner strip",
              desc: "Frees up nav space. Prominent red strip above nav links to offers page.",
            },
            {
              title: "NEW: \"WIRE & RODS\" hub",
              desc: "Cross-process consumables hub: MIG Wire, TIG Filler Rods, MMA Electrodes, Oxy & Brazing Rods. Also accessible from each process menu.",
            },
            {
              title: "NEW: \"ABRASIVES\" standalone",
              desc: "Cutting discs, grinding discs, flap discs, and sanding discs get their own top-level menu instead of being buried in other categories.",
            },
            {
              title: "\"Safety Equipment\" \u2192 SAFETY & PPE",
              desc: "Expanded to 3 columns: Helmets & Eye Protection, Protective Clothing, and Workspace Safety (screens, curtains, blankets).",
            },
            {
              title: "\"Fume Extraction\" \u2192 FUME EXTRACTION (expanded)",
              desc: "Now includes Kemper Mobile & Hi-Vac, Kemper Filtration, F-Tech, and On-Torch & Bench columns with full product breakdown.",
            },
            {
              title: "\"Metal Saws & Mag Drills\" absorbed",
              desc: "Metal saws, magnetic drills, and pipe saws now sit within Welding Machines and Pipe Welding menus for better context.",
            },
            {
              title: "NEW: \"PIPE WELDING\" standalone",
              desc: "\"Pipe Welding & Cutting\" expanded into a full menu: Stands & Handling, Clamps, Cutting & Prep, and Accessories.",
            },
            {
              title: "440 categories mapped with 100% coverage",
              desc: "Every product category from the WooCommerce store is mapped to the new navigation structure with no gaps.",
            },
          ].map((change) => (
            <div
              key={change.title}
              className="bg-white rounded-lg p-4 border border-gray-200"
            >
              <h3 className="font-bold text-[#1a2456] text-sm mb-1">
                {change.title}
              </h3>
              <p className="text-sm text-gray-600">{change.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO vs UX Naming Rules */}
      <section className="mb-12 bg-[#1a2456] rounded-xl p-6 md:p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">
          Sub-Category Naming: SEO vs UX Rules
        </h2>
        <p className="text-blue-200 mb-6">
          Every link in the navigation is a potential search landing page. The label
          must work for both Google and the user scanning the menu. These rules
          govern when to use short labels vs full keyword labels.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Rule 1 */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                SHORT OK
              </span>
              <h3 className="font-bold text-lg">When context is clear</h3>
            </div>
            <p className="text-blue-200 text-sm mb-3">
              If the column heading already provides the keyword context, the item
              label can be short. The heading + label together form the full SEO phrase.
            </p>
            <div className="bg-black/20 rounded-lg p-4 text-sm space-y-2">
              <div>
                <span className="text-blue-300 font-semibold">Column:</span>{" "}
                <span className="text-white font-bold">TIG Filler Rods</span>
              </div>
              <div className="pl-4 space-y-1 text-blue-100">
                <div>&bull; Aluminium <span className="text-green-400">&larr; fine, context = &quot;Aluminium TIG Filler Rods&quot;</span></div>
                <div>&bull; Stainless Steel <span className="text-green-400">&larr; fine, context = &quot;Stainless Steel TIG Filler Rods&quot;</span></div>
                <div>&bull; Mild Steel <span className="text-green-400">&larr; fine, context = &quot;Mild Steel TIG Filler Rods&quot;</span></div>
              </div>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#d32f2f] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                FULL LABEL
              </span>
              <h3 className="font-bold text-lg">When context is ambiguous</h3>
            </div>
            <p className="text-blue-200 text-sm mb-3">
              If the item appears in a cross-cutting hub (Wire &amp; Rods) or a
              generic column, the label must include the full keyword so the user
              and Google know exactly what it is.
            </p>
            <div className="bg-black/20 rounded-lg p-4 text-sm space-y-2">
              <div>
                <span className="text-blue-300 font-semibold">Column:</span>{" "}
                <span className="text-white font-bold">TIG Filler Rods</span>{" "}
                <span className="text-blue-300">(inside Wire &amp; Rods hub)</span>
              </div>
              <div className="pl-4 space-y-1 text-blue-100">
                <div>&bull; Aluminium TIG Rods <span className="text-red-400">&larr; needs qualifier, hub has mixed product types</span></div>
                <div>&bull; Stainless Steel TIG Rods <span className="text-red-400">&larr; &quot;Stainless Steel&quot; alone could be MIG wire</span></div>
                <div>&bull; Mild Steel TIG Rods <span className="text-red-400">&larr; be explicit in cross-cutting menus</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Rules */}
        <div className="border-t border-white/20 pt-6">
          <h3 className="font-bold text-lg mb-4">Quick Reference</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2 text-green-400">Rule 1: Heading gives context</h4>
              <p className="text-blue-200 text-sm">
                Under &quot;MIG Welding Wire&quot;, use &quot;Mild Steel&quot; not
                &quot;Mild Steel MIG Wire&quot;. The heading already says MIG Wire.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2 text-red-400">Rule 2: Hub or mixed context</h4>
              <p className="text-blue-200 text-sm">
                In Wire &amp; Rods hub, use &quot;Mild Steel MIG Wire&quot; not
                &quot;Mild Steel&quot;. Multiple wire/rod types are side by side.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2 text-yellow-400">Rule 3: Standalone items</h4>
              <p className="text-blue-200 text-sm">
                Items like &quot;Bevelling Machines&quot; become &quot;Pipe Bevelling
                Machines&quot; when inside Pipe Welding (not a pipe-specific heading).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Plan Callout */}
      <section className="mb-12">
        <a
          href="/migration"
          className="block bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-6 md:p-8 hover:border-[#d32f2f] transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Next Step
              </span>
              <h2 className="text-2xl font-bold text-[#1a2456] mt-3 mb-2 group-hover:text-[#d32f2f] transition-colors">
                View the WooCommerce Migration Plan
              </h2>
              <p className="text-gray-600">
                Step-by-step plan for migrating 5,944 products to the new category
                structure. Includes risk mitigation, checklist, and prepared files.
              </p>
            </div>
            <svg
              className="w-8 h-8 text-gray-400 group-hover:text-[#d32f2f] transition-colors flex-shrink-0 ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200 text-sm text-gray-400">
        <p>
          Welding &amp; Welder - Navigation Proposal - Not a production site
        </p>
      </footer>
    </div>
  );
}
