import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-[#1a2456] mb-4">
        This is a navigation mockup
      </h1>
      <p className="text-gray-600 mb-6">
        Product pages are not part of this prototype. Use the menu above to
        explore the proposed navigation structure.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#d32f2f] text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
      >
        Back to Overview
      </Link>
    </main>
  );
}
