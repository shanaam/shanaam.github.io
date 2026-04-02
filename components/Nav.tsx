"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/academics", label: "Academics" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur border-b border-gray-100 dark:border-stone-700">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold text-gray-900 dark:text-stone-100 hover:text-accent transition-colors">
          Shanaa Modchalingam
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-accent text-white"
                  : "text-gray-600 dark:text-stone-400 hover:text-gray-900 dark:hover:text-stone-100 hover:bg-gray-100 dark:hover:bg-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded text-gray-600 dark:text-stone-400 hover:bg-gray-100 dark:hover:bg-stone-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden border-t border-gray-100 dark:border-stone-700 bg-white dark:bg-stone-900 px-6 py-3 flex flex-col gap-1">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-accent text-white"
                  : "text-gray-600 dark:text-stone-400 hover:text-gray-900 dark:hover:text-stone-100 hover:bg-gray-100 dark:hover:bg-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-1">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
