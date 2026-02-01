export interface MenuItem {
  label: string;
  href: string;
  children?: MenuColumn[];
  badge?: string;
}

export interface MenuColumn {
  heading: string;
  href: string;
  items: { label: string; href: string }[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Offers & Deals",
    href: "/offers-deals",
    children: [
      {
        heading: "Current Offers",
        href: "/offers-deals",
        items: [
          { label: "Clearance", href: "/offers/clearance" },
          { label: "Consumable Deals", href: "/offers/consumables" },
          { label: "Safety Equipment Offers", href: "/offers/safety" },
          { label: "Welding Machine Offers", href: "/offers/welding-machines" },
        ],
      },
    ],
  },
  {
    label: "MIG Welding",
    href: "/mig-welding",
    children: [
      {
        heading: "MIG Welders",
        href: "/mig-welding/welders",
        items: [
          { label: "Jasic MIG Welders", href: "/mig-welding/welders/jasic" },
          { label: "Multi Process Welders", href: "/mig-welding/multi-process" },
          { label: "Parweld MIG Welders", href: "/mig-welding/welders/parweld" },
          { label: "SWP MIG Welders", href: "/mig-welding/welders/swp" },
          { label: "Weldability Sif MIG Welders", href: "/mig-welding/welders/weldability-sif" },
        ],
      },
      {
        heading: "MIG Torches & Parts",
        href: "/mig-welding/torches",
        items: [
          { label: "Binzel-Style Consumables", href: "/mig-welding/torches/binzel-consumables" },
          { label: "Euro Connection MIG Torches", href: "/mig-welding/torches/euro" },
          { label: "Euro MIG Torches - ERGO", href: "/mig-welding/torches/ergo" },
          { label: "MIG Liners", href: "/mig-welding/torches/liners" },
          { label: "MIG Welding Nozzles", href: "/mig-welding/torches/nozzles" },
        ],
      },
      {
        heading: "MIG Wire",
        href: "/mig-welding/wire",
        items: [
          { label: "Aluminium MIG Wire", href: "/mig-welding/wire/aluminium" },
          { label: "Brazing MIG Wire", href: "/mig-welding/wire/brazing" },
          { label: "Bulk MIG Wire", href: "/mig-welding/wire/bulk" },
          { label: "Copper Free MIG Wire", href: "/mig-welding/wire/copper-free" },
          { label: "Flux Cored MIG Wire", href: "/mig-welding/wire/flux-cored" },
          { label: "Hard Facing MIG Wire", href: "/mig-welding/wire/hard-facing" },
          { label: "Mild Steel MIG Wire", href: "/mig-welding/wire/mild-steel" },
          { label: "Stainless Steel MIG Wire", href: "/mig-welding/wire/stainless" },
        ],
      },
      {
        heading: "MIG Accessories",
        href: "/mig-welding/accessories",
        items: [
          { label: "Anti-Spatter Spray", href: "/consumables/chemicals/anti-spatter" },
          { label: "CO2 Regulators", href: "/gas/regulators/co2" },
          { label: "Gas Economisers / Flowmeters", href: "/gas/economisers" },
          { label: "Inert Gas Regulators", href: "/gas/regulators/inert" },
          { label: "MIG Gas Welding Hoses", href: "/gas/hoses/mig" },
          { label: "Welder Water Coolers", href: "/machines/water-coolers" },
          { label: "Welding Gloves", href: "/safety/gloves" },
          { label: "Welding Helmets", href: "/safety/helmets" },
        ],
      },
    ],
  },
  {
    label: "TIG Welding",
    href: "/tig-welding",
    children: [
      {
        heading: "TIG Welders",
        href: "/tig-welding/welders",
        items: [
          { label: "Jasic TIG Welders", href: "/tig-welding/welders/jasic" },
          { label: "Multi Process Welders", href: "/tig-welding/multi-process" },
          { label: "Newarc TIG Welders", href: "/tig-welding/welders/newarc" },
          { label: "Sif TIG Welders", href: "/tig-welding/welders/sif" },
          { label: "SWP TIG Welders", href: "/tig-welding/welders/swp" },
        ],
      },
      {
        heading: "TIG Torches & Tungsten",
        href: "/tig-welding/torches",
        items: [
          { label: "Ceriated Tungsten", href: "/tig-welding/tungsten/ceriated" },
          { label: "Lanthanated Tungsten", href: "/tig-welding/tungsten/lanthanated" },
          { label: "Superstrike AC/DC", href: "/tig-welding/tungsten/superstrike" },
          { label: "Thoriated Tungsten", href: "/tig-welding/tungsten/thoriated" },
          { label: "TIG Torch Adaptors", href: "/tig-welding/torches/adaptors" },
          { label: "TIG Torch Consumables", href: "/tig-welding/torches/consumables" },
          { label: "TIG Torches & Spare Parts", href: "/tig-welding/torches/all" },
          { label: "Zirconiated Tungsten", href: "/tig-welding/tungsten/zirconiated" },
        ],
      },
      {
        heading: "TIG Filler Rods",
        href: "/tig-welding/filler-rods",
        items: [
          { label: "Aluminium", href: "/tig-welding/filler-rods/aluminium" },
          { label: "Brazing / Bronze", href: "/tig-welding/filler-rods/brazing" },
          { label: "Copper / Copper-Nickel", href: "/tig-welding/filler-rods/copper" },
          { label: "Dissimilar Steels", href: "/tig-welding/filler-rods/dissimilar" },
          { label: "Duplex Stainless Steel", href: "/tig-welding/filler-rods/duplex" },
          { label: "Hard Facing", href: "/tig-welding/filler-rods/hard-facing" },
          { label: "Mild Steel", href: "/tig-welding/filler-rods/mild-steel" },
          { label: "Nickel Alloy", href: "/tig-welding/filler-rods/nickel" },
          { label: "Stainless Steel", href: "/tig-welding/filler-rods/stainless" },
          { label: "Titanium", href: "/tig-welding/filler-rods/titanium" },
        ],
      },
      {
        heading: "TIG Accessories",
        href: "/tig-welding/accessories",
        items: [
          { label: "Gas Regulators", href: "/gas/regulators/inert" },
          { label: "Pickling & Neutralising Agents", href: "/tig-welding/weld-cleaning/pickling" },
          { label: "Tungsten Grinders - Bench", href: "/tig-welding/tungsten-grinders/bench" },
          { label: "Tungsten Grinders - Handheld", href: "/tig-welding/tungsten-grinders/handheld" },
          { label: "Tungsten Grinders w/ Extractors", href: "/tig-welding/tungsten-grinders/extractors" },
          { label: "Weld Cleaning Equipment", href: "/tig-welding/weld-cleaning" },
          { label: "Welder Water Coolers", href: "/machines/water-coolers" },
          { label: "Welding Helmets", href: "/safety/helmets" },
        ],
      },
    ],
  },
  {
    label: "Arc / MMA",
    href: "/arc-mma",
    children: [
      {
        heading: "Arc/MMA Welders",
        href: "/arc-mma/welders",
        items: [
          { label: "Jasic MMA Welders", href: "/arc-mma/welders/jasic" },
          { label: "Multi Process Welders", href: "/arc-mma/multi-process" },
          { label: "Newarc MMA Welders", href: "/arc-mma/welders/newarc" },
          { label: "Parweld MMA Welders", href: "/arc-mma/welders/parweld" },
        ],
      },
      {
        heading: "MMA Electrodes",
        href: "/arc-mma/electrodes",
        items: [
          { label: "Cast Iron", href: "/arc-mma/electrodes/cast-iron" },
          { label: "Cutting / Gouging", href: "/arc-mma/electrodes/cutting-gouging" },
          { label: "Hard Surfacing", href: "/arc-mma/electrodes/hard-surfacing" },
          { label: "Stainless Steel", href: "/arc-mma/electrodes/stainless" },
          { label: "Steel & Low Hydrogen", href: "/arc-mma/electrodes/steel" },
        ],
      },
      {
        heading: "Cable & Connectors",
        href: "/arc-mma/cable",
        items: [
          { label: "Cable Plugs & Sockets", href: "/arc-mma/cable/plugs-sockets" },
          { label: "Double Insulated Cable", href: "/arc-mma/cable/double-insulated" },
          { label: "Earth Clamps", href: "/arc-mma/earth-clamps" },
          { label: "Electrode Holders", href: "/arc-mma/electrode-holders" },
          { label: "Re-usable Cable Lugs", href: "/arc-mma/cable/lugs" },
          { label: "Welding Cable (Copper/PVC)", href: "/arc-mma/cable/pvc" },
          { label: "Welding Cable (Copper/Rubber)", href: "/arc-mma/cable/rubber" },
          { label: "Welding Cable Sets", href: "/arc-mma/cable/sets" },
        ],
      },
      {
        heading: "Arc Accessories",
        href: "/arc-mma/accessories",
        items: [
          { label: "Arc-Air Gouging Carbons", href: "/arc-mma/gouging/carbons" },
          { label: "Carbon Arc Gouging Torches", href: "/arc-mma/gouging/torches" },
          { label: "Electrode Quivers & Ovens", href: "/arc-mma/ovens" },
          { label: "Stud Welders (CD)", href: "/arc-mma/stud-welding/cd-welders" },
          { label: "Weld Studs - Aluminium", href: "/arc-mma/stud-welding/aluminium-studs" },
          { label: "Weld Studs - Stainless Steel", href: "/arc-mma/stud-welding/ss-studs" },
          { label: "Welding Helmets", href: "/safety/helmets" },
        ],
      },
    ],
  },
  {
    label: "Plasma & Cutting",
    href: "/plasma-cutting",
    children: [
      {
        heading: "Plasma Cutters",
        href: "/plasma-cutting/plasma",
        items: [
          { label: "Jasic Plasma Spares", href: "/plasma-cutting/plasma/jasic-spares" },
          { label: "Plasma Cutters", href: "/plasma-cutting/plasma/cutters" },
          { label: "Plasma Cutting Torches", href: "/plasma-cutting/plasma/torches" },
          { label: "Thermal Dynamics Spares", href: "/plasma-cutting/plasma/thermal-dynamics" },
          { label: "Weldability Plasma Spares", href: "/plasma-cutting/plasma/weldability-spares" },
        ],
      },
      {
        heading: "Cutting Machines",
        href: "/plasma-cutting/machines",
        items: [
          { label: "Gas Cutting Machines (Oxy-Fuel)", href: "/plasma-cutting/machines/gas-oxy" },
          { label: "Pipe Cutting Machines (Oxy)", href: "/plasma-cutting/machines/pipe-oxy" },
          { label: "Plate Bevellers", href: "/plasma-cutting/bevellers" },
          { label: "Straight Line Cutting Machines", href: "/plasma-cutting/machines/straight-line" },
        ],
      },
      {
        heading: "Cutting Nozzles",
        href: "/plasma-cutting/nozzles",
        items: [
          { label: "NFF Cutting Nozzles", href: "/plasma-cutting/nozzles/nff" },
          { label: "Oxy Propane Gouging Nozzles PGNM", href: "/plasma-cutting/nozzles/pgnm" },
          { label: "Oxy/Acetylene Cutting Nozzles ANME", href: "/plasma-cutting/nozzles/anme" },
          { label: "Oxy/Acetylene Gouging Nozzles AGNM", href: "/plasma-cutting/nozzles/agnm" },
          { label: "Oxy/Propane Cutting Nozzles PNM", href: "/plasma-cutting/nozzles/pnm" },
          { label: "Victor Cutting Nozzles", href: "/plasma-cutting/nozzles/victor" },
          { label: "VVC Cutting Nozzles", href: "/plasma-cutting/nozzles/vvc" },
        ],
      },
      {
        heading: "Cutting Accessories",
        href: "/plasma-cutting/accessories",
        items: [
          { label: "Air Compressors", href: "/workshop/air-compressors" },
          { label: "Arc-Air Gouging Carbons", href: "/plasma-cutting/gouging/carbons" },
          { label: "Carbon Arc Gouging Torches", href: "/plasma-cutting/gouging/torches" },
          { label: "Cutting Guides Oxy/Acet/Propane", href: "/plasma-cutting/guides" },
        ],
      },
    ],
  },
  {
    label: "Gas & Oxy-Fuel",
    href: "/gas-oxy-fuel",
    children: [
      {
        heading: "Oxy-Fuel Equipment",
        href: "/gas-oxy-fuel/equipment",
        items: [
          { label: "Cutting & Welding Sets", href: "/gas-oxy-fuel/sets" },
          { label: "Gas Cutting Torches", href: "/gas-oxy-fuel/torches/cutting" },
          { label: "Lightweight Welding Nozzles", href: "/gas-oxy-fuel/nozzles/lightweight" },
          { label: "Oxy-Acetylene Torches", href: "/gas-oxy-fuel/torches/oxy-acet" },
          { label: "Oxy-Propane Torches", href: "/gas-oxy-fuel/torches/oxy-propane" },
          { label: "Type 3/5 HD Torch Components", href: "/gas-oxy-fuel/torches/components" },
          { label: "Welding Nozzles (DH/HD)", href: "/gas-oxy-fuel/nozzles/welding" },
        ],
      },
      {
        heading: "Oxy Welding Rods",
        href: "/gas-oxy-fuel/rods",
        items: [
          { label: "Aluminium Welding Rods", href: "/gas-oxy-fuel/rods/aluminium" },
          { label: "Brazing Rods", href: "/gas-oxy-fuel/rods/brazing" },
          { label: "Copper Phosphorus Rods", href: "/gas-oxy-fuel/rods/copper-phosphorus" },
          { label: "Disposable Gas Cylinders", href: "/gas-oxy-fuel/disposable-cylinders" },
          { label: "Silver Solder Rods", href: "/gas-oxy-fuel/rods/silver-solder" },
          { label: "Steel Welding Rods", href: "/gas-oxy-fuel/rods/steel" },
        ],
      },
      {
        heading: "Gas Delivery & Control",
        href: "/gas-oxy-fuel/delivery",
        items: [
          { label: "CO2 Regulators", href: "/gas-oxy-fuel/regulators/co2" },
          { label: "Flashback Arrestors", href: "/gas-oxy-fuel/flashback-arrestors" },
          { label: "Fuel Gas Regulators", href: "/gas-oxy-fuel/regulators/fuel" },
          { label: "Gas Alarm Panels", href: "/gas-oxy-fuel/alarm-panels" },
          { label: "Gas Economisers / Flowmeters", href: "/gas-oxy-fuel/economisers" },
          { label: "High Pressure Regulators", href: "/gas-oxy-fuel/regulators/high-pressure" },
          { label: "Inert Gas Regulators", href: "/gas-oxy-fuel/regulators/inert" },
          { label: "NEVOC Regulators", href: "/gas-oxy-fuel/regulators/nevoc" },
          { label: "Oxygen Regulators", href: "/gas-oxy-fuel/regulators/oxygen" },
        ],
      },
      {
        heading: "Hoses, Fittings & Storage",
        href: "/gas-oxy-fuel/hoses",
        items: [
          { label: "Argon / Shielding Gas Hose", href: "/gas-oxy-fuel/hoses/argon" },
          { label: "Cylinder Fittings & Adaptors", href: "/gas-oxy-fuel/cylinder-fittings" },
          { label: "Gas Control Outlet Points", href: "/gas-oxy-fuel/outlet-points" },
          { label: "Gas Cylinder Cages", href: "/gas-oxy-fuel/storage/cages" },
          { label: "Gas Cylinder Trolleys", href: "/gas-oxy-fuel/storage/trolleys" },
          { label: "High Pressure Gas Hoses", href: "/gas-oxy-fuel/hoses/high-pressure" },
          { label: "Hose Fittings & Couplers", href: "/gas-oxy-fuel/fittings" },
          { label: "Manifold Panels", href: "/gas-oxy-fuel/manifolds" },
          { label: "Oxy Fuel Hoses", href: "/gas-oxy-fuel/hoses/oxy-fuel" },
          { label: "Twin Welding Hoses", href: "/gas-oxy-fuel/hoses/twin" },
        ],
      },
    ],
  },
  {
    label: "Machines",
    href: "/machines",
    children: [
      {
        heading: "Welding Machines",
        href: "/machines/welding",
        items: [
          { label: "Arc/MMA Welders", href: "/arc-mma/welders" },
          { label: "MIG Welders", href: "/mig-welding/welders" },
          { label: "Multi Process Welders", href: "/machines/multi-process" },
          { label: "Spot Welders - Pedestal", href: "/machines/spot-welders/pedestal" },
          { label: "Spot Welders - Portable", href: "/machines/spot-welders/portable" },
          { label: "Stud Welders (CD)", href: "/machines/stud-welders" },
          { label: "TIG Welders", href: "/tig-welding/welders" },
        ],
      },
      {
        heading: "Cutting Machines",
        href: "/machines/cutting",
        items: [
          { label: "Chop Saws / Cut-Off Saws", href: "/machines/saws/chop" },
          { label: "Circular Saws", href: "/machines/saws/circular" },
          { label: "Magnetic Drills", href: "/machines/magnetic-drills" },
          { label: "Pipe Cutting Machines", href: "/plasma-cutting/machines/pipe-oxy" },
          { label: "Pipe Saws (Exact, GBC, TAG)", href: "/machines/saws/pipe" },
          { label: "Plasma Cutters", href: "/plasma-cutting/plasma/cutters" },
          { label: "Plate Bevellers", href: "/plasma-cutting/bevellers" },
          { label: "Straight Line Cutters", href: "/plasma-cutting/machines/straight-line" },
        ],
      },
      {
        heading: "Specialist Equipment",
        href: "/machines/specialist",
        items: [
          { label: "Broaching Cutters", href: "/machines/broaching-cutters" },
          { label: "Spot Welding Electrodes", href: "/machines/spot-welders/electrodes" },
          { label: "Thermal Spray Equipment", href: "/machines/thermal-spray" },
          { label: "Tool Balancers", href: "/machines/tool-balancers" },
          { label: "Tungsten Grinders", href: "/tig-welding/tungsten-grinders" },
          { label: "Weld Cleaning Machines", href: "/tig-welding/weld-cleaning" },
        ],
      },
      {
        heading: "Power & Cooling",
        href: "/machines/power",
        items: [
          { label: "Filter Kits & Servicing", href: "/machines/generators/servicing" },
          { label: "Generators", href: "/machines/generators" },
          { label: "Lighting Towers", href: "/machines/lighting-towers" },
          { label: "Mosa Welder Generators", href: "/machines/generators/mosa" },
          { label: "Spares & Accessories", href: "/machines/generators/spares" },
          { label: "Welder Generators", href: "/machines/generators/welder" },
          { label: "Welder Water Coolers", href: "/machines/water-coolers" },
        ],
      },
    ],
  },
  {
    label: "Safety & Extraction",
    href: "/safety",
    children: [
      {
        heading: "Welding Helmets & Eye Protection",
        href: "/safety/helmets",
        items: [
          { label: "Air Fed Face Shields", href: "/safety/eye/air-fed" },
          { label: "Auto-Darkening Welding Helmets", href: "/safety/helmets/auto-darkening" },
          { label: "Respirator Masks", href: "/safety/eye/respirators" },
          { label: "Safety Goggles", href: "/safety/eye/goggles" },
          { label: "Safety Spectacles", href: "/safety/eye/spectacles" },
          { label: "Safety Visors", href: "/safety/eye/visors" },
          { label: "Welding Helmet Spares", href: "/safety/helmets/spares" },
          { label: "Welding Masks", href: "/safety/helmets/masks" },
        ],
      },
      {
        heading: "Protective Clothing",
        href: "/safety/clothing",
        items: [
          { label: "Capes & Sleeves", href: "/safety/clothing/capes" },
          { label: "Caps & Balaclavas", href: "/safety/clothing/caps" },
          { label: "Heat Reflective Clothing", href: "/safety/clothing/heat-reflective" },
          { label: "Trousers & Spats", href: "/safety/clothing/trousers" },
          { label: "Welding Aprons", href: "/safety/clothing/aprons" },
          { label: "Welding Gloves & Gauntlets", href: "/safety/gloves" },
          { label: "Welding Jackets", href: "/safety/clothing/jackets" },
          { label: "Welding Overalls", href: "/safety/clothing/overalls" },
        ],
      },
      {
        heading: "Fume Extraction",
        href: "/safety/fume-extraction",
        items: [
          { label: "Bench Top Extractors", href: "/safety/fume/bench-top" },
          { label: "F-Tech Fume Extraction", href: "/safety/fume/f-tech" },
          { label: "Kemper CleanAirTower", href: "/safety/fume/kemper-tower" },
          { label: "Kemper Filter Tables", href: "/safety/fume/kemper-tables" },
          { label: "Kemper Hi-Vacuum Extraction", href: "/safety/fume/kemper-hi-vac" },
          { label: "Kemper Mobile Fume Extraction", href: "/safety/fume/kemper-mobile" },
          { label: "Kemper Spares & Accessories", href: "/safety/fume/kemper-spares" },
          { label: "Kemper Static Filter Units", href: "/safety/fume/kemper-static" },
          { label: "On-Torch Fume Extraction", href: "/safety/fume/on-torch" },
        ],
      },
      {
        heading: "Workspace Safety",
        href: "/safety/workspace",
        items: [
          { label: "Fire Barrier Fabric", href: "/safety/fire-barrier" },
          { label: "Fire Retardant Tarpaulin", href: "/safety/tarpaulin" },
          { label: "Spill Containment Kits", href: "/safety/spill-kits" },
          { label: "Welding Blankets & Mats", href: "/safety/blankets" },
          { label: "Welding Screens & Curtains", href: "/safety/screens" },
          { label: "Welding Strip Curtains", href: "/safety/screens/strip" },
          { label: "Welding Tents & Shelters", href: "/safety/tents" },
        ],
      },
    ],
  },
  {
    label: "Workshop & Tools",
    href: "/workshop",
    children: [
      {
        heading: "Welding Benches & Tables",
        href: "/workshop/benches",
        items: [
          { label: "Bench Accessories", href: "/workshop/benches/accessories" },
          { label: "Heavy Duty Welding Benches", href: "/workshop/benches/heavy-duty" },
          { label: "Medium Duty Benches", href: "/workshop/benches/medium-duty" },
          { label: "Mobile Work Benches", href: "/workshop/benches/mobile" },
          { label: "Stainless Steel Benches", href: "/workshop/benches/stainless" },
          { label: "Super Heavy Duty Benches", href: "/workshop/benches/super-heavy" },
        ],
      },
      {
        heading: "Pipe Welding & Cutting",
        href: "/workshop/pipe",
        items: [
          { label: "Drain Test Plugs", href: "/workshop/pipe/drain-plugs" },
          { label: "Pipe Bevelling Machines", href: "/workshop/pipe/bevelling" },
          { label: "Pipe Measuring & Marking", href: "/workshop/pipe/measuring" },
          { label: "Pipe Purging Equipment", href: "/workshop/pipe/purging" },
          { label: "Pipe Saws", href: "/workshop/pipe/saws" },
          { label: "Pipe Stands & Rotators", href: "/workshop/pipe/stands" },
          { label: "Pipe Welding Clamps", href: "/workshop/pipe/clamps" },
          { label: "Weld Backing Tape", href: "/workshop/pipe/backing-tape" },
        ],
      },
      {
        heading: "Air Tools & Compressors",
        href: "/workshop/air-tools",
        items: [
          { label: "Air Angle Grinders", href: "/workshop/air-tools/grinders" },
          { label: "Air Drills", href: "/workshop/air-tools/drills" },
          { label: "Air Impact Wrenches", href: "/workshop/air-tools/impact-wrenches" },
          { label: "Air Sanders / Polishers", href: "/workshop/air-tools/sanders" },
          { label: "Belt Driven Compressors", href: "/workshop/compressors/belt-driven" },
          { label: "Direct Drive Compressors", href: "/workshop/compressors/direct-drive" },
          { label: "Low Noise Compressors", href: "/workshop/compressors/low-noise" },
          { label: "Paint Spray Guns", href: "/workshop/air-tools/paint-guns" },
          { label: "Screw Compressors", href: "/workshop/compressors/screw" },
        ],
      },
      {
        heading: "Tools & Consumables",
        href: "/workshop/tools",
        items: [
          { label: "Cutting Discs", href: "/workshop/abrasives/cutting" },
          { label: "Devcon Maintenance Products", href: "/workshop/devcon" },
          { label: "Flap Discs", href: "/workshop/abrasives/flap" },
          { label: "Grinding Discs", href: "/workshop/abrasives/grinding" },
          { label: "Magnetic Welding Positioners", href: "/workshop/positioners" },
          { label: "Temperature Indicator Pens", href: "/workshop/tools/temp-pens" },
          { label: "Tool Kit Sets & Cabinets", href: "/workshop/tools/kits" },
          { label: "Weld Backing Ceramics", href: "/workshop/consumables/ceramics" },
          { label: "Welding Chemicals & Sprays", href: "/workshop/chemicals" },
          { label: "Welding Gauges", href: "/workshop/tools/gauges" },
        ],
      },
    ],
  },
  {
    label: "Brands",
    href: "/brands",
    children: [
      {
        heading: "Featured Brands",
        href: "/brands",
        items: [
          { label: "Gas Arc - Regulators & Gas Control", href: "/brands/gas-arc" },
          { label: "Jasic - MIG, TIG & Plasma", href: "/brands/jasic" },
          { label: "Kemper - Fume Extraction", href: "/brands/kemper" },
          { label: "Parweld - Welders & Consumables", href: "/brands/parweld" },
          { label: "Sif / Weldability - Consumables", href: "/brands/sif-weldability" },
        ],
      },
      {
        heading: "Brands A - K",
        href: "/brands",
        items: [
          { label: "Binzel - MIG Torches & Parts", href: "/brands/binzel" },
          { label: "Devcon - Maintenance Products", href: "/brands/devcon" },
          { label: "Exact - Pipe Saws", href: "/brands/exact" },
          { label: "F-Tech - Fume Extraction", href: "/brands/f-tech" },
          { label: "Jasic - Welding Machines", href: "/brands/jasic" },
          { label: "Kemper - Fume Extraction & Filtration", href: "/brands/kemper" },
        ],
      },
      {
        heading: "Brands M - S",
        href: "/brands",
        items: [
          { label: "Magswitch - Magnetic Positioners", href: "/brands/magswitch" },
          { label: "Mosa - Welder Generators", href: "/brands/mosa" },
          { label: "Newarc - TIG & MMA Welders", href: "/brands/newarc" },
          { label: "Parweld - Welders & Accessories", href: "/brands/parweld" },
          { label: "Sif / Weldability - Filler Metals", href: "/brands/sif-weldability" },
          { label: "SWP - MIG, TIG & Plasma", href: "/brands/swp" },
        ],
      },
      {
        heading: "Brands T - W",
        href: "/brands",
        items: [
          { label: "TAG - Pipe Saws", href: "/brands/tag" },
          { label: "Tecna - Spot Welders", href: "/brands/tecna" },
          { label: "Thermal Dynamics - Plasma", href: "/brands/thermal-dynamics" },
          { label: "Weldstar - Multi Process Welders", href: "/brands/weldstar" },
          { label: "WSL - On-Torch Extraction", href: "/brands/wsl" },
        ],
      },
    ],
  },
];
