"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { menuItems } from "../data/menuData";

export default function MegaMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Top Header Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-baseline gap-0.5">
              <span className="text-[#d32f2f] font-black text-2xl md:text-3xl italic tracking-tight">
                Welding
              </span>
              <span className="text-gray-500 font-black text-2xl md:text-3xl italic">
                &amp;
              </span>
              <span className="text-[#d32f2f] font-black text-2xl md:text-3xl italic tracking-tight">
                Welder
              </span>
            </Link>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] -mt-1">
              Trading Since 2010
            </p>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, posts, pages..."
                className="w-full border-2 border-gray-300 rounded-l-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#d32f2f]"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#d32f2f] text-white px-4 rounded-r-md hover:bg-red-700 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span>See our</span>
              <span className="font-bold text-gray-800">207 reviews</span>
              <span>on</span>
              <span className="font-bold text-green-600">Trustpilot</span>
            </div>
            <button className="relative text-gray-700 hover:text-[#d32f2f]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8l-1.35-7H19m-12 7a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#d32f2f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Navigation Bar */}
      <nav
        className="hidden md:block bg-[#1a2456] relative"
        ref={navRef}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full px-2">
          <ul className="flex items-stretch justify-between w-full">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="relative flex-1"
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center justify-center gap-1 px-2 lg:px-3 py-3.5 text-white text-[11px] lg:text-xs xl:text-sm font-medium uppercase tracking-wide transition-colors text-center ${
                    openIndex === i
                      ? "bg-[#d32f2f]"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-[#d32f2f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Full-width dropdown rendered inside nav, outside the ul */}
        {openIndex !== null && menuItems[openIndex].children && (
          <div
            className="absolute left-0 right-0 bg-white shadow-xl border-t-2 border-[#d32f2f] z-50"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div
                className="grid gap-8"
                style={{
                  gridTemplateColumns: `repeat(${menuItems[openIndex].children!.length}, 1fr)`,
                }}
              >
                {menuItems[openIndex].children!.map((col, ci) => (
                  <div key={ci}>
                    <Link
                      href={col.href}
                      className="text-[#1a2456] font-bold text-sm uppercase tracking-wide border-b-2 border-[#d32f2f] pb-2 mb-3 block hover:text-[#d32f2f] transition-colors"
                    >
                      {col.heading}
                    </Link>
                    <ul className="space-y-1.5 mt-3">
                      {col.items.map((link, li) => (
                        <li key={li}>
                          <Link
                            href={link.href}
                            className={`text-sm hover:text-[#d32f2f] transition-colors block py-0.5 ${
                              link.label.startsWith("View All")
                                ? "font-semibold text-[#1a2456] mt-2 border border-[#1a2456] rounded px-3 py-1.5 text-center hover:bg-[#1a2456] hover:text-white"
                                : "text-gray-600"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 max-h-[80vh] overflow-y-auto">
          {/* Mobile search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border-2 border-gray-300 rounded px-4 py-2.5 text-sm"
              />
            </div>
          </div>
          <ul>
            {menuItems.map((item, i) => (
              <li key={i} className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 px-4 py-3 text-sm font-semibold text-[#1a2456] uppercase"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="bg-[#d32f2f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-2">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {item.children && (
                    <button
                      className="px-4 py-3 text-gray-500"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === i ? null : i)
                      }
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === i ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {mobileExpanded === i && item.children && (
                  <div className="bg-gray-50 px-4 pb-4">
                    {item.children.map((col, ci) => (
                      <div key={ci} className="mt-3">
                        <Link
                          href={col.href}
                          className="text-xs font-bold text-[#d32f2f] uppercase tracking-wide"
                          onClick={() => setMobileOpen(false)}
                        >
                          {col.heading}
                        </Link>
                        <ul className="mt-1 space-y-1 ml-2">
                          {col.items.map((link, li) => (
                            <li key={li}>
                              <Link
                                href={link.href}
                                className="text-sm text-gray-600 block py-0.5"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
