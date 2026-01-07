"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ========= Types ========= */

type TechBar = {
  label: string;
  value: number; // pourcentage
};

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[]; // tags affichés sur la carte
  tags: string[]; // pour le filtre (ex: ["react", "typescript"])
  techBars?: TechBar[]; // pour la modal
  gallery?: string[]; // captures d’écran pour la modal
  githubLink?: string;
  liveLink?: string;
};

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

type CircleIconBtnProps = {
  href: string;
  label: string;
  children: ReactNode;
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

/* ========= Filtres (tags du haut) ========= */

const FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "react", label: "react" },
  { key: "html", label: "html" },
  { key: "css", label: "css" },
  { key: "js", label: "js" },
  { key: "react-native", label: "react native" },
  { key: "typescript", label: "typescript" },
  { key: "nodejs", label: "nodejs" },
  { key: "api", label: "api" },
  { key: "java", label: "java" },
  { key: "mysql", label: "mysql" },
  { key: "mongodb", label: "mongodb" },
  { key: "postgresql", label: "postgresql" },
  { key: "expo", label: "expo" },
  { key: "redux", label: "redux" },
];

/* ========= Données projets ========= */

const PROJECTS: Project[] = [
  {
    id: "manageo",
    title: "Manageo",
    description:
      "Application mobile de gestion des finances personnelles : suivi des dépenses, budgets et dashboards interactifs.",
    image: "/images/manageo-card.png",
    technologies: ["expo", "redux", "react native"],
    tags: ["react-native", "expo", "redux"],
    techBars: [
      { label: "expo", value: 40 },
      { label: "redux", value: 30 },
      { label: "react native", value: 15 },
    ],
    gallery: [
      "/images/manageo-1.png",
      "/images/manageo-2.png",
      "/images/manageo-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "vault-my-password",
    title: "Vault My Password",
    description:
      "Application mobile de gestion de mots de passe sécurisée avec organisation par catégories et options d’export.",
    image: "/images/vault-card.png",
    technologies: ["expo", "redux", "react native"],
    tags: ["react-native", "expo", "redux"],
    techBars: [
      { label: "expo", value: 40 },
      { label: "redux", value: 30 },
      { label: "react native", value: 15 },
    ],
    gallery: [
      "/images/vault-1.png",
      "/images/vault-2.png",
      "/images/vault-3.png",
      "/images/vault-4.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio (version Windows 10)",
    description:
      "Ancien portfolio présentant tes projets et compétences sur un design inspiré d’un environnement Windows 10.",
    image: "/images/portfolio-win-card.png",
    technologies: ["html", "css", "js"],
    tags: ["html", "css", "js"],
    techBars: [
      { label: "html", value: 40 },
      { label: "css", value: 35 },
      { label: "javascript", value: 25 },
    ],
    gallery: [
      "/images/portfolio-win-1.png",
      "/images/portfolio-win-2.png",
      "/images/portfolio-win-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03/portfolio_dev",
    liveLink: "#",
  },
  {
    id: "spendy",
    title: "Spendy — Gestion des finances personnelles",
    description:
      "Application full-stack pour gérer revenus, dépenses, budgets et statistiques avec sécurisation JWT.",
    image: "/images/spendy-card.png",
    technologies: ["React", "Spring Boot", "MySQL", "MongoDB", "JWT"],
    tags: ["react", "api", "java", "mysql", "mongodb"],
    techBars: [
      { label: "React", value: 35 },
      { label: "Spring Boot", value: 35 },
      { label: "MySQL / MongoDB", value: 30 },
    ],
    gallery: [
      "/images/spendy-1.png",
      "/images/spendy-2.png",
      "/images/spendy-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03/backend-spendy",
    liveLink: "https://spendy-front-klbm.vercel.app",
  },
  {
    id: "jiamini",
    title: "JIAMINI — Plateforme éducative immersive",
    description:
      "Application éducative interactive avec globe 3D, quiz par matière et niveau, et espace élève.",
    image: "/images/jiamini-card.png",
    technologies: ["React Native", "Spring Boot", "PostgreSQL"],
    tags: ["react-native", "api", "java", "postgresql"],
    techBars: [
      { label: "React Native", value: 40 },
      { label: "Spring Boot", value: 35 },
      { label: "PostgreSQL", value: 25 },
    ],
    gallery: [
      "/images/jiamini-1.png",
      "/images/jiamini-2.png",
      "/images/jiamini-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03/Jiamini-API",
  },
  {
    id: "mindia",
    title: "Mindia — Quiz IA personnalisés",
    description:
      "Application web qui génère des quiz personnalisés en temps réel à partir d’un sujet et d’un niveau choisis.",
    image: "/images/mindia-card.png",
    technologies: ["Next.js", "TypeScript", "API"],
    tags: ["react", "typescript", "api"],
    techBars: [
      { label: "Next.js / React", value: 40 },
      { label: "TypeScript", value: 35 },
      { label: "API / IA", value: 25 },
    ],
    gallery: [
      "/images/mindia-1.png",
      "/images/mindia-2.png",
      "/images/mindia-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03/Mindia",
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline AWS (Batch ETL)",
    description:
      "Pipeline de données batch de bout-en-bout : ingestion, transformation, stockage et requêtes analytiques.",
    image: "/images/DataPipeline.png",
    technologies: ["AWS S3", "Python", "Airflow", "Athena"],
    tags: ["python", "api"],
    techBars: [
      { label: "Airflow", value: 40 },
      { label: "AWS S3 / Athena", value: 35 },
      { label: "Python", value: 25 },
    ],
    gallery: ["/images/datapipeline-1.png", "/images/datapipeline-2.png"],
    githubLink: "https://github.com/Hapssatou03/transactions",
  },
  {
    id: "filmeo",
    title: "FILMEO — Catalogue de films & trailers",
    description:
      "Plateforme de type streaming avec recherche, catégories, fiches détaillées et bandes-annonces.",
    image: "/images/filmeo-card.png",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    tags: ["java", "mysql"],
    techBars: [
      { label: "Spring Boot", value: 40 },
      { label: "Thymeleaf", value: 30 },
      { label: "MySQL", value: 30 },
    ],
    gallery: [
      "/images/filmeo-1.png",
      "/images/filmeo-2.png",
      "/images/filmeo-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03/Filmeo_Streaming",
  },
  {
    id: "eclat-solidaire",
    title: "Éclat Solidaire",
    description:
      "Plateforme solidaire pour connecter associations, bénévoles et bénéficiaires avec gestion des projets et dons.",
    image: "/images/eclat-solidaire.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["react", "nodejs", "mongodb", "api"],
    techBars: [
      { label: "React", value: 35 },
      { label: "Node / Express", value: 35 },
      { label: "MongoDB", value: 30 },
    ],
    gallery: [
      "/images/eclat-1.png",
      "/images/eclat-2.png",
      "/images/eclat-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03/eclat_solidaire",
    liveLink: "https://eclat-solidaire.vercel.app",
  },
];

/* ========= Page Mes Projets ========= */

const ProjectsClient: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = PROJECTS.filter((p) =>
    activeFilter === "all" ? true : p.tags.includes(activeFilter)
  );

  const visibleProjects = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projets" className="py-16 sm:py-20 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Mes Projets
          </h2>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => {
                setActiveFilter(filter.key);
                setShowAll(false);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-[#2563eb] to-[#38bdf8] text-white shadow-lg"
                  : "bg-[#0f172a] text-slate-200 hover:bg-[#1e293b]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Bouton */}
        {filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg transition"
            >
              {showAll ? "Afficher moins de projets" : "Voir tous mes projets"}
            </button>
          </div>
        )}
      </div>

      {/* Modal projet */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ========= Carte Projet ========= */

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { title, description, image, technologies, githubLink, liveLink } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className="group cursor-pointer bg-[#0b1120] rounded-2xl ring-1 ring-white/5 overflow-hidden hover:-translate-y-1 transition-transform shadow-lg shadow-black/40"
    >
      {/* Image */}
      <div className="relative">
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={image}
            alt={`Illustration du projet ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Boutons Github / Live */}
        <div className="absolute left-4 bottom-4 z-20 flex gap-3">
          {githubLink && (
            <CircleIconBtn href={githubLink} label="Code source">
              <FaGithub className="text-lg" />
            </CircleIconBtn>
          )}
          {liveLink && liveLink !== "#" && (
            <CircleIconBtn href={liveLink} label="Voir le projet">
              <FaExternalLinkAlt className="text-lg" />
            </CircleIconBtn>
          )}
        </div>

        {/* Tags techno sur l'image */}
        <div className="absolute right-4 bottom-4 z-20 flex flex-wrap justify-end gap-1.5 max-w-[70%]">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/85 dark:bg-black/60 text-gray-900 dark:text-gray-50 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Contenu texte */}
      <div className="p-6 sm:p-7">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

/* ========= Bouton rond (icônes) ========= */

const CircleIconBtn: React.FC<CircleIconBtnProps> = ({
  href,
  label,
  children,
}) => {
  const isGithub = href.includes("github.com");
  const iconColor = isGithub ? "text-slate-900" : "text-[#2563eb]";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className={`grid place-items-center w-10 h-10 rounded-full bg-white text-xl ${iconColor} ring-1 ring-black/20 shadow-md hover:shadow-lg hover:bg-gradient-to-br hover:from-[#2563eb] hover:to-[#38bdf8] hover:text-white transition duration-300`}
    >
      {children}
    </Link>
  );
};

/* ========= Modal projet ========= */

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl max-h-[85vh] bg-slate-900 text-slate-50 rounded-3xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.96, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header modal */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/5">
          <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl"
          >
            ×
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="px-6 sm:px-8 py-6 space-y-8 overflow-y-auto max-h-[75vh]">
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-200">
            {project.description}
          </p>

          {/* Tech bars */}
          {project.techBars && project.techBars.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Technologies utilisées
              </h4>
              <div className="space-y-4">
                {project.techBars.map((t) => (
                  <div key={t.label}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="text-gray-200">{t.label}</span>
                      <span className="text-[#38bdf8]">{t.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8]"
                        style={{ width: `${t.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {project.technologies.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Captures d’écran */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Captures d&apos;écran
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((src, i) => (
                  <div
                    key={src + i}
                    className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-slate-800"
                  >
                    <Image
                      src={src}
                      alt={`Capture ${i + 1} - ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsClient;
