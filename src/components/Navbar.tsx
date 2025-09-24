"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    if (localStorage.theme) return localStorage.theme as "light" | "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.theme = theme;
  }, [theme]);

  const toggleMenu = () => setIsOpen((o) => !o);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          {/* Logo*/}
          <div className="flex items-center flex-none">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-xl font-bold text-primary-800 dark:text-primary-300">
                Hapssatou.S
              </span>
            </Link>
          </div>

          {/* Nav desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              <NavLink href="#about">À propos</NavLink>
              <NavLink href="#skills">Compétences</NavLink>
              <NavLink href="#projects">Projets</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3 flex-none">
            <button
              aria-label="Basculer le thème"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition"
              title={theme === "dark" ? "Passer en clair" : "Passer en sombre"}
            >
              {theme === "dark" ? (
                <FiSun className="text-yellow-400 text-xl" />
              ) : (
                <FiMoon className="text-gray-700 text-xl" />
              )}
            </button>

            <button
              className="md:hidden p-2 text-gray-800 dark:text-gray-100"
              onClick={toggleMenu}
              aria-label="Ouvrir le menu"
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

        {/* Menu mobile */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="#about" onClick={toggleMenu}>
                À propos
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={toggleMenu}>
                Compétences
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={toggleMenu}>
                Projets
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMenu}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300 font-medium relative group"
  >
    {children}
    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800/60"
  >
    {children}
  </Link>
);

export default Navbar;
