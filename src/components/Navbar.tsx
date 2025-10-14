"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.add("dark");
    try {
      localStorage.theme = "dark";
    } catch {}
  }, []);

  const toggleMenu = () => setIsOpen((o) => !o);

  const items = [
    { href: "/apropos", label: "À propos" },
    { href: "/competences", label: "Compétences" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center flex-none">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-xl font-bold text-[#EE4D96]">
                Hapssatou.S
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              {items.map((it) => (
                <NavLink
                  key={it.href}
                  href={it.href}
                  active={pathname === it.href}
                >
                  {it.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Actions (menu mobile uniquement) */}
          <div className="ml-auto flex items-center gap-3 flex-none">
            <button
              className="md:hidden p-2 text-gray-100"
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
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col space-y-3">
                {items.map((it) => (
                  <MobileNavLink
                    key={it.href}
                    href={it.href}
                    active={pathname === it.href}
                    onClick={toggleMenu}
                  >
                    {it.label}
                  </MobileNavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`font-medium relative group ${
        active ? "text-primary-300" : "text-gray-100 hover:text-primary-300"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary-400 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  active,
  children,
}: {
  href: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`font-medium py-2 px-4 rounded-lg transition ${
        active
          ? "text-primary-300 bg-gray-800/60"
          : "text-gray-100 hover:text-primary-300 hover:bg-gray-800/60"
      }`}
    >
      {children}
    </Link>
  );
}
