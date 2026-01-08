"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((o) => !o);

  const items = [
    { href: "/", label: "Accueil" },
    { href: "/#competences", label: "Compétences" },
    { href: "/#projets", label: "Projets" },
    { href: "/#experience", label: "Expérience" },
    { href: "/#formation", label: "Formation" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 relative
      bg-gradient-to-b
      from-[#243654]
      via-[#1f2f4b]
      to-[#182a44]
      backdrop-blur-sm
      border-b border-white/5
      after:content-['']
      after:absolute after:inset-0
      after:bg-[radial-gradient(circle_at_top_left,rgba(80,120,255,0.10),transparent_35%)]
      after:pointer-events-none after:-z-10"
    >
      {/* Barre de navigation */}
      <div
        className="relative z-10 w-full
                   px-4 sm:px-6 lg:px-10
                   py-4 md:py-5
                   flex items-center justify-between"
      >
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-tight text-slate-50"
        >
          H{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            S
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="text-sm font-semibold text-slate-100 hover:text-white transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-slate-100 ml-auto"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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

        {/* Menu mobile déroulant */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-[#182a44]/95 backdrop-blur-md md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center space-y-2 py-4">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-medium py-2 px-4 rounded-lg text-slate-100 hover:text-white hover:bg-slate-800/70 transition"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
