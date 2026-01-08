"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#243654] via-[#182a44] to-[#0f1c2f]" />

      <div
        className="absolute inset-0 -z-10 pointer-events-none
    bg-[radial-gradient(circle_at_top_left,rgba(80,120,255,0.18),transparent_35%)]
    mix-blend-soft-light"
      />

      <div
        className="absolute inset-0 -z-10 pointer-events-none
    bg-[radial-gradient(circle_at_bottom_right,rgba(255,80,180,0.12),transparent_40%)]
    mix-blend-soft-light"
      />

      <div className="relative z-10 mix-blend-normal max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-24 md:pb-28 text-center">
        {/* NOM */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight text-slate-50"
        >
          <span className="inline-block mr-2">Hapssatou</span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            SY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-xl sm:text-2xl lg:text-[1.6rem] font-medium text-slate-300"
        >
          Développeuse Web & Mobile Full-Stack
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto"
        >
          Passionnée par l’univers de la programmation et forte de{" "}
          <span className="font-semibold text-blue-300">
            2 ans d’expérience en tant que développeuse full-stack
          </span>
          , les missions de développement front-end, back-end et d’intégration
          d’API font partie de mon quotidien. Organisée, créative et autonome,
          je suis enthousiaste à l’idée de mettre mes compétences et mon
          engagement au service de votre entreprise.
        </motion.p>

        {/* Bloc email / téléphone / localisation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:hapssatousy01@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-700 bg-slate-900/60 text-sm text-slate-200 hover:border-blue-400 transition"
          >
            <FaEnvelope className="text-slate-300" />
            <span>hapssatousy01@gmail.com</span>
          </a>

          <a
            href="tel:+33618761886"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-700 bg-slate-900/60 text-sm text-slate-200 hover:border-blue-400 transition"
          >
            <FaPhoneAlt className="text-slate-300" />
            <span>+33 6 18 76 18 86</span>
          </a>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-700 bg-slate-900/60 text-sm text-slate-200">
            <FaMapMarkerAlt className="text-slate-300" />
            <span>Île-de-France</span>
          </div>
        </motion.div>

        {/* Boutons principaux */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <Link
            href="/projets"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Voir mes projets
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold border border-slate-600 hover:border-blue-400 text-slate-100 hover:text-white hover:bg-slate-900/60 transition-transform hover:-translate-y-0.5"
          >
            Me contacter
          </Link>
        </motion.div>

        {/* Flèche */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-14 flex justify-center text-slate-500"
        >
          <span className="text-2xl">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
