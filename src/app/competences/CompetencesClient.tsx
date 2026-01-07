"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCubes,
  FaDatabase,
  FaTools,
  FaPencilAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function CompetencesClient() {
  return (
    <section
      id="competences"
      className="relative py-20 md:py-24 bg-slate-50 text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            Compétences
          </h2>
          
        </motion.div>

        {/* Cartes principales */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Langages */}
          <TechCard
            variants={item}
            icon={
              <FaCode className="text-xl" />
            }
            iconGradient="from-blue-500 to-sky-400"
            title="Langages"
            chips={[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "PHP",
              "Java",
              "Python",
              "SQL",
              "NoSQL",
            ]}
          />

          {/* Frameworks & Libraries */}
          <TechCard
            variants={item}
            icon={<FaCubes className="text-xl" />}
            iconGradient="from-emerald-500 to-teal-400"
            title="Frameworks & Libraries"
            chips={[
              "React",
              "Next.js",
              "Spring",
              "Symfony",
              "Node.js",
              "React Native",
              "Expo",
            ]}
          />

          {/* Bases de données */}
          <TechCard
            variants={item}
            icon={<FaDatabase className="text-xl" />}
            iconGradient="from-orange-500 to-amber-400"
            title="Bases de données"
            chips={["MySQL", "MongoDB", "PostgreSQL"]}
          />

          {/* Outils & DevOps */}
          <TechCard
            variants={item}
            icon={<FaTools className="text-xl" />}
            iconGradient="from-pink-500 to-rose-400"
            title="Outils & DevOps"
            chips={["Git", "Docker", "VS Code", "IntelliJ", "Eclipse", "Monday", "Jira", "Trello"]}
          />

          {/* Architectures */}
          <TechCard
            variants={item}
            icon={<FaProjectDiagram className="text-xl" />}
            iconGradient="from-purple-500 to-violet-400"
            title="Architectures"
            chips={["Hexagonale", "DDD", "MVC"]}
          />

           {/* Conception UX */}
        <TechCard
          variants={item}
          icon={<FaPencilAlt className="text-xl" />}
          iconGradient="from-indigo-500 to-sky-400"
          title="Conception UX"
          chips={[
            "UML",
            "Merise",
            "Figma",
            "Wireframes & maquettes",
          ]}
        />
        </motion.div>

        {/* Méthodologies */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="rounded-3xl bg-slate-900 text-slate-50 px-6 py-7 md:px-10 md:py-8 shadow-xl shadow-slate-300/40">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Méthodologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Agile Scrum", "API Integration", "Tests unitaires & E2E"].map(
                (m) => (
                  <span
                    key={m}
                    className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium shadow-sm"
                  >
                    {m}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Sous-composant carte ---------- */

type TechCardProps = {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  chips: string[];
  variants?: any;
};

function TechCard({ icon, iconGradient, title, chips, variants }: TechCardProps) {
  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/60 px-6 py-6 md:py-7 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`h-11 w-11 rounded-2xl grid place-items-center text-white shadow-md bg-gradient-to-tr ${iconGradient}`}
        >
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-sm font-medium text-slate-700"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
