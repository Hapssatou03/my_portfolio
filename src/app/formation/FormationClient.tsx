"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaLanguage, FaBullseye } from "react-icons/fa";

type Formation = {
  title: string;
  school: string;
  details: string;
  status?: string;
};

const mainFormations: Formation[] = [
  {
    title: "Master 2 – CTO & Lead Tech",
    school: "",
    details:
      "Architecture logicielle, data, management d’équipes tech, vision produit.",
    status: "Sept 2026 - Sept 2027",
  },
  {
    title: "Maîtrise – Concepteur Développeur d’Applications Web & Mobile",
    school: "Doranco",
    details:
      "Développement full-stack Java / Spring, React, DevOps, bonnes pratiques.",
  },
  {
    title: "Titre RNCP – Développeur d’Applications Mobiles (Niveau 6)",
    school: "OpenClassrooms",
    details: "Applications mobiles, APIs, qualité du code, méthodes agiles.",
  },
  {
    title: "Bachelor – Marketing Digital",
    school: "Studi",
    details:
      "Acquisition, stratégie digitale, contenu, analyse de performance.",
  },
];

const extraTrainings: Formation[] = [
  {
    title: "Titre RNCP – Référent Communication & Numérique (Niveau 5)",
    school: "Hergos",
    details:
      "Communication digitale, gestion de projets web, outils collaboratifs.",
  },
  {
    title: "Baccalauréat – Langues & Littératures",
    school: "Lycée (Mali)",
    details: "Langues, rédaction, analyse de textes, ouverture culturelle.",
  },
  {
    title: "Certification AWS Cloud",
    school: "Amazon Web Services",
    details:
      "Fondamentaux du cloud, services principaux, bonnes pratiques de déploiement.",
  },
  {
    title: "Certification Python",
    school: "Plateforme en ligne",
    details: "Bases de Python, scripts, data & automatisation.",
  },
];

function FormationCard({ title, school, details, status }: Formation) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      className="flex items-start gap-4 rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                 border border-slate-100 px-5 sm:px-6 py-5 sm:py-6"
    >
      <div
        className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white
                      flex items-center justify-center text-xl shrink-0"
      >
        <FaGraduationCap />
      </div>

      <div className="w-full">
        {/* Titre + badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            {title}
          </h3>

          {status && (
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-[11px] sm:text-xs font-semibold px-3 py-1 whitespace-nowrap">
              {status}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm font-medium text-blue-600">{school}</p>
        <p className="mt-1 text-sm text-slate-600">{details}</p>
      </div>
    </motion.div>
  );
}

export default function FormationClient() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="formation" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900">
            Formation & Certifications
          </h2>
        </motion.div>

        {/* 4 formations principales */}
        <div className="space-y-4 sm:space-y-5">
          {mainFormations.map((f) => (
            <FormationCard key={f.title} {...f} />
          ))}

          {/* Bloc “voir plus” */}
          <AnimatePresence>
            {showMore &&
              extraTrainings.map((f) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <FormationCard {...f} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Bouton toggler */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full
               bg-gradient-to-r from-blue-500 to-cyan-500
               text-white text-sm font-semibold
               px-8 py-3 shadow-md hover:shadow-lg
               transition-all hover:scale-[1.02]"
          >
            {showMore ? "Voir moins" : "Voir plus"}

            <motion.span
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.span>
          </button>
        </div>
        {/* Bloc Langues & Centres d'intérêt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Carte Langues */}
          <div
            className="rounded-3xl bg-[#050b1f] text-slate-50 px-7 py-6 md:px-8 md:py-7
                          "
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-11 w-11 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500
                              grid place-items-center text-2xl shadow-md"
              >
                <FaLanguage />
              </div>
              <h3 className="text-xl font-semibold">Langues</h3>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="font-semibold">Français</p>
              </div>
              <div>
                <p className="font-semibold">Anglais</p>
                <p className="text-slate-300">
                  Lecture et conversation courante
                </p>
              </div>
            </div>
          </div>

          {/* Carte Centres d'intérêt */}
          <div
            className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500
                          text-slate-50 px-7 py-6 md:px-8 md:py-7
                          shadow-[0_26px_70px_rgba(15,23,42,0.6)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex items-center justify-center
    h-9 w-9 rounded-xl
    bg-white/15
    shadow-sm
    text-[22px]"
              >
                🎯
              </span>

              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Centres d'intérêt
              </h3>
            </div>

            <ul className="mt-4 space-y-2.5 text-sm sm:text-base list-disc pl-6">
              <li>Meditation</li>
              <li>Cinéma</li>
              <li>Lecture livre developpement personnel</li>
              <li>voyage </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
