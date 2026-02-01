import { menuItems } from "./data/menuData";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a2456] to-[#2a3a7a] rounded-xl p-8 md:p-12 mb-12 text-white">
        <div className="max-w-2xl">
          <span className="bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Navigation Mockup v2
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Revised 13-Item Mega Menu
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed">
            Streamlined navigation for weldingandwelder.com with shorter labels,
            dedicated Wire &amp; Rods, Abrasives, Pipe, and Extraction sections.
            Offers moved to a red banner strip above the nav. Hover over the
            menu items above to explore all 13 dropdowns.
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
          {/* Before */}
          <div className="border-2 border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Previous (v1)
              </span>
              <h3 className="font-bold text-gray-700">10 Items</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Offers & Deals",
                "MIG Welding",
                "TIG Welding",
                "Arc / MMA",
                "Plasma & Cutting",
                "Gas & Oxy-Fuel",
                "Machines",
                "Safety & Extraction",
                "Workshop & Tools",
                "Brands",
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
              123 characters across 10 items. Long labels cause wrapping on
              smaller screens. Wire/rods only accessible via process menus.
            </div>
          </div>

          {/* After */}
          <div className="border-2 border-[#1a2456] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Revised (v2)
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
              73 characters across 13 items. Offers in banner strip. Wire &amp;
              rods available both in process menus AND a dedicated hub.
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
          Key Changes in v2
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Shorter labels (73 vs 123 chars)",
              desc: "MIG Welding → MIG, TIG Welding → TIG, Arc/MMA → ARC, Plasma & Cutting → PLASMA, Gas & Oxy-Fuel → GAS, Workshop & Tools → WORKSHOP",
            },
            {
              title: "\"Offers & Deals\" → Red banner strip",
              desc: "Frees up nav space. Prominent red strip above nav links to offers page.",
            },
            {
              title: "NEW: \"WIRE & RODS\" hub",
              desc: "Cross-process consumables: MIG Wire, TIG Filler Rods, MMA Electrodes, Oxy & Brazing Rods. Dual entry points with process menus.",
            },
            {
              title: "NEW: \"ABRASIVES\" standalone",
              desc: "Split from Workshop. Cutting & Grinding, Finishing, and Accessories columns.",
            },
            {
              title: "\"Safety & Extraction\" split into two",
              desc: "SAFETY (helmets, clothing, workspace) and EXTRACTION (Kemper, F-Tech, on-torch, bench) as separate top-level items.",
            },
            {
              title: "NEW: \"PIPE\" standalone",
              desc: "Split from Workshop. Stands & Handling, Clamps, Cutting & Prep, Accessories.",
            },
            {
              title: "WORKSHOP slimmed down",
              desc: "Loses pipe and abrasives. Keeps benches, air tools, tools & equipment, chemicals & consumables.",
            },
            {
              title: "Process menus unchanged",
              desc: "MIG, TIG, ARC, PLASMA, GAS keep same internal structure. Wire/rods remain in both process menus and the new hub.",
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

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200 text-sm text-gray-400">
        <p>
          Welding &amp; Welder - Navigation Mockup v2 - Not a production site
        </p>
      </footer>
    </main>
  );
}
