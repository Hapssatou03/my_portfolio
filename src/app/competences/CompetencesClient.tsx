"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaPencilRuler,
} from "react-icons/fa";

export default function CompetencesClient() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative pt-12 pb-20 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #8731ff 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, #ff2a9d 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <p className="text-sm text-gray-400">Stack & savoir-faire</p> */}
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Compétences techniques
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Un socle solide full-stack, du design au déploiement, avec une
            attention particulière à la sécurité, la performance et l’UX.
          </p>
        </motion.div>

        {/* Grid cartes */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <SkillCard
            variants={item}
            icon={<FaCode className="text-xl" />}
            title="Développement web & mobile"
            bullets={[
              "Frontend : JavaScript, React, React Native, Angular, Vue, Tailwind",
              "Backend : Java, Spring Boot, Hibernate/JPA, Node.js, Express",
            ]}
          />
          <SkillCard
            variants={item}
            icon={<FaServer className="text-xl" />}
            title="Création d’API REST"
            bullets={[
              "Conception & implémentation d’API sécurisées (Spring, Express)",
              "Auth & autorisation : JWT, bonnes pratiques REST",
            ]}
          />
          <SkillCard
            variants={item}
            icon={<FaDatabase className="text-xl" />}
            title="Bases de données"
            bullets={[
              "SQL : PostgreSQL, MySQL • NoSQL : MongoDB",
              "Modélisation, indexation & optimisation des requêtes",
            ]}
          />
          <SkillCard
            variants={item}
            icon={<FaPencilRuler className="text-xl" />}
            title="Conception (UX/UI & Architecture)"
            bullets={[
              "Figma : wireframes, maquettes, design system",
              "UML, user flows, specs & accessibilité",
            ]}
          />
          <SkillCard
            variants={item}
            icon={<FaShieldAlt className="text-xl" />}
            title="Sécurité & Authentification"
            bullets={[
              "JWT, bcrypt, validation de données",
              "Headers, CORS, rate limiting, bonnes pratiques OWASP",
            ]}
          />
          <SkillCard
            variants={item}
            icon={<FaTools className="text-xl" />}
            title="DevOps & Outils"
            bullets={[
              "Docker, GitHub Actions (CI/CD), Git",
              "Monitoring & logs de base, Linux, Nginx",
            ]}
          />
        </motion.div>

        {/* Bandeau différenciant */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md"
        >
          <div
            className="absolute -top-16 -left-10 h-40 w-40 rounded-full blur-2xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, #8731ff 0%, transparent 60%)",
            }}
          />
          <div className="p-8 md:p-10 relative">
            <h3 className="text-2xl font-semibold">Pourquoi me choisir ?</h3>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 grid sm:grid-cols-2 gap-4"
            >
              {[
                
                  {
                    t: "Vision globale : de l’idée à la mise en production",
                    d: "Je conçois, construis et livre des solutions complètes, avec une approche produit axée sur l’impact.",
                  },
                  {
                    t: "Fiabilité & sécurité dès la conception",
                    d: "Qualité du code, bonnes pratiques, sécurité by design et documentation structurée.",
                  },
                  {
                    t: "Performance, scalabilité & UX",
                    d: "Des applications rapides, stables et agréables — pensées pour durer et évoluer.",
                  },
                  {
                    t: "Polyvalence & collaboration",
                    d: "Maîtrise full-stack + data, CI/CD, Cloud, et un vrai sens du travail en équipe.",
                  },
                
              ].map((e, i) => (
                <Bullet key={i} title={e.t} desc={e.d} />
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- UI Parts ---------- */

function SkillCard({
  icon,
  title,
  bullets,
  variants,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  variants?: any;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-5 shadow-card"
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-primary-500/10 ring-1 ring-primary-500/20 text-primary-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-gray-300 leading-relaxed flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary-400/80" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
        Stack évolutive • bonnes pratiques • accessibilité
      </div>
    </motion.div>
  );
}

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-4"
    >
      <div className="mt-1 h-5 w-5 rounded-full grid place-items-center bg-primary-500/15 text-primary-300 ring-1 ring-primary-500/20">
        ✓
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-300">{desc}</p>
      </div>
    </motion.li>
  );
}
