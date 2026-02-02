export interface MenuItem {
  label: string;
  href: string;
  children?: MenuColumn[];
  badge?: string;
}

export interface SubCategory {
  label: string;
  href: string;
}

export interface MenuColumn {
  heading: string;
  href: string;
  image?: string;
  items: { label: string; href: string; image?: string; subcategories?: SubCategory[] }[];
  icon?: string;
}

export const menuItems: MenuItem[] = [
  // 1. MIG
  {
    label: "MIG Welding",
    href: "/mig-welding",
    children: [
      {
        heading: "MIG Welding Machines",
        href: "/mig-welding/welders",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Jasic MIG Welders", href: "/mig-welding/welders/jasic", image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=200&h=200&fit=crop&auto=format" },
          { label: "Multi Process Welders", href: "/mig-welding/multi-process", image: "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?w=200&h=200&fit=crop&auto=format" },
          { label: "Parweld MIG Welders", href: "/mig-welding/welders/parweld", image: "https://images.unsplash.com/photo-1507497806295-753c4108560c?w=200&h=200&fit=crop&auto=format" },
          { label: "SWP MIG Welders", href: "/mig-welding/welders/swp", image: "https://images.unsplash.com/photo-1558611997-dd5b20e08c71?w=200&h=200&fit=crop&auto=format" },
          { label: "Weldability Sif MIG Welders", href: "/mig-welding/welders/weldability-sif", image: "https://images.unsplash.com/photo-1564182998523-6923112e7d6b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "MIG Welding Torches & Parts",
        href: "/mig-welding/torches",
        image: "https://images.unsplash.com/photo-1526634140919-468dc3ae3870?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Binzel-Style Consumables", href: "/mig-welding/torches/binzel-consumables", image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Binzle-Style MIG Consumables", href: "/mig-welding/torches/binzel-consumables/binzle-style-mig-consumables" }, { label: "Binzle-Style MIG Torch Consumables", href: "/mig-welding/torches/binzel-consumables/binzle-style-mig-torch-consumables" }] },
          { label: "Euro Connection MIG Torches", href: "/mig-welding/torches/euro", image: "https://images.unsplash.com/photo-1508465818649-14a170138405?w=200&h=200&fit=crop&auto=format" },
          { label: "Euro MIG Torches - ERGO", href: "/mig-welding/torches/ergo", image: "https://images.unsplash.com/photo-1683470157212-cd4005549fce?w=200&h=200&fit=crop&auto=format" },
          { label: "MIG Liners", href: "/mig-welding/torches/liners", image: "https://images.unsplash.com/photo-1466779561253-0a08336ba2ab?w=200&h=200&fit=crop&auto=format" },
          { label: "MIG Welding Nozzles", href: "/mig-welding/torches/nozzles", image: "https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "MIG Welding Wire",
        href: "/mig-welding/wire",
        image: "https://images.unsplash.com/photo-1485881922961-fbe39329af2a?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Aluminium MIG Wire", href: "/mig-welding/wire/aluminium", image: "https://images.unsplash.com/photo-1668140736531-d23950307b3c?w=200&h=200&fit=crop&auto=format" },
          { label: "Brazing MIG Wire", href: "/mig-welding/wire/brazing", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop&auto=format" },
          { label: "Bulk MIG Wire", href: "/mig-welding/wire/bulk", image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=200&h=200&fit=crop&auto=format" },
          { label: "Copper Free MIG Wire", href: "/mig-welding/wire/copper-free", image: "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?w=200&h=200&fit=crop&auto=format" },
          { label: "Flux Cored MIG Wire", href: "/mig-welding/wire/flux-cored", image: "https://images.unsplash.com/photo-1507497806295-753c4108560c?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Flux Cored MIG Wire - Stainless Steel", href: "/mig-welding/wire/flux-cored/flux-cored-mig-wire-stainless-steel" }, { label: "Flux Cored MIG Wire - Steel", href: "/mig-welding/wire/flux-cored/flux-cored-mig-wire-steel" }] },
          { label: "Hard Facing MIG Wire", href: "/mig-welding/wire/hard-facing", image: "https://images.unsplash.com/photo-1558611997-dd5b20e08c71?w=200&h=200&fit=crop&auto=format" },
          { label: "Mild Steel MIG Wire", href: "/mig-welding/wire/mild-steel", image: "https://images.unsplash.com/photo-1564182998523-6923112e7d6b?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "High Strength Steel MIG Wire", href: "/mig-welding/wire/mild-steel/high-strength-steel-mig-wire" }] },
          { label: "Stainless Steel MIG Wire", href: "/mig-welding/wire/stainless", image: "https://images.unsplash.com/photo-1526634140919-468dc3ae3870?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "MIG Welding Accessories",
        href: "/mig-welding/accessories",
        image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Anti-Spatter Spray", href: "/workshop/chemicals/anti-spatter", image: "https://images.unsplash.com/photo-1508465818649-14a170138405?w=200&h=200&fit=crop&auto=format" },
          { label: "CO2 Regulators", href: "/gas-oxy-fuel/regulators/co2", image: "https://images.unsplash.com/photo-1683470157212-cd4005549fce?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Economisers / Flowmeters", href: "/gas-oxy-fuel/economisers", image: "https://images.unsplash.com/photo-1466779561253-0a08336ba2ab?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Gas Economisers - Oxy/Acetylene", href: "/gas-oxy-fuel/economisers/gas-economisers-oxy-acetylene" }] },
          { label: "Inert Gas Regulators", href: "/gas-oxy-fuel/regulators/inert", image: "https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?w=200&h=200&fit=crop&auto=format" },
          { label: "MIG Gas Welding Hoses", href: "/gas-oxy-fuel/hoses/mig", image: "https://images.unsplash.com/photo-1485881922961-fbe39329af2a?w=200&h=200&fit=crop&auto=format" },
          { label: "Welder Water Coolers", href: "/machines/water-coolers", image: "https://images.unsplash.com/photo-1668140736531-d23950307b3c?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Gloves", href: "/safety/gloves", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Helmets", href: "/safety/helmets", image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 2. TIG
  {
    label: "TIG Welding",
    href: "/tig-welding",
    children: [
      {
        heading: "TIG Welding Machines",
        href: "/tig-welding/welders",
        image: "https://images.unsplash.com/photo-1665492164147-4204734cb7f6?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Jasic TIG Welders", href: "/tig-welding/welders/jasic", image: "https://images.unsplash.com/photo-1665492158350-a44f1ca3689f?w=200&h=200&fit=crop&auto=format" },
          { label: "Multi Process Welders", href: "/tig-welding/multi-process", image: "https://images.unsplash.com/photo-1665492100272-75508f731649?w=200&h=200&fit=crop&auto=format" },
          { label: "Newarc TIG Welders", href: "/tig-welding/welders/newarc", image: "https://images.unsplash.com/photo-1654178186407-6733a1cb41b5?w=200&h=200&fit=crop&auto=format" },
          { label: "Sif TIG Welders", href: "/tig-welding/welders/sif", image: "https://images.unsplash.com/photo-1665492302891-502760d2d888?w=200&h=200&fit=crop&auto=format" },
          { label: "SWP TIG Welders", href: "/tig-welding/welders/swp", image: "https://images.unsplash.com/photo-1665492296636-6bb39f409f02?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "TIG Welding Torches & Tungsten",
        href: "/tig-welding/torches",
        image: "https://images.unsplash.com/photo-1665494126333-ce412a7b07a9?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Ceriated Tungsten", href: "/tig-welding/tungsten/ceriated", image: "https://images.unsplash.com/photo-1548945665-56d2712b4986?w=200&h=200&fit=crop&auto=format" },
          { label: "Lanthanated Tungsten", href: "/tig-welding/tungsten/lanthanated", image: "https://images.unsplash.com/photo-1665492085149-21fcb2617dba?w=200&h=200&fit=crop&auto=format" },
          { label: "Superstrike AC/DC", href: "/tig-welding/tungsten/superstrike", image: "https://images.unsplash.com/photo-1665492133710-2bac71d3c14f?w=200&h=200&fit=crop&auto=format" },
          { label: "Thoriated Tungsten", href: "/tig-welding/tungsten/thoriated", image: "https://images.unsplash.com/photo-1665492183652-569975f5d06d?w=200&h=200&fit=crop&auto=format" },
          { label: "TIG Torch Adaptors", href: "/tig-welding/torches/adaptors", image: "https://images.unsplash.com/photo-1665492339877-fa0390bcf579?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "TIG Torch Adaptors & Switches", href: "/tig-welding/torches/adaptors/tig-torch-adaptors-and-switches" }] },
          { label: "TIG Torch Consumables", href: "/tig-welding/torches/consumables", image: "https://images.unsplash.com/photo-1734888369524-bd915004d0c3?w=200&h=200&fit=crop&auto=format" },
          { label: "TIG Torches & Spare Parts", href: "/tig-welding/torches/all", image: "https://images.unsplash.com/photo-1650572085615-8ca7d7ef7c91?w=200&h=200&fit=crop&auto=format" },
          { label: "Zirconiated Tungsten", href: "/tig-welding/tungsten/zirconiated", image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "TIG Welding Filler Rods",
        href: "/tig-welding/filler-rods",
        image: "https://images.unsplash.com/photo-1665492164147-4204734cb7f6?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Aluminium", href: "/tig-welding/filler-rods/aluminium", image: "https://images.unsplash.com/photo-1665492158350-a44f1ca3689f?w=200&h=200&fit=crop&auto=format" },
          { label: "Brazing / Bronze", href: "/tig-welding/filler-rods/brazing", image: "https://images.unsplash.com/photo-1665492100272-75508f731649?w=200&h=200&fit=crop&auto=format" },
          { label: "Copper / Copper-Nickel", href: "/tig-welding/filler-rods/copper", image: "https://images.unsplash.com/photo-1654178186407-6733a1cb41b5?w=200&h=200&fit=crop&auto=format" },
          { label: "Dissimilar Steels", href: "/tig-welding/filler-rods/dissimilar", image: "https://images.unsplash.com/photo-1665492302891-502760d2d888?w=200&h=200&fit=crop&auto=format" },
          { label: "Duplex Stainless Steel", href: "/tig-welding/filler-rods/duplex", image: "https://images.unsplash.com/photo-1665492296636-6bb39f409f02?w=200&h=200&fit=crop&auto=format" },
          { label: "Hard Facing", href: "/tig-welding/filler-rods/hard-facing", image: "https://images.unsplash.com/photo-1665494126333-ce412a7b07a9?w=200&h=200&fit=crop&auto=format" },
          { label: "Magnesium", href: "/tig-welding/filler-rods/magnesium", image: "https://images.unsplash.com/photo-1548945665-56d2712b4986?w=200&h=200&fit=crop&auto=format" },
          { label: "Mild Steel", href: "/tig-welding/filler-rods/mild-steel", image: "https://images.unsplash.com/photo-1665492085149-21fcb2617dba?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "TIG Filler Rods for High Strength Steel", href: "/tig-welding/filler-rods/mild-steel/tig-filler-rods-for-high-strength-steel" }, { label: "TIG Filler Rods for Mild Steel", href: "/tig-welding/filler-rods/mild-steel/tig-filler-rods-for-mild-steel" }] },
          { label: "Nickel Alloy", href: "/tig-welding/filler-rods/nickel", image: "https://images.unsplash.com/photo-1665492133710-2bac71d3c14f?w=200&h=200&fit=crop&auto=format" },
          { label: "Stainless Steel", href: "/tig-welding/filler-rods/stainless", image: "https://images.unsplash.com/photo-1665492183652-569975f5d06d?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Stainless Steel Welding Electrodes", href: "/tig-welding/filler-rods/stainless/stainless-steel-welding-electrodes" }, { label: "TIG Filler Rods for Stainless Steel", href: "/tig-welding/filler-rods/stainless/tig-filler-rods-for-stainless-steel" }] },
          { label: "Titanium", href: "/tig-welding/filler-rods/titanium", image: "https://images.unsplash.com/photo-1665492339877-fa0390bcf579?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "TIG Welding Accessories",
        href: "/tig-welding/accessories",
        image: "https://images.unsplash.com/photo-1734888369524-bd915004d0c3?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Gas Regulators", href: "/gas-oxy-fuel/regulators/inert", image: "https://images.unsplash.com/photo-1650572085615-8ca7d7ef7c91?w=200&h=200&fit=crop&auto=format" },
          { label: "Pickling & Neutralising Agents", href: "/tig-welding/weld-cleaning/pickling", image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format" },
          { label: "Tungsten Grinders - Bench", href: "/tig-welding/tungsten-grinders/bench", image: "https://images.unsplash.com/photo-1665492164147-4204734cb7f6?w=200&h=200&fit=crop&auto=format" },
          { label: "Tungsten Grinders - Handheld", href: "/tig-welding/tungsten-grinders/handheld", image: "https://images.unsplash.com/photo-1665492158350-a44f1ca3689f?w=200&h=200&fit=crop&auto=format" },
          { label: "Tungsten Grinders w/ Extractors", href: "/tig-welding/tungsten-grinders/extractors", image: "https://images.unsplash.com/photo-1665492100272-75508f731649?w=200&h=200&fit=crop&auto=format" },
          { label: "Weld Cleaning Equipment", href: "/tig-welding/weld-cleaning", image: "https://images.unsplash.com/photo-1654178186407-6733a1cb41b5?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Bymat Weld Cleaning Machines", href: "/tig-welding/weld-cleaning/bymat-weld-cleaning-machines" }, { label: "Easykleen Plus & TIG System", href: "/tig-welding/weld-cleaning/easykleen-plus-and-tig-system" }, { label: "IsoJet Stainless Steel Weld Cleaner", href: "/tig-welding/weld-cleaning/isojet-stainless-steel-weld-cleaner" }, { label: "Stainless Brighteners & Rust Remover", href: "/tig-welding/weld-cleaning/stainless-brighteners-and-rust-remover" }, { label: "Stainless Steel Weld Cleaning Equipment", href: "/tig-welding/weld-cleaning/stainless-steel-weld-cleaning-equipment" }, { label: "TIG Wand Rapid", href: "/tig-welding/weld-cleaning/tig-wand-rapid" }, { label: "mepBlitz Elecro Polisher", href: "/tig-welding/weld-cleaning/mepblitz-elecro-polisher" }] },
          { label: "Welder Water Coolers", href: "/machines/water-coolers", image: "https://images.unsplash.com/photo-1665492302891-502760d2d888?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Helmets", href: "/safety/helmets", image: "https://images.unsplash.com/photo-1665492296636-6bb39f409f02?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 3. ARC
  {
    label: "Arc Welding",
    href: "/arc-mma",
    children: [
      {
        heading: "Arc/MMA Welding Machines",
        href: "/arc-mma/welders",
        image: "https://images.unsplash.com/photo-1744974051873-affe1f5f393a?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Jasic MMA Welders", href: "/arc-mma/welders/jasic", image: "https://images.unsplash.com/photo-1590488630628-df246379beab?w=200&h=200&fit=crop&auto=format" },
          { label: "Multi Process Welders", href: "/arc-mma/multi-process", image: "https://images.unsplash.com/photo-1564970173067-36ccde5c467b?w=200&h=200&fit=crop&auto=format" },
          { label: "Newarc MMA Welders", href: "/arc-mma/welders/newarc", image: "https://images.unsplash.com/photo-1747254779472-467cc7c5bde8?w=200&h=200&fit=crop&auto=format" },
          { label: "Parweld MMA Welders", href: "/arc-mma/welders/parweld", image: "https://images.unsplash.com/photo-1635179885954-c778885a1197?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "MMA Welding Electrodes",
        href: "/arc-mma/electrodes",
        image: "https://images.unsplash.com/photo-1554901356-50cb9d8ea757?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cast Iron", href: "/arc-mma/electrodes/cast-iron", image: "https://images.unsplash.com/photo-1624272842995-3aaa54ee7002?w=200&h=200&fit=crop&auto=format" },
          { label: "Cutting / Gouging", href: "/arc-mma/electrodes/cutting-gouging", image: "https://images.unsplash.com/photo-1707856192313-2d4cb9f72172?w=200&h=200&fit=crop&auto=format" },
          { label: "Dissimilar Steel", href: "/arc-mma/electrodes/dissimilar", image: "https://images.unsplash.com/photo-1698934688914-a10ca7168968?w=200&h=200&fit=crop&auto=format" },
          { label: "Hard Surfacing", href: "/arc-mma/electrodes/hard-surfacing", image: "https://images.unsplash.com/photo-1669303276389-3f1f81e7efa2?w=200&h=200&fit=crop&auto=format" },
          { label: "Stainless Steel", href: "/arc-mma/electrodes/stainless", image: "https://images.unsplash.com/photo-1760131193080-d2c8f652f4b9?w=200&h=200&fit=crop&auto=format" },
          { label: "Steel & Low Hydrogen", href: "/arc-mma/electrodes/steel", image: "https://images.unsplash.com/photo-1700498362002-05f7538f91f6?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Welding Cable & Connectors",
        href: "/arc-mma/cable",
        image: "https://images.unsplash.com/photo-1668453557069-023d287d22f6?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cable Plugs & Sockets", href: "/arc-mma/cable/plugs-sockets", image: "https://images.unsplash.com/photo-1638058608689-0ecd51ba651c?w=200&h=200&fit=crop&auto=format" },
          { label: "Double Insulated Cable", href: "/arc-mma/cable/double-insulated", image: "https://images.unsplash.com/photo-1533757246687-e36e56e5e6f0?w=200&h=200&fit=crop&auto=format" },
          { label: "Earth Clamps", href: "/arc-mma/earth-clamps", image: "https://images.unsplash.com/photo-1744974051873-affe1f5f393a?w=200&h=200&fit=crop&auto=format" },
          { label: "Electrode Holders", href: "/arc-mma/electrode-holders", image: "https://images.unsplash.com/photo-1590488630628-df246379beab?w=200&h=200&fit=crop&auto=format" },
          { label: "Re-usable Cable Lugs", href: "/arc-mma/cable/lugs", image: "https://images.unsplash.com/photo-1564970173067-36ccde5c467b?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Cable (Copper/PVC)", href: "/arc-mma/cable/pvc", image: "https://images.unsplash.com/photo-1747254779472-467cc7c5bde8?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Cable (Copper/Rubber)", href: "/arc-mma/cable/rubber", image: "https://images.unsplash.com/photo-1635179885954-c778885a1197?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Cable Sets", href: "/arc-mma/cable/sets", image: "https://images.unsplash.com/photo-1554901356-50cb9d8ea757?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Spot & Stud Welding",
        href: "/arc-mma/spot-stud-welding",
        image: "https://images.unsplash.com/photo-1624272842995-3aaa54ee7002?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Spot Welders - Pedestal", href: "/machines/spot-welders/pedestal", image: "https://images.unsplash.com/photo-1707856192313-2d4cb9f72172?w=200&h=200&fit=crop&auto=format" },
          { label: "Spot Welders - Portable", href: "/machines/spot-welders/portable", image: "https://images.unsplash.com/photo-1698934688914-a10ca7168968?w=200&h=200&fit=crop&auto=format" },
          { label: "Spot Welding Electrodes", href: "/machines/spot-welders/electrodes", image: "https://images.unsplash.com/photo-1669303276389-3f1f81e7efa2?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Tecna Pedestal Spot Welding Electrodes", href: "/machines/spot-welders/electrodes/tecna-pedestal-spot-welding-electrodes" }] },
          { label: "Stud Welders (CD)", href: "/arc-mma/stud-welding/cd-welders", image: "https://images.unsplash.com/photo-1760131193080-d2c8f652f4b9?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Stud Welders - Capacitor Discharge (CD)", href: "/arc-mma/stud-welding/cd-welders/stud-welders-capacitor-discharge-cd" }, { label: "Stud Welding Equipment", href: "/arc-mma/stud-welding/cd-welders/stud-welding-equipment" }] },
          { label: "Weld Studs - Aluminium", href: "/arc-mma/stud-welding/aluminium-studs", image: "https://images.unsplash.com/photo-1700498362002-05f7538f91f6?w=200&h=200&fit=crop&auto=format" },
          { label: "Weld Studs - Stainless Steel", href: "/arc-mma/stud-welding/ss-studs", image: "https://images.unsplash.com/photo-1668453557069-023d287d22f6?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Arc Welding Accessories",
        href: "/arc-mma/accessories",
        image: "https://images.unsplash.com/photo-1638058608689-0ecd51ba651c?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Arc-Air Gouging Carbons", href: "/arc-mma/gouging/carbons", image: "https://images.unsplash.com/photo-1533757246687-e36e56e5e6f0?w=200&h=200&fit=crop&auto=format" },
          { label: "Carbon Arc Gouging Torches", href: "/arc-mma/gouging/torches", image: "https://images.unsplash.com/photo-1744974051873-affe1f5f393a?w=200&h=200&fit=crop&auto=format" },
          { label: "Electrode Quivers & Ovens", href: "/arc-mma/ovens", image: "https://images.unsplash.com/photo-1590488630628-df246379beab?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Helmets", href: "/safety/helmets", image: "https://images.unsplash.com/photo-1564970173067-36ccde5c467b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 4. CUTTING
  {
    label: "CUTTING",
    href: "/cutting",
    children: [
      {
        heading: "Plasma Cutting Machines",
        href: "/cutting/plasma",
        image: "https://images.unsplash.com/photo-1710762380206-4685b5fd9033?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Jasic Plasma Spares", href: "/cutting/plasma/jasic-spares", image: "https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?w=200&h=200&fit=crop&auto=format" },
          { label: "Plasma Cutters", href: "/cutting/plasma/cutters", image: "https://images.unsplash.com/photo-1764115424737-25aca6f47835?w=200&h=200&fit=crop&auto=format" },
          { label: "Plasma Cutting Torches", href: "/cutting/plasma/torches", image: "https://images.unsplash.com/photo-1733028552121-6ce52e291b77?w=200&h=200&fit=crop&auto=format" },
          { label: "Thermal Dynamics Spares", href: "/cutting/plasma/thermal-dynamics", image: "https://images.unsplash.com/photo-1683799423787-eed4a6e03953?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Thermal Dynamics Compat Spares", href: "/cutting/plasma/thermal-dynamics/thermal-dynamics-compat-spares" }, { label: "Thermal Dynamics Type PCH-35", href: "/cutting/plasma/thermal-dynamics/thermal-dynamics-type-pch-35" }, { label: "Thermal Dynamics Type PCH-51", href: "/cutting/plasma/thermal-dynamics/thermal-dynamics-type-pch-51" }, { label: "Thermal Dynamics Type PCH-52", href: "/cutting/plasma/thermal-dynamics/thermal-dynamics-type-pch-52" }, { label: "Thermal Dynamics Type PCH-70", href: "/cutting/plasma/thermal-dynamics/thermal-dynamics-type-pch-70" }] },
          { label: "Plasma Torch Spares", href: "/cutting/plasma/torch-spares", image: "https://images.unsplash.com/photo-1682587835746-a25ea1dc1068?w=200&h=200&fit=crop&auto=format" },
          { label: "Sif Weld Cut 40 Spares", href: "/cutting/plasma/sif-weld-cut-40-spares", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format" },
          { label: "Sif Weld Cut 100 Spares", href: "/cutting/plasma/sif-weld-cut-100-spares", image: "https://images.unsplash.com/photo-1701402489931-357b84a96bc1?w=200&h=200&fit=crop&auto=format" },
          { label: "Weldability Plasma Spares", href: "/cutting/plasma/weldability-spares", image: "https://images.unsplash.com/photo-1669962254277-84993116aa08?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Oxy-Fuel Cutting Machines",
        href: "/cutting/machines",
        image: "https://images.unsplash.com/photo-1647200356316-2e464f2dcc9f?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Gas Cutting Machines (Oxy-Fuel)", href: "/cutting/machines/gas-oxy", image: "https://images.unsplash.com/photo-1563229708-55d0a600b01d?w=200&h=200&fit=crop&auto=format" },
          { label: "Pipe Cutting Machines (Oxy)", href: "/cutting/machines/pipe-oxy", image: "https://images.unsplash.com/photo-1729867906822-25247c64519b?w=200&h=200&fit=crop&auto=format" },
          { label: "Plate Bevellers", href: "/cutting/bevellers", image: "https://images.unsplash.com/photo-1694265167925-ab058f3283da?w=200&h=200&fit=crop&auto=format" },
          { label: "Straight Line Cutting Machines", href: "/cutting/machines/straight-line", image: "https://images.unsplash.com/photo-1572979440672-16af53b49b52?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Oxy-Fuel Cutting Nozzles",
        href: "/cutting/nozzles",
        image: "https://images.unsplash.com/photo-1749836851408-a41779f37ff4?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "NFF Cutting Nozzles", href: "/cutting/nozzles/nff", image: "https://images.unsplash.com/photo-1710762380206-4685b5fd9033?w=200&h=200&fit=crop&auto=format" },
          { label: "Oxy Propane Gouging Nozzles PGNM", href: "/cutting/nozzles/pgnm", image: "https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?w=200&h=200&fit=crop&auto=format" },
          { label: "Oxy/Acetylene Cutting Nozzles ANME", href: "/cutting/nozzles/anme", image: "https://images.unsplash.com/photo-1764115424737-25aca6f47835?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Oxy/Acetylene Cutting Nozzle ANME", href: "/cutting/nozzles/anme/oxy-acetylene-cutting-nozzle-anme" }] },
          { label: "Oxy/Acetylene Gouging Nozzles AGNM", href: "/cutting/nozzles/agnm", image: "https://images.unsplash.com/photo-1733028552121-6ce52e291b77?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Gouging Nozzles AGNM", href: "/cutting/nozzles/agnm/gouging-nozzles-agnm" }] },
          { label: "Oxy/Propane Cutting Nozzles PNM", href: "/cutting/nozzles/pnm", image: "https://images.unsplash.com/photo-1683799423787-eed4a6e03953?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Oxy/Propane Cutting Nozzle PNM", href: "/cutting/nozzles/pnm/oxy-propane-cutting-nozzle-pnm" }, { label: "Oxy/Propane Cutting Nozzle PNME", href: "/cutting/nozzles/pnm/oxy-propane-cutting-nozzle-pnme" }, { label: "Oxy/Propane Cutting Nozzles PNM/PNME", href: "/cutting/nozzles/pnm/oxy-propane-cutting-nozzles-pnm-pnme" }] },
          { label: "Victor Cutting Nozzles", href: "/cutting/nozzles/victor", image: "https://images.unsplash.com/photo-1682587835746-a25ea1dc1068?w=200&h=200&fit=crop&auto=format" },
          { label: "VVC Cutting Nozzles", href: "/cutting/nozzles/vvc", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Cutting & Gouging Accessories",
        href: "/cutting/accessories",
        image: "https://images.unsplash.com/photo-1701402489931-357b84a96bc1?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Air Compressors", href: "/workshop/air-compressors", image: "https://images.unsplash.com/photo-1669962254277-84993116aa08?w=200&h=200&fit=crop&auto=format" },
          { label: "Arc-Air Gouging Carbons", href: "/cutting/gouging/carbons", image: "https://images.unsplash.com/photo-1647200356316-2e464f2dcc9f?w=200&h=200&fit=crop&auto=format" },
          { label: "Carbon Arc Gouging Torches", href: "/cutting/gouging/torches", image: "https://images.unsplash.com/photo-1563229708-55d0a600b01d?w=200&h=200&fit=crop&auto=format" },
          { label: "Cutting Guides Oxy/Acet/Propane", href: "/cutting/guides", image: "https://images.unsplash.com/photo-1729867906822-25247c64519b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 5. WIRE & RODS
  {
    label: "Welding Wire & Rods",
    href: "/wire-rods",
    children: [
      {
        heading: "MIG Welding Wire",
        href: "/mig-welding/wire",
        image: "https://images.unsplash.com/photo-1760376208640-2ece4c4a0adc?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Aluminium MIG Wire", href: "/mig-welding/wire/aluminium", image: "https://images.unsplash.com/photo-1707856192313-2d4cb9f72172?w=200&h=200&fit=crop&auto=format" },
          { label: "Brazing MIG Wire", href: "/mig-welding/wire/brazing", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format" },
          { label: "Bulk MIG Wire", href: "/mig-welding/wire/bulk", image: "https://images.unsplash.com/photo-1741666998073-7df07563d4d5?w=200&h=200&fit=crop&auto=format" },
          { label: "Copper Free MIG Wire", href: "/mig-welding/wire/copper-free", image: "https://images.unsplash.com/photo-1744974051873-affe1f5f393a?w=200&h=200&fit=crop&auto=format" },
          { label: "Flux Cored MIG Wire", href: "/mig-welding/wire/flux-cored", image: "https://images.unsplash.com/photo-1694532529349-1194cb27a302?w=200&h=200&fit=crop&auto=format" },
          { label: "Hard Facing MIG Wire", href: "/mig-welding/wire/hard-facing", image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format" },
          { label: "Mild Steel MIG Wire", href: "/mig-welding/wire/mild-steel", image: "https://images.unsplash.com/photo-1594213648713-78ce051bbeac?w=200&h=200&fit=crop&auto=format" },
          { label: "Stainless Steel MIG Wire", href: "/mig-welding/wire/stainless", image: "https://images.unsplash.com/photo-1709818459864-78de6b040fa5?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "TIG Welding Filler Rods",
        href: "/tig-welding/filler-rods",
        image: "https://images.unsplash.com/photo-1551127481-43279ba6dec4?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Aluminium TIG Rods", href: "/tig-welding/filler-rods/aluminium", image: "https://images.unsplash.com/photo-1664530838049-b2759620d168?w=200&h=200&fit=crop&auto=format" },
          { label: "Brazing / Bronze TIG Rods", href: "/tig-welding/filler-rods/brazing", image: "https://images.unsplash.com/photo-1601125611205-9a5e6f292abf?w=200&h=200&fit=crop&auto=format" },
          { label: "Copper / Copper-Nickel TIG Rods", href: "/tig-welding/filler-rods/copper", image: "https://images.unsplash.com/photo-1687010196575-be99993ab758?w=200&h=200&fit=crop&auto=format" },
          { label: "Dissimilar Steel TIG Rods", href: "/tig-welding/filler-rods/dissimilar", image: "https://images.unsplash.com/photo-1645521214162-10ab9661858f?w=200&h=200&fit=crop&auto=format" },
          { label: "Duplex Stainless TIG Rods", href: "/tig-welding/filler-rods/duplex", image: "https://images.unsplash.com/photo-1564970173067-36ccde5c467b?w=200&h=200&fit=crop&auto=format" },
          { label: "Hard Facing TIG Rods", href: "/tig-welding/filler-rods/hard-facing", image: "https://images.unsplash.com/photo-1760376208640-2ece4c4a0adc?w=200&h=200&fit=crop&auto=format" },
          { label: "Magnesium TIG Rods", href: "/tig-welding/filler-rods/magnesium", image: "https://images.unsplash.com/photo-1707856192313-2d4cb9f72172?w=200&h=200&fit=crop&auto=format" },
          { label: "Mild Steel TIG Rods", href: "/tig-welding/filler-rods/mild-steel", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format" },
          { label: "Nickel Alloy TIG Rods", href: "/tig-welding/filler-rods/nickel", image: "https://images.unsplash.com/photo-1741666998073-7df07563d4d5?w=200&h=200&fit=crop&auto=format" },
          { label: "Stainless Steel TIG Rods", href: "/tig-welding/filler-rods/stainless", image: "https://images.unsplash.com/photo-1744974051873-affe1f5f393a?w=200&h=200&fit=crop&auto=format" },
          { label: "Titanium TIG Rods", href: "/tig-welding/filler-rods/titanium", image: "https://images.unsplash.com/photo-1694532529349-1194cb27a302?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "MMA Welding Electrodes",
        href: "/arc-mma/electrodes",
        image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cast Iron Electrodes", href: "/arc-mma/electrodes/cast-iron", image: "https://images.unsplash.com/photo-1594213648713-78ce051bbeac?w=200&h=200&fit=crop&auto=format" },
          { label: "Cutting / Gouging Electrodes", href: "/arc-mma/electrodes/cutting-gouging", image: "https://images.unsplash.com/photo-1709818459864-78de6b040fa5?w=200&h=200&fit=crop&auto=format" },
          { label: "Dissimilar Steel Electrodes", href: "/arc-mma/electrodes/dissimilar", image: "https://images.unsplash.com/photo-1551127481-43279ba6dec4?w=200&h=200&fit=crop&auto=format" },
          { label: "Hard Surfacing Electrodes", href: "/arc-mma/electrodes/hard-surfacing", image: "https://images.unsplash.com/photo-1664530838049-b2759620d168?w=200&h=200&fit=crop&auto=format" },
          { label: "Stainless Steel Electrodes", href: "/arc-mma/electrodes/stainless", image: "https://images.unsplash.com/photo-1601125611205-9a5e6f292abf?w=200&h=200&fit=crop&auto=format" },
          { label: "Steel & Low Hydrogen Electrodes", href: "/arc-mma/electrodes/steel", image: "https://images.unsplash.com/photo-1687010196575-be99993ab758?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Oxy-Fuel & Brazing Rods",
        href: "/gas-oxy-fuel/rods",
        image: "https://images.unsplash.com/photo-1645521214162-10ab9661858f?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Aluminium Welding Rods", href: "/gas-oxy-fuel/rods/aluminium", image: "https://images.unsplash.com/photo-1564970173067-36ccde5c467b?w=200&h=200&fit=crop&auto=format" },
          { label: "Brazing Rods", href: "/gas-oxy-fuel/rods/brazing", image: "https://images.unsplash.com/photo-1760376208640-2ece4c4a0adc?w=200&h=200&fit=crop&auto=format" },
          { label: "Copper Phosphorus Rods", href: "/gas-oxy-fuel/rods/copper-phosphorus", image: "https://images.unsplash.com/photo-1707856192313-2d4cb9f72172?w=200&h=200&fit=crop&auto=format" },
          { label: "Disposable Gas Cylinders", href: "/gas-oxy-fuel/disposable-cylinders", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format" },
          { label: "Silver Solder Rods", href: "/gas-oxy-fuel/rods/silver-solder", image: "https://images.unsplash.com/photo-1741666998073-7df07563d4d5?w=200&h=200&fit=crop&auto=format" },
          { label: "Steel Welding Rods", href: "/gas-oxy-fuel/rods/steel", image: "https://images.unsplash.com/photo-1744974051873-affe1f5f393a?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 6. GAS
  {
    label: "Gas & Regulators",
    href: "/gas-oxy-fuel",
    children: [
      {
        heading: "Oxy-Fuel Equipment",
        href: "/gas-oxy-fuel/equipment",
        image: "https://images.unsplash.com/photo-1714561345036-2aa006cd8a60?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cutting & Welding Sets", href: "/gas-oxy-fuel/sets", image: "https://images.unsplash.com/photo-1650305161739-cd5eaf82b2a3?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Cutting Torches", href: "/gas-oxy-fuel/torches/cutting", image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=200&h=200&fit=crop&auto=format" },
          { label: "Lightweight Welding Nozzles", href: "/gas-oxy-fuel/nozzles/lightweight", image: "https://images.unsplash.com/photo-1725916631380-fe85ea5ccd56?w=200&h=200&fit=crop&auto=format" },
          { label: "Oxy-Acetylene Torches", href: "/gas-oxy-fuel/torches/oxy-acet", image: "https://images.unsplash.com/photo-1731244426143-eafc1d851801?w=200&h=200&fit=crop&auto=format" },
          { label: "Oxy-Propane Torches", href: "/gas-oxy-fuel/torches/oxy-propane", image: "https://images.unsplash.com/photo-1665930489997-e5e9d527ae39?w=200&h=200&fit=crop&auto=format" },
          { label: "Type 3/5 HD Torch Components", href: "/gas-oxy-fuel/torches/components", image: "https://images.unsplash.com/photo-1768224946678-de557c4207a5?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Nozzles (DH/HD)", href: "/gas-oxy-fuel/nozzles/welding", image: "https://images.unsplash.com/photo-1716535276617-d3f7bf05d3c3?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "DH Welding Nozzles - Oxy/Acetylene", href: "/gas-oxy-fuel/nozzles/welding/dh-welding-nozzles-oxy-acetylene" }, { label: "HD Welding Nozzles - Oxy/Acetylene", href: "/gas-oxy-fuel/nozzles/welding/hd-welding-nozzles-oxy-acetylene" }, { label: "Welding Nozzles", href: "/gas-oxy-fuel/nozzles/welding/welding-nozzles" }] },
        ],
      },
      {
        heading: "Oxy-Fuel Rods",
        href: "/gas-oxy-fuel/rods",
        image: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Aluminium Welding Rods", href: "/gas-oxy-fuel/rods/aluminium", image: "https://images.unsplash.com/photo-1606600529547-e513e8c714f4?w=200&h=200&fit=crop&auto=format" },
          { label: "Brazing Rods", href: "/gas-oxy-fuel/rods/brazing", image: "https://images.unsplash.com/photo-1654220691341-be23a137bd0c?w=200&h=200&fit=crop&auto=format" },
          { label: "Copper Phosphorus Rods", href: "/gas-oxy-fuel/rods/copper-phosphorus", image: "https://images.unsplash.com/photo-1620122389152-6ebe2bdf6212?w=200&h=200&fit=crop&auto=format" },
          { label: "Disposable Gas Cylinders", href: "/gas-oxy-fuel/disposable-cylinders", image: "https://images.unsplash.com/photo-1513069916672-918ea0e44870?w=200&h=200&fit=crop&auto=format" },
          { label: "Silver Solder Rods", href: "/gas-oxy-fuel/rods/silver-solder", image: "https://images.unsplash.com/photo-1725916631310-4d7cdf815079?w=200&h=200&fit=crop&auto=format" },
          { label: "Steel Welding Rods", href: "/gas-oxy-fuel/rods/steel", image: "https://images.unsplash.com/photo-1692397733387-632c32c500d5?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Regulators",
        href: "/gas-oxy-fuel/regulators",
        image: "https://images.unsplash.com/photo-1714561345036-2aa006cd8a60?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "CO2 Regulators", href: "/gas-oxy-fuel/regulators/co2", image: "https://images.unsplash.com/photo-1650305161739-cd5eaf82b2a3?w=200&h=200&fit=crop&auto=format" },
          { label: "Fuel Gas Regulators", href: "/gas-oxy-fuel/regulators/fuel", image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=200&h=200&fit=crop&auto=format" },
          { label: "High Pressure Regulators", href: "/gas-oxy-fuel/regulators/high-pressure", image: "https://images.unsplash.com/photo-1725916631380-fe85ea5ccd56?w=200&h=200&fit=crop&auto=format" },
          { label: "Inert Gas Regulators", href: "/gas-oxy-fuel/regulators/inert", image: "https://images.unsplash.com/photo-1731244426143-eafc1d851801?w=200&h=200&fit=crop&auto=format" },
          { label: "NEVOC Regulators", href: "/gas-oxy-fuel/regulators/nevoc", image: "https://images.unsplash.com/photo-1665930489997-e5e9d527ae39?w=200&h=200&fit=crop&auto=format" },
          { label: "Oxygen Regulators", href: "/gas-oxy-fuel/regulators/oxygen", image: "https://images.unsplash.com/photo-1768224946678-de557c4207a5?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Safety & Accessories",
        href: "/gas-oxy-fuel/accessories",
        image: "https://images.unsplash.com/photo-1716535276617-d3f7bf05d3c3?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Flashback Arrestors", href: "/gas-oxy-fuel/flashback-arrestors", image: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Alarm Panels", href: "/gas-oxy-fuel/alarm-panels", image: "https://images.unsplash.com/photo-1606600529547-e513e8c714f4?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Arc Spares & Certificates", href: "/gas-oxy-fuel/regulators/gas-arc-spares", image: "https://images.unsplash.com/photo-1654220691341-be23a137bd0c?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Economiser Spares", href: "/gas-oxy-fuel/economisers/spares", image: "https://images.unsplash.com/photo-1620122389152-6ebe2bdf6212?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Economisers / Flowmeters", href: "/gas-oxy-fuel/economisers", image: "https://images.unsplash.com/photo-1513069916672-918ea0e44870?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Hoses & Fittings",
        href: "/gas-oxy-fuel/hoses",
        image: "https://images.unsplash.com/photo-1725916631310-4d7cdf815079?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Argon / Shielding Gas Hose", href: "/gas-oxy-fuel/hoses/argon", image: "https://images.unsplash.com/photo-1692397733387-632c32c500d5?w=200&h=200&fit=crop&auto=format" },
          { label: "High Pressure Gas Hoses", href: "/gas-oxy-fuel/hoses/high-pressure", image: "https://images.unsplash.com/photo-1714561345036-2aa006cd8a60?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Gas Arc High Pressure Gas Hoses", href: "/gas-oxy-fuel/hoses/high-pressure/gas-arc-high-pressure-gas-hoses" }, { label: "Gases other than Oxy/Oxy Mixture", href: "/gas-oxy-fuel/hoses/high-pressure/gases-other-than-oxy-oxy-mixture" }, { label: "Oxygen High Pressure Flexible Gas Hoses", href: "/gas-oxy-fuel/hoses/high-pressure/oxygen-high-pressure-flexible-gas-hoses" }] },
          { label: "Hose Fittings & Couplers", href: "/gas-oxy-fuel/fittings", image: "https://images.unsplash.com/photo-1650305161739-cd5eaf82b2a3?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Hose Check Valves - Torch Fitting", href: "/gas-oxy-fuel/fittings/hose-check-valves-torch-fitting" }, { label: "Hose Couplers", href: "/gas-oxy-fuel/fittings/hose-couplers" }, { label: "Hose Fittings", href: "/gas-oxy-fuel/fittings/hose-fittings" }, { label: "Hose Nuts - Regulator Fitting", href: "/gas-oxy-fuel/fittings/hose-nuts-regulator-fitting" }, { label: "Hose Tails - Regulator Fitting", href: "/gas-oxy-fuel/fittings/hose-tails-regulator-fitting" }, { label: "Regulator Bull Nose & Nevoc Stem & Nut", href: "/gas-oxy-fuel/fittings/regulator-bull-nose-and-nevoc-stem-and-nut" }, { label: "Regulator Stems & Fittings", href: "/gas-oxy-fuel/fittings/regulator-stems-and-fittings" }, { label: "Straight Adaptors", href: "/gas-oxy-fuel/fittings/straight-adaptors" }] },
          { label: "Oxy Fuel Hoses", href: "/gas-oxy-fuel/hoses/oxy-fuel", image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=200&h=200&fit=crop&auto=format" },
          { label: "Twin Welding Hoses", href: "/gas-oxy-fuel/hoses/twin", image: "https://images.unsplash.com/photo-1725916631380-fe85ea5ccd56?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Siamese Twin Welding Hoses - 100m Rolls", href: "/gas-oxy-fuel/hoses/twin/siamese-twin-welding-hoses-100m-rolls" }, { label: "Twin Welding Hoses - Fitted Set", href: "/gas-oxy-fuel/hoses/twin/twin-welding-hoses-fitted-set" }] },
        ],
      },
      {
        heading: "Storage & Distribution",
        href: "/gas-oxy-fuel/storage",
        image: "https://images.unsplash.com/photo-1731244426143-eafc1d851801?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cylinder Fittings & Adaptors", href: "/gas-oxy-fuel/cylinder-fittings", image: "https://images.unsplash.com/photo-1665930489997-e5e9d527ae39?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Cylinder Adaptors", href: "/gas-oxy-fuel/cylinder-fittings/cylinder-adaptors" }, { label: "Cylinder Connectors", href: "/gas-oxy-fuel/cylinder-fittings/cylinder-connectors" }, { label: "Cylinder Extensions Right or Left Hand", href: "/gas-oxy-fuel/cylinder-fittings/cylinder-extensions-right-or-left-hand" }, { label: "Cylinder Fittings", href: "/gas-oxy-fuel/cylinder-fittings/cylinder-fittings" }, { label: "Twin Outlet Valves", href: "/gas-oxy-fuel/cylinder-fittings/twin-outlet-valves" }] },
          { label: "Gas Control Outlet Points", href: "/gas-oxy-fuel/outlet-points", image: "https://images.unsplash.com/photo-1768224946678-de557c4207a5?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Cylinder Cages", href: "/gas-oxy-fuel/storage/cages", image: "https://images.unsplash.com/photo-1716535276617-d3f7bf05d3c3?w=200&h=200&fit=crop&auto=format" },
          { label: "Gas Cylinder Trolleys", href: "/gas-oxy-fuel/storage/trolleys", image: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Gas Cylinder Trolleys & Handling", href: "/gas-oxy-fuel/storage/trolleys/gas-cylinder-trolleys-and-handling" }, { label: "Gas Cylinder Trolleys - Non UK Made", href: "/gas-oxy-fuel/storage/trolleys/gas-cylinder-trolleys-non-uk-made" }, { label: "Gas Cylinder Trolleys - Reflex UK", href: "/gas-oxy-fuel/storage/trolleys/gas-cylinder-trolleys-reflex-uk" }] },
          { label: "Manifold Panels", href: "/gas-oxy-fuel/manifolds", image: "https://images.unsplash.com/photo-1606600529547-e513e8c714f4?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Auto Changeover Manifolds (2 x 1 / 0 - 10 Bar)", href: "/gas-oxy-fuel/manifolds/auto-changeover-manifolds-2-x-1-0-10-bar" }, { label: "Auto Changeover Manifolds (2 x 1 / 0 - 6 Bar)", href: "/gas-oxy-fuel/manifolds/auto-changeover-manifolds-2-x-1-0-6-bar" }, { label: "Auto Changeover Manifolds (MCP 2 x 1 / 0 - 10 Bar)", href: "/gas-oxy-fuel/manifolds/auto-changeover-manifolds-mcp-2-x-1-0-10-bar" }, { label: "Auto Changeover Manifolds (MCP 2 x 1 / 0 - 6 Bar)", href: "/gas-oxy-fuel/manifolds/auto-changeover-manifolds-mcp-2-x-1-0-6-bar" }, { label: "Gas Arc Auto Changeover Manifold Panels", href: "/gas-oxy-fuel/manifolds/gas-arc-auto-changeover-manifold-panels" }, { label: "Gas Changeover Manifold Panels", href: "/gas-oxy-fuel/manifolds/gas-changeover-manifold-panels" }, { label: "Manifold & Regulator Parts/Connectors", href: "/gas-oxy-fuel/manifolds/manifold-and-regulator-parts-connectors" }, { label: "Manual Changeover Manifolds", href: "/gas-oxy-fuel/manifolds/manual-changeover-manifolds" }, { label: "Manual Changeover Manifolds (0 - 10 Bar)", href: "/gas-oxy-fuel/manifolds/manual-changeover-manifolds-0-10-bar" }, { label: "Manual Changeover Manifolds (0 - 6 Bar)", href: "/gas-oxy-fuel/manifolds/manual-changeover-manifolds-0-6-bar" }] },
        ],
      },
    ],
  },
  // 7. ABRASIVES
  {
    label: "ABRASIVES",
    href: "/abrasives",
    children: [
      {
        heading: "Cutting & Grinding Discs",
        href: "/abrasives/cutting-grinding",
        image: "https://images.unsplash.com/photo-1562946723-2ee1c79439fc?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cutting Discs", href: "/abrasives/cutting", image: "https://images.unsplash.com/photo-1733309730239-1d2b723eb807?w=200&h=200&fit=crop&auto=format" },
          { label: "Grinding Discs", href: "/abrasives/grinding", image: "https://images.unsplash.com/photo-1721048379899-17bbda01c734?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Finishing & Sanding Discs",
        href: "/abrasives/finishing",
        image: "https://images.unsplash.com/photo-1721048379815-751e1c6a748a?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Ceramic Flap Discs", href: "/abrasives/ceramic-flap", image: "https://images.unsplash.com/photo-1755943421697-a9948e8c6234?w=200&h=200&fit=crop&auto=format" },
          { label: "Flap Discs", href: "/abrasives/flap", image: "https://images.unsplash.com/photo-1551868561-f2cdee310ecf?w=200&h=200&fit=crop&auto=format" },
          { label: "Sanding Discs", href: "/abrasives/sanding", image: "https://images.unsplash.com/photo-1665722653189-c8f1f02245b2?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Abrasive Accessories",
        href: "/abrasives/accessories",
        image: "https://images.unsplash.com/photo-1727373203611-8ba98b2c8833?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Backing Pads", href: "/abrasives/backing-pads", image: "https://images.unsplash.com/photo-1705875021755-88ba2c835524?w=200&h=200&fit=crop&auto=format" },
          { label: "Wire Brushes", href: "/abrasives/wire-brushes", image: "https://images.unsplash.com/photo-1704026437826-7a316f21494d?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 8. SAFETY & PPE
  {
    label: "Welding PPE",
    href: "/safety",
    children: [
      {
        heading: "Welding Helmets & Eye Protection",
        href: "/safety/helmets",
        image: "https://images.unsplash.com/photo-1652881984659-0eeb221fcb9d?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Air Fed Face Shields", href: "/safety/eye/air-fed", image: "https://images.unsplash.com/photo-1734888369524-bd915004d0c3?w=200&h=200&fit=crop&auto=format" },
          { label: "Auto-Darkening Welding Helmets", href: "/safety/helmets/auto-darkening", image: "https://images.unsplash.com/photo-1701282851450-a0659dfb436b?w=200&h=200&fit=crop&auto=format" },
          { label: "Respirator Masks", href: "/safety/eye/respirators", image: "https://images.unsplash.com/photo-1683470156390-79fc319b7e7a?w=200&h=200&fit=crop&auto=format" },
          { label: "Safety Goggles", href: "/safety/eye/goggles", image: "https://images.unsplash.com/photo-1616708545451-dbdefeffc092?w=200&h=200&fit=crop&auto=format" },
          { label: "Safety Spectacles", href: "/safety/eye/spectacles", image: "https://images.unsplash.com/photo-1620002093367-5e0bef06be96?w=200&h=200&fit=crop&auto=format" },
          { label: "Safety Visors", href: "/safety/eye/visors", image: "https://images.unsplash.com/photo-1622205656412-6e081f366f96?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Helmet Spares", href: "/safety/helmets/spares", image: "https://images.unsplash.com/photo-1667735980367-053f9dc78a2b?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Masks", href: "/safety/helmets/masks", image: "https://images.unsplash.com/photo-1643654567423-8aa3ceec77b0?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Welding Protective Clothing",
        href: "/safety/clothing",
        image: "https://images.unsplash.com/photo-1754666104636-bd983a5ad660?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Heat Reflective Clothing", href: "/safety/clothing/heat-reflective", image: "https://images.unsplash.com/photo-1570442387127-66eb80e00938?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Aprons", href: "/safety/clothing/aprons", image: "https://images.unsplash.com/photo-1605256801686-5e9973caecbe?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Capes & Sleeves", href: "/safety/clothing/capes", image: "https://images.unsplash.com/photo-1699106359375-2ac57b239f9e?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Caps & Balaclavas", href: "/safety/clothing/caps", image: "https://images.unsplash.com/photo-1701952711272-ec97bb9cf95d?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Gloves & Gauntlets", href: "/safety/gloves", image: "https://images.unsplash.com/photo-1608410864744-8c1bcbb7c901?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Jackets", href: "/safety/clothing/jackets", image: "https://images.unsplash.com/photo-1652881984659-0eeb221fcb9d?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Welding Jackets & Trousers - Standard", href: "/safety/clothing/jackets/welding-jackets-and-trousers-standard" }] },
          { label: "Welding Overalls", href: "/safety/clothing/overalls", image: "https://images.unsplash.com/photo-1734888369524-bd915004d0c3?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Trousers & Spats", href: "/safety/clothing/trousers", image: "https://images.unsplash.com/photo-1701282851450-a0659dfb436b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Welding Workspace Safety",
        href: "/safety/workspace",
        image: "https://images.unsplash.com/photo-1683470156390-79fc319b7e7a?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Fire Barrier Fabric", href: "/safety/fire-barrier", image: "https://images.unsplash.com/photo-1616708545451-dbdefeffc092?w=200&h=200&fit=crop&auto=format" },
          { label: "Fire Retardant Tarpaulin", href: "/safety/tarpaulin", image: "https://images.unsplash.com/photo-1620002093367-5e0bef06be96?w=200&h=200&fit=crop&auto=format" },
          { label: "Spill Containment Kits", href: "/safety/spill-kits", image: "https://images.unsplash.com/photo-1622205656412-6e081f366f96?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Blankets & Mats", href: "/safety/blankets", image: "https://images.unsplash.com/photo-1667735980367-053f9dc78a2b?w=200&h=200&fit=crop&auto=format" },
          { label: "Welding Screens & Curtains", href: "/safety/screens", image: "https://images.unsplash.com/photo-1643654567423-8aa3ceec77b0?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Welding Curtain Frames & Arms", href: "/safety/screens/welding-curtain-frames-and-arms" }, { label: "Welding Curtains & Frames - Defender", href: "/safety/screens/welding-curtains-and-frames-defender" }, { label: "Welding Curtains & Frames - Standard", href: "/safety/screens/welding-curtains-and-frames-standard" }, { label: "Welding Curtains & Frames - Tusker", href: "/safety/screens/welding-curtains-and-frames-tusker" }] },
          { label: "Welding Strip Curtains", href: "/safety/screens/strip", image: "https://images.unsplash.com/photo-1754666104636-bd983a5ad660?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Strip Curtains", href: "/safety/screens/strip/strip-curtains" }] },
          { label: "Welding Tents & Shelters", href: "/safety/tents", image: "https://images.unsplash.com/photo-1570442387127-66eb80e00938?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 9. FUME EXTRACTION
  {
    label: "FUME EXTRACTION",
    href: "/safety/fume",
    children: [
      {
        heading: "Kemper Mobile Extraction",
        href: "/safety/fume/kemper-mobile",
        image: "https://images.unsplash.com/photo-1693106144594-4659d4c81869?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Kemper MaxiFil", href: "/safety/fume/kemper-maxifil", image: "https://images.unsplash.com/photo-1767047222430-235671afe449?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper MiniFil", href: "/safety/fume/kemper-minifil", image: "https://images.unsplash.com/photo-1626409471333-f88d32fc0902?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper ProfiMaster", href: "/safety/fume/kemper-profimaster", image: "https://images.unsplash.com/photo-1648110726569-271c08ecf3f0?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper SmartMaster", href: "/safety/fume/kemper-smartmaster", image: "https://images.unsplash.com/photo-1702799825398-e33590667445?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Kemper Filter Units",
        href: "/safety/fume/kemper-filter-units",
        image: "https://images.unsplash.com/photo-1767557125856-64217df780e3?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Kemper Cartridge Filter Units", href: "/safety/fume/kemper-cartridge", image: "https://images.unsplash.com/photo-1757803803106-8f0d05ac7881?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper Filter Tables", href: "/safety/fume/kemper-tables", image: "https://images.unsplash.com/photo-1620187147547-b5d7e276cc1b?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper FilterMaster XL", href: "/safety/fume/kemper-filtermaster", image: "https://images.unsplash.com/photo-1697811734333-de52e24171a1?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper SmartFil", href: "/safety/fume/kemper-smartfil", image: "https://images.unsplash.com/photo-1711959239909-8124a2bb7078?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper Static Filter Units", href: "/safety/fume/kemper-static", image: "https://images.unsplash.com/photo-1554041751-7e90a4bfb00c?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Kemper Central Fume/Dust Extraction", href: "/safety/fume/kemper-static/kemper-central-fume-dust-extraction" }] },
        ],
      },
      {
        heading: "Welding Fume Extraction",
        href: "/safety/fume/extraction-systems",
        image: "https://images.unsplash.com/photo-1690841708918-335aa53afb63?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Kemper Hi-Vacuum Extraction", href: "/safety/fume/kemper-hi-vac", image: "https://images.unsplash.com/photo-1693106144594-4659d4c81869?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper Wall Mounted Extraction", href: "/safety/fume/kemper-wall-mounted", image: "https://images.unsplash.com/photo-1767047222430-235671afe449?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper WeldFil", href: "/safety/fume/kemper-weldfil", image: "https://images.unsplash.com/photo-1626409471333-f88d32fc0902?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Air Cleaning & Monitoring",
        href: "/safety/fume/air-cleaning",
        image: "https://images.unsplash.com/photo-1648110726569-271c08ecf3f0?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Kemper Air Purifying", href: "/safety/fume/kemper-air-purifying", image: "https://images.unsplash.com/photo-1702799825398-e33590667445?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Air Purifying Systems", href: "/safety/fume/kemper-air-purifying/air-purifying-systems" }, { label: "Kemper Clean Air Systems", href: "/safety/fume/kemper-air-purifying/kemper-clean-air-systems" }] },
          { label: "Kemper Airwatch", href: "/safety/fume/kemper-airwatch", image: "https://images.unsplash.com/photo-1767557125856-64217df780e3?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper CleanAirTower", href: "/safety/fume/kemper-tower", image: "https://images.unsplash.com/photo-1757803803106-8f0d05ac7881?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "On-Torch, Bench & Spares",
        href: "/safety/fume/on-torch",
        image: "https://images.unsplash.com/photo-1620187147547-b5d7e276cc1b?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Bench Top Extractors", href: "/safety/fume/bench-top", image: "https://images.unsplash.com/photo-1697811734333-de52e24171a1?w=200&h=200&fit=crop&auto=format" },
          { label: "F-Tech Fume Extraction", href: "/safety/fume/f-tech", image: "https://images.unsplash.com/photo-1711959239909-8124a2bb7078?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper On-Torch Extraction", href: "/safety/fume/kemper-on-torch", image: "https://images.unsplash.com/photo-1554041751-7e90a4bfb00c?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper Spares & Accessories", href: "/safety/fume/kemper-spares", image: "https://images.unsplash.com/photo-1690841708918-335aa53afb63?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Kemper Exhaust Arms & Hoods", href: "/safety/fume/kemper-spares/kemper-exhaust-arms-and-hoods" }, { label: "Kemper Fans", href: "/safety/fume/kemper-spares/kemper-fans" }, { label: "Kemper Filters", href: "/safety/fume/kemper-spares/kemper-filters" }, { label: "Kemper Hoses & Nozzles", href: "/safety/fume/kemper-spares/kemper-hoses-and-nozzles" }, { label: "Kemper Lighting Sets & Start-Stop Sets", href: "/safety/fume/kemper-spares/kemper-lighting-sets-and-start-stop-sets" }, { label: "Kemper Misc Parts & Accessories", href: "/safety/fume/kemper-spares/kemper-misc-parts-and-accessories" }] },
          { label: "WSL On-Torch Extraction", href: "/safety/fume/wsl-on-torch", image: "https://images.unsplash.com/photo-1693106144594-4659d4c81869?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 10. WORKSHOP
  {
    label: "WORKSHOP",
    href: "/workshop",
    children: [
      {
        heading: "Benches & Tables",
        href: "/workshop/benches",
        image: "https://images.unsplash.com/photo-1764115737858-c8290a4251d3?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Bench Accessories", href: "/workshop/benches/accessories", image: "https://images.unsplash.com/photo-1766096847418-9a2ae64c9621?w=200&h=200&fit=crop&auto=format" },
          { label: "Heavy Duty Welding Benches", href: "/workshop/benches/heavy-duty", image: "https://images.unsplash.com/photo-1660993431493-0ffd7635f700?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Steel Top Welding Benches", href: "/workshop/benches/heavy-duty/steel-top-welding-benches" }] },
          { label: "Medium Duty Welding Benches", href: "/workshop/benches/medium-duty", image: "https://images.unsplash.com/photo-1513206837745-ad29c1493bc7?w=200&h=200&fit=crop&auto=format" },
          { label: "Mobile Work Benches", href: "/workshop/benches/mobile", image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?w=200&h=200&fit=crop&auto=format" },
          { label: "Stainless Steel Benches", href: "/workshop/benches/stainless", image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Stainless Steel Work Benches", href: "/workshop/benches/stainless/stainless-steel-work-benches" }, { label: "Stainless Steel Work Benches with Drawer & Cupboard", href: "/workshop/benches/stainless/stainless-steel-work-benches-with-drawer-and-cupboard" }, { label: "Stainless Steel Work Benches with Lower Shelves", href: "/workshop/benches/stainless/stainless-steel-work-benches-with-lower-shelves" }] },
          { label: "Super Heavy Duty Benches", href: "/workshop/benches/super-heavy", image: "https://images.unsplash.com/photo-1639303338365-6d5912cd8c56?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Air Tools",
        href: "/workshop/air-tools",
        image: "https://images.unsplash.com/photo-1646047957710-0b5b1b0827b3?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Air Angle Grinders", href: "/workshop/air-tools/grinders", image: "https://images.unsplash.com/photo-1707246014636-87a1f1de0727?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Die Grinders", href: "/workshop/air-tools/die-grinders", image: "https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Drills", href: "/workshop/air-tools/drills", image: "https://images.unsplash.com/photo-1731694406476-e79125ee9cca?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Impact Wrenches", href: "/workshop/air-tools/impact-wrenches", image: "https://images.unsplash.com/photo-1575839127397-c12e55f70a38?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Needle Scalers", href: "/workshop/air-tools/needle-scalers", image: "https://images.unsplash.com/photo-1764115737858-c8290a4251d3?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Ratchet Wrenches", href: "/workshop/air-tools/ratchet-wrenches", image: "https://images.unsplash.com/photo-1766096847418-9a2ae64c9621?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Riveters", href: "/workshop/air-tools/riveters", image: "https://images.unsplash.com/photo-1660993431493-0ffd7635f700?w=200&h=200&fit=crop&auto=format" },
          { label: "Air Sanders / Polishers", href: "/workshop/air-tools/sanders", image: "https://images.unsplash.com/photo-1513206837745-ad29c1493bc7?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Air Belt Sanders", href: "/workshop/air-tools/sanders/air-belt-sanders" }, { label: "Air Sanders / Air Polishers", href: "/workshop/air-tools/sanders/air-sanders-air-polishers" }] },
          { label: "Air Screwdrivers", href: "/workshop/air-tools/screwdrivers", image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?w=200&h=200&fit=crop&auto=format" },
          { label: "Paint Spray Guns", href: "/workshop/air-tools/paint-guns", image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Air Compressors",
        href: "/workshop/compressors",
        image: "https://images.unsplash.com/photo-1639303338365-6d5912cd8c56?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Air Hoses & Accessories", href: "/workshop/air-tools/hoses", image: "https://images.unsplash.com/photo-1646047957710-0b5b1b0827b3?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Air Compressor Hoses & Accessories", href: "/workshop/air-tools/hoses/air-compressor-hoses-and-accessories" }, { label: "Air Compressor Safety Cages", href: "/workshop/air-tools/hoses/air-compressor-safety-cages" }, { label: "Air Line Hoses", href: "/workshop/air-tools/hoses/air-line-hoses" }, { label: "Recoil Air Hoses (uPVC)", href: "/workshop/air-tools/hoses/recoil-air-hoses-upvc" }] },
          { label: "Belt Driven Compressors", href: "/workshop/compressors/belt-driven", image: "https://images.unsplash.com/photo-1707246014636-87a1f1de0727?w=200&h=200&fit=crop&auto=format" },
          { label: "Direct Drive Compressors", href: "/workshop/compressors/direct-drive", image: "https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?w=200&h=200&fit=crop&auto=format" },
          { label: "Low Noise Compressors", href: "/workshop/compressors/low-noise", image: "https://images.unsplash.com/photo-1731694406476-e79125ee9cca?w=200&h=200&fit=crop&auto=format" },
          { label: "Petrol Air Compressors", href: "/workshop/compressors/petrol", image: "https://images.unsplash.com/photo-1575839127397-c12e55f70a38?w=200&h=200&fit=crop&auto=format" },
          { label: "Refrigerated Air Dryers", href: "/workshop/compressors/air-dryers", image: "https://images.unsplash.com/photo-1764115737858-c8290a4251d3?w=200&h=200&fit=crop&auto=format" },
          { label: "Screw Compressors", href: "/workshop/compressors/screw", image: "https://images.unsplash.com/photo-1766096847418-9a2ae64c9621?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Saws & Drills",
        href: "/workshop/saws-drills",
        image: "https://images.unsplash.com/photo-1660993431493-0ffd7635f700?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Broaching Cutters", href: "/machines/broaching-cutters", image: "https://images.unsplash.com/photo-1513206837745-ad29c1493bc7?w=200&h=200&fit=crop&auto=format" },
          { label: "Chop Saws / Cut-Off Saws", href: "/machines/saws/chop", image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?w=200&h=200&fit=crop&auto=format" },
          { label: "Circular Saws", href: "/machines/saws/circular", image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Circular Saw Blades", href: "/machines/saws/circular/circular-saw-blades" }, { label: "Circular Saws & Blades", href: "/machines/saws/circular/circular-saws-and-blades" }] },
          { label: "Magnetic Drills", href: "/machines/magnetic-drills", image: "https://images.unsplash.com/photo-1639303338365-6d5912cd8c56?w=200&h=200&fit=crop&auto=format" },
          { label: "Thermal Spray Equipment", href: "/machines/thermal-spray", image: "https://images.unsplash.com/photo-1646047957710-0b5b1b0827b3?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Thermal Spray Equipment & Powder", href: "/machines/thermal-spray/thermal-spray-equipment-and-powder" }, { label: "Thermal Spray Powders", href: "/machines/thermal-spray/thermal-spray-powders" }] },
          { label: "Tool Balancers", href: "/machines/tool-balancers", image: "https://images.unsplash.com/photo-1707246014636-87a1f1de0727?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Power & Generators",
        href: "/workshop/power",
        image: "https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Filter Kits & Servicing", href: "/machines/generators/servicing", image: "https://images.unsplash.com/photo-1731694406476-e79125ee9cca?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Servicing & Parts", href: "/machines/generators/servicing/servicing-and-parts" }] },
          { label: "Generators", href: "/machines/generators", image: "https://images.unsplash.com/photo-1575839127397-c12e55f70a38?w=200&h=200&fit=crop&auto=format" },
          { label: "Lighting Towers", href: "/machines/lighting-towers", image: "https://images.unsplash.com/photo-1764115737858-c8290a4251d3?w=200&h=200&fit=crop&auto=format" },
          { label: "Mosa Welder Generators", href: "/machines/generators/mosa", image: "https://images.unsplash.com/photo-1766096847418-9a2ae64c9621?w=200&h=200&fit=crop&auto=format" },
          { label: "Spares & Accessories", href: "/machines/generators/spares", image: "https://images.unsplash.com/photo-1660993431493-0ffd7635f700?w=200&h=200&fit=crop&auto=format" },
          { label: "Welder Generators", href: "/machines/generators/welder", image: "https://images.unsplash.com/photo-1513206837745-ad29c1493bc7?w=200&h=200&fit=crop&auto=format" },
          { label: "Welder Water Coolers", href: "/machines/water-coolers", image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Tools & Chemicals",
        href: "/workshop/tools",
        image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Cable Reels", href: "/workshop/tools/cable-reels", image: "https://images.unsplash.com/photo-1639303338365-6d5912cd8c56?w=200&h=200&fit=crop&auto=format" },
          { label: "Devcon Maintenance Products", href: "/workshop/devcon", image: "https://images.unsplash.com/photo-1646047957710-0b5b1b0827b3?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Devcon Epoxy Adhesives", href: "/workshop/devcon/devcon-epoxy-adhesives" }, { label: "Devcon Epoxy Metal Repair Putty", href: "/workshop/devcon/devcon-epoxy-metal-repair-putty" }, { label: "Devcon Flexane", href: "/workshop/devcon/devcon-flexane" }] },
          { label: "Magnetic Welding Positioners", href: "/workshop/positioners", image: "https://images.unsplash.com/photo-1707246014636-87a1f1de0727?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Magswitch Magnetic Earth Clamps", href: "/workshop/positioners/magswitch-magnetic-earth-clamps" }, { label: "Work Holding Devices - Fixed Angle", href: "/workshop/positioners/work-holding-devices-fixed-angle" }, { label: "Work Holding Devices - Variable Angle", href: "/workshop/positioners/work-holding-devices-variable-angle" }] },
          { label: "Temperature Indicator Pens", href: "/workshop/tools/temp-pens", image: "https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?w=200&h=200&fit=crop&auto=format" },
          { label: "Tool Kit Sets & Cabinets", href: "/workshop/tools/kits", image: "https://images.unsplash.com/photo-1731694406476-e79125ee9cca?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Plier Sets", href: "/workshop/tools/kits/plier-sets" }, { label: "Screwdriver Sets", href: "/workshop/tools/kits/screwdriver-sets" }, { label: "Socket Sets", href: "/workshop/tools/kits/socket-sets" }, { label: "Tool Boxes & Cabinets", href: "/workshop/tools/kits/tool-boxes-and-cabinets" }, { label: "Wrench Sets", href: "/workshop/tools/kits/wrench-sets" }] },
          { label: "Weld Backing Ceramics", href: "/workshop/consumables/ceramics", image: "https://images.unsplash.com/photo-1575839127397-c12e55f70a38?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Ceramic Backing Strips", href: "/workshop/consumables/ceramics/ceramic-backing-strips" }, { label: "Katbak Ceramic Backing Strips", href: "/workshop/consumables/ceramics/katbak-ceramic-backing-strips" }, { label: "Weld Backing Ceramics & Tapes", href: "/workshop/consumables/ceramics/weld-backing-ceramics-and-tapes" }] },
          { label: "Welding Chemicals & Sprays", href: "/workshop/chemicals", image: "https://images.unsplash.com/photo-1764115737858-c8290a4251d3?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Ardrox NDT Aerosols", href: "/workshop/chemicals/ardrox-ndt-aerosols" }, { label: "Ardrox NDT Products", href: "/workshop/chemicals/ardrox-ndt-products" }, { label: "Leak Detection Spray", href: "/workshop/chemicals/leak-detection-spray" }, { label: "Welding Chemicals and Sprays", href: "/workshop/chemicals/welding-chemicals-and-sprays" }] },
          { label: "Welding Gauges", href: "/workshop/tools/gauges", image: "https://images.unsplash.com/photo-1766096847418-9a2ae64c9621?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
  // 11. PIPE
  {
    label: "Pipe Welding",
    href: "/workshop/pipe",
    children: [
      {
        heading: "Pipe Stands & Handling",
        href: "/workshop/pipe/stands",
        image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Pipe Conveyors", href: "/workshop/pipe/conveyors", image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format" },
          { label: "Pipe Rotators", href: "/workshop/pipe/rotators", image: "https://images.unsplash.com/photo-1586333109867-812586269a58?w=200&h=200&fit=crop&auto=format" },
          { label: "Roller Stands", href: "/workshop/pipe/stands/roller", image: "https://images.unsplash.com/photo-1731397980374-c26ef55f08a8?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "AMA Roller Pipe Stands", href: "/workshop/pipe/stands/roller/ama-roller-pipe-stands" }, { label: "Double Roll Pipe Stands", href: "/workshop/pipe/stands/roller/double-roll-pipe-stands" }, { label: "Floor Mounted Roller Stands", href: "/workshop/pipe/stands/roller/floor-mounted-roller-stands" }, { label: "Mega-Pipe Stands", href: "/workshop/pipe/stands/roller/mega-pipe-stands" }, { label: "Multi-Stand Pipe Stands", href: "/workshop/pipe/stands/roller/multi-stand-pipe-stands" }, { label: "Pipe Roller Stands", href: "/workshop/pipe/stands/roller/pipe-roller-stands" }, { label: "Roller Pipe Stands", href: "/workshop/pipe/stands/roller/roller-pipe-stands" }] },
          { label: "V-Head Stands", href: "/workshop/pipe/stands/v-head", image: "https://images.unsplash.com/photo-1654076847645-b72b3b66d576?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Five Leg Pipe Stands", href: "/workshop/pipe/stands/v-head/five-leg-pipe-stands" }, { label: "Quattro Pipe Stands", href: "/workshop/pipe/stands/v-head/quattro-pipe-stands" }, { label: "Single Tube Pipe Stands", href: "/workshop/pipe/stands/v-head/single-tube-pipe-stands" }, { label: "Tri-Stands & Pipe Jacks", href: "/workshop/pipe/stands/v-head/tri-stands-and-pipe-jacks" }, { label: "V Head Stands", href: "/workshop/pipe/stands/v-head/v-head-stands" }] },
        ],
      },
      {
        heading: "Pipe Welding Clamps",
        href: "/workshop/pipe/clamps",
        image: "https://images.unsplash.com/photo-1701952711272-ec97bb9cf95d?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Bridge Clamps", href: "/workshop/pipe/clamps/bridge", image: "https://images.unsplash.com/photo-1701448150058-43d6d199b103?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Black Bridge Clamps", href: "/workshop/pipe/clamps/bridge/black-bridge-clamps" }, { label: "Gold Bridge Alignment Clamps", href: "/workshop/pipe/clamps/bridge/gold-bridge-alignment-clamps" }] },
          { label: "Cage Clamps", href: "/workshop/pipe/clamps/cage", image: "https://images.unsplash.com/photo-1759064776046-45b988af4b6d?w=200&h=200&fit=crop&auto=format" },
          { label: "Chain Clamps", href: "/workshop/pipe/clamps/chain", image: "https://images.unsplash.com/photo-1506902039157-1a7e7374b077?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Chain Pipe Alignment Clamps", href: "/workshop/pipe/clamps/chain/chain-pipe-alignment-clamps" }, { label: "Double Chain Pipe Clamps", href: "/workshop/pipe/clamps/chain/double-chain-pipe-clamps" }, { label: "Single Chain Pipe Clamps", href: "/workshop/pipe/clamps/chain/single-chain-pipe-clamps" }] },
          { label: "E-Z Fit Clamps", href: "/workshop/pipe/clamps/ez-fit", image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=200&h=200&fit=crop&auto=format" },
          { label: "PDQ Clamps", href: "/workshop/pipe/clamps/pdq", image: "https://images.unsplash.com/photo-1727373203627-73457889fe0f?w=200&h=200&fit=crop&auto=format" },
          { label: "Pincer Clamps", href: "/workshop/pipe/clamps/pincer", image: "https://images.unsplash.com/photo-1497369573176-0ceb5353817d?w=200&h=200&fit=crop&auto=format" },
          { label: "Spider Clamps", href: "/workshop/pipe/clamps/spider", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Pipe Cutting & Preparation",
        href: "/workshop/pipe/cutting",
        image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Exact Pipe Saws", href: "/workshop/pipe/saws/exact", image: "https://images.unsplash.com/photo-1586333109867-812586269a58?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "140mm Saw Blades & Diamond Cutting Discs", href: "/workshop/pipe/saws/exact/140mm-saw-blades-and-diamond-cutting-discs" }, { label: "165mm Saw Blades & Diamond Cutting Discs", href: "/workshop/pipe/saws/exact/165mm-saw-blades-and-diamond-cutting-discs" }, { label: "Exact 170 Pipe Cutting Benches", href: "/workshop/pipe/saws/exact/exact-170-pipe-cutting-benches" }, { label: "Exact PipeCut for Cutting Spiral Ducting", href: "/workshop/pipe/saws/exact/exact-pipecut-for-cutting-spiral-ducting" }, { label: "Exact Saw Blades", href: "/workshop/pipe/saws/exact/exact-saw-blades" }, { label: "Pipe Bench System Accessories", href: "/workshop/pipe/saws/exact/pipe-bench-system-accessories" }, { label: "Special Blades", href: "/workshop/pipe/saws/exact/special-blades" }] },
          { label: "GBC Pipe Saws", href: "/workshop/pipe/saws/gbc", image: "https://images.unsplash.com/photo-1731397980374-c26ef55f08a8?w=200&h=200&fit=crop&auto=format" },
          { label: "Pipe Bevelling Machines", href: "/workshop/pipe/bevelling", image: "https://images.unsplash.com/photo-1654076847645-b72b3b66d576?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Pipe Bevelling Machines & Tools", href: "/workshop/pipe/bevelling/pipe-bevelling-machines-and-tools" }, { label: "Pipe Prep Blades", href: "/workshop/pipe/bevelling/pipe-prep-blades" }, { label: "Prep 2 Pipe Preparation Machines", href: "/workshop/pipe/bevelling/prep-2-pipe-preparation-machines" }, { label: "Prep 3 Pipe Preparation Machines", href: "/workshop/pipe/bevelling/prep-3-pipe-preparation-machines" }, { label: "Prep 4 Pipe Preparation Machines", href: "/workshop/pipe/bevelling/prep-4-pipe-preparation-machines" }, { label: "Prep 8 Pipe Preparation Machines", href: "/workshop/pipe/bevelling/prep-8-pipe-preparation-machines" }] },
          { label: "Pipe Cutting Machine Spares", href: "/workshop/pipe/cutting-machines/spares", image: "https://images.unsplash.com/photo-1701952711272-ec97bb9cf95d?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Automatic Pipe Cutting Machine Spares", href: "/workshop/pipe/cutting-machines/spares/automatic-pipe-cutting-machine-spares" }, { label: "Magnetic Pipe Cutting Machine Spares", href: "/workshop/pipe/cutting-machines/spares/magnetic-pipe-cutting-machine-spares" }, { label: "Manual Pipe Cutting Machine Spares", href: "/workshop/pipe/cutting-machines/spares/manual-pipe-cutting-machine-spares" }] },
          { label: "Pipe Cutting Machines", href: "/workshop/pipe/cutting-machines", image: "https://images.unsplash.com/photo-1701448150058-43d6d199b103?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Automatic Pipe Cutting Machines", href: "/workshop/pipe/cutting-machines/automatic-pipe-cutting-machines" }, { label: "Magnetic Pipe Cutting Machines", href: "/workshop/pipe/cutting-machines/magnetic-pipe-cutting-machines" }] },
          { label: "Pipe Saw Spares & Supports", href: "/workshop/pipe/saws/spares", image: "https://images.unsplash.com/photo-1759064776046-45b988af4b6d?w=200&h=200&fit=crop&auto=format" },
          { label: "TAG Pipe Saws", href: "/workshop/pipe/saws/tag", image: "https://images.unsplash.com/photo-1506902039157-1a7e7374b077?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Pipe Welding Accessories",
        href: "/workshop/pipe/accessories",
        image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Drain Test Plugs", href: "/workshop/pipe/drain-plugs", image: "https://images.unsplash.com/photo-1727373203627-73457889fe0f?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Drain Test Plugs & Stoppers", href: "/workshop/pipe/drain-plugs/drain-test-plugs-and-stoppers" }, { label: "Hollow Bore Drain Test Plugs", href: "/workshop/pipe/drain-plugs/hollow-bore-drain-test-plugs" }, { label: "Nylon Drain Test Plugs", href: "/workshop/pipe/drain-plugs/nylon-drain-test-plugs" }] },
          { label: "Measuring & Marking Tools", href: "/workshop/pipe/measuring", image: "https://images.unsplash.com/photo-1497369573176-0ceb5353817d?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Contour Markers", href: "/workshop/pipe/measuring/contour-markers" }, { label: "Flange Pins", href: "/workshop/pipe/measuring/flange-pins" }, { label: "Pipe Centering Heads", href: "/workshop/pipe/measuring/pipe-centering-heads" }, { label: "Pipe Measuring & Marking Tools", href: "/workshop/pipe/measuring/pipe-measuring-and-marking-tools" }, { label: "Radius Markers", href: "/workshop/pipe/measuring/radius-markers" }] },
          { label: "Pipe Purging Equipment", href: "/workshop/pipe/purging", image: "https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Double Seal Kits Complete", href: "/workshop/pipe/purging/double-seal-kits-complete" }, { label: "Double Seal Purge Systems", href: "/workshop/pipe/purging/double-seal-purge-systems" }, { label: "Expandable Pipe Stoppers", href: "/workshop/pipe/purging/expandable-pipe-stoppers" }, { label: "Inflatable Purge Bag Systems", href: "/workshop/pipe/purging/inflatable-purge-bag-systems" }, { label: "Pre-formed Self Adhesive Purge Dams", href: "/workshop/pipe/purging/pre-formed-self-adhesive-purge-dams" }, { label: "Purge Gas Retaining Tape", href: "/workshop/pipe/purging/purge-gas-retaining-tape" }, { label: "Weld Purge Monitors", href: "/workshop/pipe/purging/weld-purge-monitors" }] },
          { label: "Pipe Wrap", href: "/workshop/pipe/pipe-wrap", image: "https://images.unsplash.com/photo-1724188263707-a86a1c873a60?w=200&h=200&fit=crop&auto=format" },
          { label: "Weld Backing Tape", href: "/workshop/pipe/backing-tape", image: "https://images.unsplash.com/photo-1586333109867-812586269a58?w=200&h=200&fit=crop&auto=format", subcategories: [{ label: "Fibreglass Weld Backing Tape", href: "/workshop/pipe/backing-tape/fibreglass-weld-backing-tape" }, { label: "Weld Backing Tapes", href: "/workshop/pipe/backing-tape/weld-backing-tapes" }] },
        ],
      },
    ],
  },
  // 12. BRANDS
  {
    label: "BRANDS",
    href: "/brands",
    children: [
      {
        heading: "Featured Brands",
        href: "/brands",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Gas Arc - Regulators & Gas Control", href: "/brands/gas-arc", image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=200&h=200&fit=crop&auto=format" },
          { label: "Jasic - MIG, TIG & Plasma", href: "/brands/jasic", image: "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper - Fume Extraction", href: "/brands/kemper", image: "https://images.unsplash.com/photo-1507497806295-753c4108560c?w=200&h=200&fit=crop&auto=format" },
          { label: "Parweld - Welders & Consumables", href: "/brands/parweld", image: "https://images.unsplash.com/photo-1558611997-dd5b20e08c71?w=200&h=200&fit=crop&auto=format" },
          { label: "Sif / Weldability - Consumables", href: "/brands/sif-weldability", image: "https://images.unsplash.com/photo-1564182998523-6923112e7d6b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Brands A - K",
        href: "/brands",
        image: "https://images.unsplash.com/photo-1526634140919-468dc3ae3870?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Binzel - MIG Torches & Parts", href: "/brands/binzel", image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=200&h=200&fit=crop&auto=format" },
          { label: "Devcon - Maintenance Products", href: "/brands/devcon", image: "https://images.unsplash.com/photo-1508465818649-14a170138405?w=200&h=200&fit=crop&auto=format" },
          { label: "Exact - Pipe Saws", href: "/brands/exact", image: "https://images.unsplash.com/photo-1683470157212-cd4005549fce?w=200&h=200&fit=crop&auto=format" },
          { label: "F-Tech - Fume Extraction", href: "/brands/f-tech", image: "https://images.unsplash.com/photo-1466779561253-0a08336ba2ab?w=200&h=200&fit=crop&auto=format" },
          { label: "Jasic - Welding Machines", href: "/brands/jasic", image: "https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?w=200&h=200&fit=crop&auto=format" },
          { label: "Kemper - Fume Extraction & Filtration", href: "/brands/kemper", image: "https://images.unsplash.com/photo-1485881922961-fbe39329af2a?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Brands M - S",
        href: "/brands",
        image: "https://images.unsplash.com/photo-1668140736531-d23950307b3c?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "Magswitch - Magnetic Positioners", href: "/brands/magswitch", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop&auto=format" },
          { label: "Mosa - Welder Generators", href: "/brands/mosa", image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=200&h=200&fit=crop&auto=format" },
          { label: "Newarc - TIG & MMA Welders", href: "/brands/newarc", image: "https://images.unsplash.com/photo-1609348632802-b952f368fc3a?w=200&h=200&fit=crop&auto=format" },
          { label: "Parweld - Welders & Accessories", href: "/brands/parweld", image: "https://images.unsplash.com/photo-1507497806295-753c4108560c?w=200&h=200&fit=crop&auto=format" },
          { label: "Sif / Weldability - Filler Metals", href: "/brands/sif-weldability", image: "https://images.unsplash.com/photo-1558611997-dd5b20e08c71?w=200&h=200&fit=crop&auto=format" },
          { label: "SWP - MIG, TIG & Plasma", href: "/brands/swp", image: "https://images.unsplash.com/photo-1564182998523-6923112e7d6b?w=200&h=200&fit=crop&auto=format" },
        ],
      },
      {
        heading: "Brands T - W",
        href: "/brands",
        image: "https://images.unsplash.com/photo-1526634140919-468dc3ae3870?w=200&h=200&fit=crop&auto=format",
        items: [
          { label: "TAG - Pipe Saws", href: "/brands/tag", image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=200&h=200&fit=crop&auto=format" },
          { label: "Tecna - Spot Welders", href: "/brands/tecna", image: "https://images.unsplash.com/photo-1508465818649-14a170138405?w=200&h=200&fit=crop&auto=format" },
          { label: "Thermal Dynamics - Plasma", href: "/brands/thermal-dynamics", image: "https://images.unsplash.com/photo-1683470157212-cd4005549fce?w=200&h=200&fit=crop&auto=format" },
          { label: "Weldstar - Multi Process Welders", href: "/brands/weldstar", image: "https://images.unsplash.com/photo-1466779561253-0a08336ba2ab?w=200&h=200&fit=crop&auto=format" },
          { label: "WSL - On-Torch Extraction", href: "/brands/wsl", image: "https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?w=200&h=200&fit=crop&auto=format" },
        ],
      },
    ],
  },
];
