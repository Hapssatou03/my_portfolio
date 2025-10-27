"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-800 leading-tight">
            Je suis <span className="text-primary-600">Hapssatou</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mt-4">
           Ingénieure Data en apprentissage
          </h2>
          <p className="text-gray-700 mt-6 text-lg">
           Ensemble, transformons vos données en solutions fiables, évolutives et orientées impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn btn-primary"
              aria-label="Aller à la page Contact"
            >
              Me contacter
            </Link>
            <Link
              href="/projets"
              className="btn btn-outline"
              aria-label="Aller à la page Projets"
            >
              Voir mes projets
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/picture1.png"
                  alt="Portrait de Hapssatou"
                  width={700}
                  height={700}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <div className="bg-primary-100 rounded-full p-3">
                  <div className="bg-primary-200 rounded-full p-3">
                    <div className="bg-primary-500 rounded-full p-3 text-white">
                      {/* <span className="font-bold">CDA</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      ></motion.div>
    </section>
  );
}
