"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";

const EXPERIENCES = [
  {
    company: "DADITECH",
    role: "Développeuse Fullstack",
    period: "Mars - Juillet 2025",
    bullets: [
      "Conception du cadrage technique et fonctionnel (maquettes Figma, diagrammes UML)",
      "Développement d’APIs robustes au sein d’une architecture hexagonale",
      "Collaboration quotidienne entre les équipes backend et frontend",
      "Participation aux cérémonies Agile (daily meeting, sprint planning, sprint review)",
      "Contribution à la mise en production et à l’automatisation des déploiements",
      "Intégration, tests et amélioration continue des fonctionnalités développées",
    ],
  },
  {
    company: "THL Technologie",
    role: "Fullstack développeuse",
    period: "Avril 2022 - Sept 2023",
    bullets: [
      "Mise en place de pipelines CI/CD pour automatiser le déploiement et améliorer la qualité logicielle",
      "Optimisation des performances des API et du code front-end",
      "Participation active aux cérémonies Agile (daily meeting, sprint planning, sprint review)",
      "Structuration, modélisation et exposition des données métiers",
      "Développement et maintenance de fonctionnalités front/back dans un environnement full-stack",
      "Collaboration avec l’équipe pour garantir la qualité du code et la cohérence technique du projet",
    ],
  },
  {
    company: "G2r-Formation",
    role: "Formatrice Numérique",
    period: "Sept 2020 - Août 2021",
    bullets: [
      "Préparation et animation de sessions de formation numérique",
      "Sensibilisation à la sécurité numérique et aux bonnes pratiques",
      "Formation aux outils collaboratifs (Google Workspace, Office 365)",
    ],
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function ExperienceClient() {
  return (
    <section
      id="experience"
      className=" ppy-16 md:py-20
    bg-gradient-to-b
    from-white
    via-[#fafbff]
    to-[#f7f9fc]
    dark:from-slate-900/40
    dark:via-slate-900/30
    dark:to-slate-900/20"
    >
      <div
        className="max-w-5xl mx-auto
    px-4 sm:px-6 lg:px-8
    pt-6 md:pt-8
    pb-16 md:pb-20
    shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]
  "
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 text-black-slate-50">
            Expériences Professionnelles
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="space-y-6 md:space-y-7"
        >
          {EXPERIENCES.map((exp) => (
            <motion.article
              key={exp.company}
              variants={item}
              className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.06)] px-5 py-6 md:px-8 md:py-7"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-blue-500 text-white grid place-items-center shadow-md">
                      <FaBriefcase />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        {exp.company}
                      </p>
                      <h3 className="mt-0.5 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                        {exp.role}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm md:text-[15px] text-slate-600 dark:text-slate-200">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:pt-1">
                  <div
                    className=" inline-flex items-center gap-2
    rounded-full border border-slate-200 dark:border-slate-700
    bg-slate-50 dark:bg-slate-900
    px-5 py-2
    text-xs md:text-sm
    text-slate-600 dark:text-slate-200
    whitespace-nowrap"
                  >
                    <FaRegCalendarAlt className="text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
