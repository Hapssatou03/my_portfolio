'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              <FaHeart className="text-primary-500 text-2xl" />
            </motion.div>
            <span className="font-serif text-xl font-bold text-primary-800">Hapssatou</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">À propos</NavLink>
            <NavLink href="#skills">Compétences</NavLink>
            <NavLink href="#projects">Projets</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-800"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#about" onClick={toggleMenu}>À propos</MobileNavLink>
              <MobileNavLink href="#skills" onClick={toggleMenu}>Compétences</MobileNavLink>
              <MobileNavLink href="#projects" onClick={toggleMenu}>Projets</MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-primary-600 font-medium relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Navbar