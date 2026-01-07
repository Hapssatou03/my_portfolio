"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaArrowLeft,
} from "react-icons/fa";

/* ========= Types ========= */

type TechBar = {
  label: string;
  value: number;
};

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags: string[];
  techBars?: TechBar[];
  gallery?: string[];
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
  { key: "python", label: "python" },
  { key: "php", label: "php" },
];


/* ========= Données projets ========= */

const PROJECTS: Project[] = [
  {
    id: "caresync",
    title: "CareSync",
    description:
      "Application de self-tracking orientée bien-être permettant de suivre le sommeil, l’humeur, les habitudes quotidiennes et d’afficher des tendances via un moteur d’analyse.",
    image: "/images/caresync-card.png",
    technologies: ["react", "next.js", "tailwind", "charts"],
    tags: ["react", "typescript", "data", "ux"],
    techBars: [
      { label: "Frontend React / Next.js", value: 40 },
      { label: "UX / UI & Design System", value: 30 },
      { label: "Data / Analytics", value: 30 },
    ],
    gallery: [
      "/images/caresync-1.png",
      "/images/caresync-2.png",
      "/images/caresync-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "recettio",
    title: "Recettio",
    description:
      "Application mobile de gestion de recettes permettant de créer, organiser et retrouver facilement ses plats favoris, avec gestion des ingrédients et filtrage par catégories.",
    image: "/images/recettio-card.png",
    technologies: ["expo", "react native", "redux"],
    tags: ["react-native", "expo", "redux"],
    techBars: [
      { label: "Expo", value: 40 },
      { label: "React Native", value: 35 },
      { label: "Redux / State", value: 25 },
    ],
    gallery: [
      "/images/recettio-1.png",
      "/images/recettio-2.png",
      "/images/recettio-3.png",
      "/images/recettio-4.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "spendy",
    title: "Spendy",
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
    title: "JIAMINI ",
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
    title: "Mindia ",
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
    id: "my-todo",
    title: "My Todo ",
    description:
      "Application web permettant d’organiser ses tâches quotidiennes : ajout, édition, suppression, filtrage par statut et persistance des données.",
    image: "/images/mytodo-card.png",
    technologies: ["React", "TypeScript", "LocalStorage"],
    tags: ["react", "typescript", "js"],
    techBars: [
      { label: "React", value: 40 },
      { label: "TypeScript", value: 35 },
      { label: "State & Storage", value: 25 },
    ],
    gallery: [
      "/images/mytodo-1.png",
      "/images/mytodo-2.png",
      "/images/mytodo-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
    liveLink: "#",
  },
  {
    id: "filmeo",
    title: "FILMEO ",
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
  {
    id: "shoply",
    title: "Shoply",
    description:
      "Application web e-commerce permettant de parcourir un catalogue de produits, gérer un panier persistant, passer une commande et administrer les produits côté back-office.",
    image: "/images/shoply-card.png",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    tags: ["react", "nodejs", "api", "mongodb"],
    techBars: [
      { label: "Frontend React", value: 40 },
      { label: "Backend API / Auth", value: 35 },
      { label: "MongoDB & Data", value: 25 },
    ],
    gallery: [
      "/images/shoply-1.png",
      "/images/shoply-2.png",
      "/images/shoply-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "quizmaster-ai",
    title: "QuizMaster AI ",
    description:
      "Application web pédagogique permettant de générer des quiz par thème et niveau, avec score final, correction détaillée et historique des séances.",
    image: "/images/quizmaster-card.png",
    technologies: ["Next.js", "TypeScript", "API"],
    tags: ["react", "typescript", "api"],
    techBars: [
      { label: "Next.js / React", value: 40 },
      { label: "TypeScript", value: 35 },
      { label: "Quiz Engine / Logic", value: 25 },
    ],
    gallery: [
      "/images/quizmaster-1.png",
      "/images/quizmaster-2.png",
      "/images/quizmaster-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "readly",
    title: "Readly ",
    description:
      "Application mobile permettant de suivre sa progression de lecture, définir des objectifs mensuels, enregistrer ses livres et consulter des statistiques d’évolution.",
    image: "/images/readly-card.png",
    technologies: ["Expo", "React Native", "AsyncStorage"],
    tags: ["react-native", "expo"],
    techBars: [
      { label: "React Native", value: 45 },
      { label: "Expo", value: 35 },
      { label: "State & Storage", value: 20 },
    ],
    gallery: [
      "/images/readly-1.png",
      "/images/readly-2.png",
      "/images/readly-3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "snake-python",
    title: "Snake ",
    description:
      "Jeu rétro développé en Python jouable dans le terminal : le serpent se déplace dans une grille, mange des pommes pour grandir et le joueur doit éviter les murs et son propre corps.",
    image: "/images/snake-card.png",
    technologies: ["Python", "Curses", "Algorithmes"],
    tags: ["python", "jeu", "terminal"],
    techBars: [
      { label: "Python", value: 50 },
      { label: "Logique de jeu", value: 30 },
      { label: "Structures de données", value: 20 },
    ],
    gallery: ["/images/snake-1.png", "/images/snake-2.png"],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "mot-mystere",
    title: "Mot Mystère — Jeu d’énigme en Python",
    description:
      "Jeu d’énigme en ligne de commande inspiré du pendu : un mot secret est choisi aléatoirement et le joueur doit le deviner lettre par lettre avec un nombre limité de tentatives.",
    image: "/images/motmystere-card.png",
    technologies: ["Python", "Fichiers texte", "Algorithmes"],
    tags: ["python", "jeu", "console"],
    techBars: [
      { label: "Python", value: 50 },
      { label: "Manipulation de chaînes", value: 30 },
      { label: "Gestion des fichiers", value: 20 },
    ],
    gallery: ["/images/motmystere-1.png", "/images/motmystere-2.png"],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "booktrack",
    title: "BookTrack ",
    description:
      "Application PHP permettant de gérer une bibliothèque : ajout de livres, gestion des utilisateurs, suivi des emprunts et retours, avec interface d’administration.",
    image: "/images/booktrack-card.png",
    technologies: ["PHP", "MySQL", "MVC"],
    tags: ["php", "mysql", "crud"],
    techBars: [
      { label: "PHP", value: 45 },
      { label: "Base de données", value: 35 },
      { label: "Architecture MVC", value: 20 },
    ],
    gallery: ["/images/booktrack-1.png", "/images/booktrack-2.png"],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "eventify",
    title: "Eventify ",
    description:
      "Application PHP permettant de créer des événements, gérer les inscriptions des participants et suivre le nombre de places restantes, avec interface d’administration.",
    image: "/images/eventify-card.png",
    technologies: ["PHP", "MySQL", "Sessions"],
    tags: ["php", "mysql", "gestion"],
    techBars: [
      { label: "PHP", value: 45 },
      { label: "Logique métier", value: 30 },
      { label: "Gestion utilisateurs", value: 25 },
    ],
    gallery: ["/images/eventify-1.png", "/images/eventify-2.png"],
    githubLink: "https://github.com/Hapssatou03",
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
];

/* ========= Page Mes Projets ========= */

const ProjectsClient: React.FC = () => {
  const pathname = usePathname();
  const isFullPage = pathname === "/projets"; // /projets = vue complète

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = PROJECTS.filter((p) =>
    activeFilter === "all" ? true : p.tags.includes(activeFilter)
  );
  const visibleProjects = isFullPage ? filtered : filtered.slice(0, 6);

  return (
    <section id="projets" className="py-20 sm:py-24 bg-[#182a44]/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isFullPage && (
          <div className="mb-8">
            <Link
              href="/"
              className="
                inline-flex items-center gap-2
                px-6 py-2.5
                rounded-full
                bg-gradient-to-r from-[#2563eb] to-[#38bdf8]
                text-white
                text-sm sm:text-base
                shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                hover:brightness-110
                transition
              "
            >
              <FaArrowLeft className="text-sm" />
              <span>Retour à l&apos;accueil</span>
            </Link>
          </div>
        )}

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            {isFullPage ? "Tous mes projets" : "Mes Projets"}
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
              onClick={() => setActiveFilter(filter.key)}
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

        {!isFullPage && filtered.length > 6 && (
          <div className="mt-16 text-center">
            <Link
              href="/projets"
              className="
        inline-flex items-center justify-center
        px-10 py-3
        rounded-full
        bg-gradient-to-r from-[#2563eb] to-[#06b6d4]
        text-white
        text-sm sm:text-base font-semibold
        shadow-[0_18px_40px_rgba(0,0,0,0.65)]
        hover:brightness-110
        transition
      "
            >
              Voir tous mes projets
            </Link>
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
  const { title, description, image, technologies, tags } = project;

  const primaryTags = tags.slice(0, 3);
  const extraCount = tags.length - primaryTags.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className="
        group cursor-pointer
        flex flex-col
        rounded-3xl
        bg-[#0b1628]
        border border-white/8
        shadow-[0_22px_55px_rgba(0,0,0,0.75)]
        overflow-hidden
        h-[460px]
        hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.9)]
        transition-transform duration-300
      "
    >
      <div className="relative w-full h-56 overflow-hidden bg-slate-900">
        <Image
          src={image}
          alt={`Illustration du projet ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>

      <div className="flex-1 px-7 pt-6 pb-5 bg-gradient-to-b from-[#0b1628] to-[#020816]">
        {/* Titre */}
        <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
          {title}
        </h3>

        <div className="mt-2 text-slate-300 text-lg" />

        {/* Description */}
        <p className="mt-2 text-sm sm:text-base text-slate-200 line-clamp-3">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  inline-flex items-center gap-1
                  rounded-full
                  bg-[#020617]
                  border border-white/10
                  px-3 py-1
                  text-xs font-medium text-slate-100
                "
              >
                <span className="text-[10px]">🏷</span>
                {tech}
              </span>
            ))}
          </div>
        )}

        {primaryTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryTags.map((tag) => (
              <span
                key={tag}
                className="
                  inline-flex items-center
                  rounded-full
                  bg-[#020617]
                  px-3 py-1
                  text-xs font-semibold
                  text-slate-100
                "
              >
                {tag}
              </span>
            ))}

            {extraCount > 0 && (
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  bg-[#020617]
                  px-3 py-1
                  text-xs font-semibold
                  text-slate-100
                "
              >
                +{extraCount}
              </span>
            )}
          </div>
        )}
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

        <div className="px-6 sm:px-8 py-6 space-y-8 overflow-y-auto max-h-[75vh]">
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-200">
            {project.description}
          </p>

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
