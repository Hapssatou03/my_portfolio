"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi2";

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
    id: "spendy",
    title: "Spendy",
    description:
      "Spendy est une application de gestion de dépenses développée dans le cadre de la soutenance de mon Master. Conçue avec une architecture MVC et N-Tiers, la première version permet l’ajout de revenus et de dépenses, le calcul automatique des dépenses par rapport aux revenus, ainsi que leur visualisation à l’aide de graphiques interactifs.",
    image: "/images/spendy/home-page.png",
    technologies: ["React", "Spring Boot", "MySQL", "MongoDB", "JWT"],
    tags: ["react", "api", "java", "mysql", "mongodb"],
    techBars: [
      { label: "React", value: 35 },
      { label: "Spring Boot", value: 35 },
      { label: "MySQL / MongoDB", value: 30 },
    ],
    gallery: [
      "/images/spendy/home-page.png",
      "/images/spendy/connexion-page.png",
      "/images/spendy/dashboard.png",
      "/images/spendy/page-profil.png",
      "/images/spendy/page-modif.png",
    ],
    githubLink: "https://github.com/Hapssatou03/backend-spendy",
    liveLink: "https://spendy-front-klbm.vercel.app",
  },

  {
    id: "caresync",
    title: "CareSync",
    description:
      "CareSync est une application de self-tracking du bien-être, conçue pour aider les utilisateurs à mieux comprendre leur état quotidien grâce à des check-ins simples et à un score de bien-être explicable, dans une approche respectueuse des données personnelles.",
    image: "/images/caresync/princpal-image.png",
    technologies: ["react", "java", "tailwind", "python", "charts"],
    tags: ["react", "typescript", "data", "ux"],
    techBars: [
      { label: "Frontend React / Next.js", value: 40 },
      { label: "UX / UI & Design System", value: 30 },
      { label: "python / Data", value: 20 },
      { label: "Data / Analytics", value: 30 },
    ],
    gallery: [
      "/images/caresync/dashboard-careSync.png",
      "/images/caresync/register-caresync.png",
      "/images/caresync/login-caresync.png",
      "/images/caresync/how-are-you-doing.png",
      "/images/caresync/princpal-image.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "recettio",
    title: "Recettio",
    description:
      "Recettio est une application mobile de recettes intelligentes conçue pour accompagner les utilisateurs au quotidien. Elle propose des recettes personnalisées en fonction du temps disponible, du budget et des préférences alimentaires, avec une expérience mobile fluide, intuitive et apaisante.",
    image: "/images/recettio/recettio.png",
    technologies: ["expo", "react native", "redux"],
    tags: ["react-native", "expo", "redux"],
    techBars: [
      { label: "Expo", value: 40 },
      { label: "React Native", value: 35 },
      { label: "Redux / State", value: 25 },
    ],
    gallery: [
      "/images/recettio/recettio.png",
      "/images/recettio/",
      "/images/recettio/",
      "/images/recettio/",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },

  {
    id: "jiamini",
    title: "JIAMINI ",
    description:
      "Jiamini est une application éducative interactive dédiée aux élèves, conçue pour apprendre de manière ludique grâce à des quiz personnalisés par matière et niveau scolaire.",
    image: "/images/jiamini/jiamini-home.png",
    technologies: ["React Native", "Spring Boot", "PostgreSQL"],
    tags: ["react-native", "api", "java", "postgresql"],
    techBars: [
      { label: "React Native", value: 40 },
      { label: "Spring Boot", value: 35 },
      { label: "PostgreSQL", value: 25 },
    ],
    gallery: [
      "/images/jiamini/jiamini-home.png",
      "/images/jiamini/jiamini_espace_student.png",
      "/images/jiamini/jiamini_quiz_1.png",
      "/images/jiamini/jiamini-choix-personnage.png",
      "/images/jiamini/choice_level_quiz.png",
    ],
    githubLink: "https://github.com/Hapssatou03/Jiamini-API",
  },
  {
    id: "mindia",
    title: "Mindia ",
    description:
      "Mindia est une application web qui génère des quiz personnalisés en temps réel à partir d’un sujet et d’un niveau choisis.",
    image: "/images/mindia/mindia.png",
    technologies: ["Next.js", "TypeScript", "API"],
    tags: ["react", "typescript", "api"],
    techBars: [
      { label: "Next.js / node js", value: 40 },
      { label: "TypeScript", value: 35 },
      { label: "API / IA", value: 25 },
    ],
    gallery: [
      "/images/mindia/mindia.png",
      "/images/mindia/login.png",
      "/images/mindia/Register.png",
      "/images/mindia/Setting.png",
      "/images/mindia/userProfil.png",
      "/images/mindia/ChoiceQuiz.png",
    ],
    githubLink: "https://github.com/Hapssatou03/Mindia",
  },
  {
    id: "eclat-solidaire",
    title: "Éclat Solidaire",
    description:
      "Plateforme solidaire pour connecter associations, bénévoles et bénéficiaires avec gestion des projets et dons.",
    image: "/images/eclat_solidaire/eclat-1.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["react", "nodejs", "mongodb", "api"],
    techBars: [
      { label: "React", value: 35 },
      { label: "Node / Express", value: 35 },
      { label: "MongoDB", value: 30 },
    ],
    gallery: [
      "/images/eclat_solidaire/eclat-1.png",
      "/images/eclat_solidaire/eclat-2.png",
      "/images/eclat_solidaire/eclat-3.png",
      "/images/eclat_solidaire/eclat-4.png",
      "/images/eclat_solidaire/eclat-5.png",
      "/images/eclat_solidaire/eclat-6.png",
    ],
    githubLink: "https://github.com/Hapssatou03/eclat_solidaire",
    liveLink: "https://eclat-solidaire.vercel.app",
  },
  {
    id: "filmeo",
    title: "FILMEO ",
    description:
      "Filmeo est une plateforme de streaming développée avec Spring Boot et Thymeleaf, permettant aux utilisateurs de parcourir, visionner et gérer des vidéos en ligne de manière fluide et sécurisée. Elle ",
    image: "/images/filmeo/filmeo1.png",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    tags: ["java", "mysql"],
    techBars: [
      { label: "Spring Boot", value: 40 },
      { label: "Thymeleaf", value: 30 },
      { label: "MySQL", value: 30 },
    ],
    gallery: [
      "/images/filmeo/filmeo1.png",
      "/images/filmeo/filmeo2.png",
      "/images/filmeo/filmeo3.png",
      "/images/filmeo/filmeo4.png",
      "/images/filmeo/filmeo5.png",
      "/images/filmeo/filmeo6.png",
    ],
    githubLink: "https://github.com/Hapssatou03/Filmeo_Streaming",
  },
  {
    id: "my-todo",
    title: "My Todo ",
    description:
      "Application web permettant d’organiser ses tâches quotidiennes : ajout, édition, suppression, filtrage par statut et persistance des données.",
    image: "/images/mytodo/mytodo.png",
    technologies: ["React", "TypeScript", "LocalStorage"],
    tags: ["react", "typescript", "js"],
    techBars: [
      { label: "React", value: 40 },
      { label: "TypeScript", value: 35 },
      { label: "State & Storage", value: 25 },
    ],
    gallery: [
      "/images/mytodo/mytodo1.png",
      "/images/mytodo/mytodo2.png",
      "/images/mytodo/mytodo3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
    liveLink: "#",
  },
  {
    id: "shoply",
    title: "Shoply",
    description:
      "Shoply est une plateforme e-commerce dédiée à la revente d’articles d’occasion, pensée pour encourager une consommation plus responsable et durable. L’application permet aux utilisateurs de vendre facilement les articles qu’ils n’utilisent plus et d’acheter des produits de seconde main en toute sécurité.",
    image: "/images/shoply/shoply.png",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    tags: ["react", "nodejs", "api", "mongodb"],
    techBars: [
      { label: "Frontend React", value: 40 },
      { label: "Backend API / Auth", value: 35 },
      { label: "MongoDB & Data", value: 25 },
    ],
    gallery: [
      "/images/shoply/shoply1.png",
      "/images/shoply/shoply2.png",
      "/images/shoply/shoply3.png",
      "/images/shoply/shoply4.png",
      "/images/shoply/shoply5.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "Juste prix",
    title: "Juste prix ",
    description:
      " Le Juste Prix est un mini-jeu web interactif inspiré du célèbre concept télévisé. Le joueur doit deviner le prix exact d’un produit en un nombre limité d’essais, avec des indices dynamiques indiquant si le prix est plus haut ou plus bas. L’interface est moderne, ludique et responsive, offrant une expérience fluide et addictive. Ce projet met en avant la logique métier, la gestion d’état côté frontend et le design UI orienté jeu.",
    image: "/images/juste_prix/juste_prix1.png",
    technologies: ["js", "HTML", "CSS", "API"],
    tags: ["react", "typescript", "api"],
    techBars: [
      { label: "JS / HTML", value: 40 },
      { label: "JS", value: 35 },
      { label: "Quiz Engine / Logic", value: 25 },
    ],
    gallery: [
      "/images/juste_prix/juste_prix1.png",
      "/images/juste_prix/juste_prix2.png",
      "/images/juste_prix/juste_prix3.png",
      "/images/juste_prix/juste_prix4.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "readly",
    title: "Readly ",
    description:
      "Readly est une application mobile de suivi de lecture qui permet aux utilisateurs d’enregistrer leurs livres, suivre leur progression page par page, définir des objectifs mensuels et visualiser leurs statistiques d’évolution. L’app offre une expérience simple et motivante pour garder une routine de lecture régulière, mesurer ses progrès et rester organisé dans ses lectures.",
    image: "/images/readly/readly.png",
    technologies: ["Expo", "React Native", "AsyncStorage"],
    tags: ["react-native", "expo"],
    techBars: [
      { label: "React Native", value: 45 },
      { label: "Expo", value: 35 },
      { label: "State & Storage", value: 20 },
    ],
    gallery: [
      "/images/readly/register.png",
      "/images/readly/login.png",
      "/images/readly/readly3.jpeg",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  {
    id: "snake-python",
    title: "Snake ",
    description:
      "Jeu rétro développé en Python jouable dans le terminal : le serpent se déplace dans une grille, mange des pommes pour grandir et le joueur doit éviter les murs et son propre corps.",
    image: "/images/snake/snake.jpeg",
    technologies: ["Python", "Curses", "Algorithmes"],
    tags: ["python", "jeu", "terminal"],
    techBars: [
      { label: "Python", value: 50 },
      { label: "Logique de jeu", value: 30 },
      { label: "Structures de données", value: 20 },
    ],
    gallery: [
      "/images/snake/snake.jpeg",
      "/images/snake/snake2.png",
      "/images/snake/snake3.png",
    ],
    githubLink: "https://github.com/Hapssatou03",
  },
  // {
  //   id: "mot-mystere",
  //   title: "Mot Mystère — Jeu d’énigme en Python",
  //   description:
  //     "Snake Game est un jeu 2D développé en Python qui revisite le célèbre jeu du serpent avec une interface moderne et intuitive. Le joueur contrôle un serpent qui évolue sur une grille, collecte des pommes pour augmenter son score et doit éviter les collisions avec les murs et son propre corps. Ce projet met en avant la gestion des événements, la logique de jeu temps réel, ainsi que la structuration du code orientée objet, avec une attention particulière portée à l’expérience utilisateur et au design.",
  //   image: "/images/motmystere-card.png",
  //   technologies: ["Python", "Fichiers texte", "Algorithmes"],
  //   tags: ["python", "jeu", "console"],
  //   techBars: [
  //     { label: "Python", value: 50 },
  //     { label: "Manipulation de chaînes", value: 30 },
  //     { label: "Gestion des fichiers", value: 20 },
  //   ],
  //   gallery: ["/images/snake/snake.png", "/images/snake/snake2.png"],
  //   githubLink: "https://github.com/Hapssatou03",
  // },
  // {
  //   id: "booktrack",
  //   title: "BookTrack ",
  //   description:
  //     "Application PHP permettant de gérer une bibliothèque : ajout de livres, gestion des utilisateurs, suivi des emprunts et retours, avec interface d’administration.",
  //   image: "/images/booktrack-card.png",
  //   technologies: ["PHP", "MySQL", "MVC"],
  //   tags: ["php", "mysql", "crud"],
  //   techBars: [
  //     { label: "PHP", value: 45 },
  //     { label: "Base de données", value: 35 },
  //     { label: "Architecture MVC", value: 20 },
  //   ],
  //   gallery: ["/images/booktrack-1.png", "/images/booktrack-2.png"],
  //   githubLink: "https://github.com/Hapssatou03",
  // },
  // {
  //   id: "eventify",
  //   title: "Eventify ",
  //   description:
  //     "Application PHP permettant de créer des événements, gérer les inscriptions des participants et suivre le nombre de places restantes, avec interface d’administration.",
  //   image: "/images/eventify-card.png",
  //   technologies: ["PHP", "MySQL", "Sessions"],
  //   tags: ["php", "mysql", "gestion"],
  //   techBars: [
  //     { label: "PHP", value: 45 },
  //     { label: "Logique métier", value: 30 },
  //     { label: "Gestion utilisateurs", value: 25 },
  //   ],
  //   gallery: ["/images/eventify-1.png", "/images/eventify-2.png"],
  //   githubLink: "https://github.com/Hapssatou03",
  // },
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
    gallery: [],
    githubLink: "https://github.com/Hapssatou03/transactions",
  },
];

/* ========= Page Mes Projets ========= */

const ProjectsClient: React.FC = () => {
  const pathname = usePathname();
  const isFullPage = pathname === "/projets";

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
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_22px_55px_rgba(0,0,0,0.65)]
        overflow-hidden
        h-[460px]
        hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.85)]
        transition-all duration-300
        text-slate-50
      "
    >
      <div className="relative w-full h-56 overflow-hidden rounded-t-3xl bg-slate-900">
        <Image
          src={image}
          alt={`Illustration du projet ${title}`}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={project.id === "spendy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020816]/90 via-[#020816]/20 to-transparent pointer-events-none" />
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
    inline-flex items-center gap-2
    rounded-full
    bg-[#1e293b]
    border border-white/10
    px-3 py-1
    text-xs font-medium
    text-slate-200
  "
              >
                <HiOutlineTag className="text-[#38bdf8] text-sm" />
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
  const [activeShotIndex, setActiveShotIndex] = useState<number | null>(null);

  const openShot = (i: number) => setActiveShotIndex(i);
  const closeShot = () => setActiveShotIndex(null);

  const showPrev = () => {
    if (!project.gallery || activeShotIndex === null) return;
    setActiveShotIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + project.gallery!.length) % project.gallery!.length
    );
  };

  const showNext = () => {
    if (!project.gallery || activeShotIndex === null) return;
    setActiveShotIndex((prev) =>
      prev === null ? 0 : (prev + 1) % project.gallery!.length
    );
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeShotIndex !== null) closeShot();
        else onClose();
      }

      if (activeShotIndex !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, activeShotIndex, project.gallery]);

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

              {/* Lightbox */}
              <AnimatePresence>
                {activeShotIndex !== null && (
                  <motion.div
                    className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeShot}
                  >
                    <motion.div
                      className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl"
                      initial={{ scale: 0.96, y: 10, opacity: 0 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      exit={{ scale: 0.96, y: 10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* close */}
                      <button
                        type="button"
                        aria-label="Fermer"
                        onClick={closeShot}
                        className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl grid place-items-center"
                      >
                        ×
                      </button>

                      {/* prev */}
                      <button
                        type="button"
                        aria-label="Précédent"
                        onClick={showPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg grid place-items-center"
                      >
                        ‹
                      </button>

                      {/* next */}
                      <button
                        type="button"
                        aria-label="Suivant"
                        onClick={showNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg grid place-items-center"
                      >
                        ›
                      </button>

                      {/* image */}
                      <div className="relative w-full h-[90vh]">
                        <Image
                          src={project.gallery[activeShotIndex]}
                          alt={`Capture ${activeShotIndex + 1} - ${
                            project.title
                          }`}
                          fill
                          className="object-contain p-6"
                          sizes="100vw"
                          priority
                        />
                      </div>

                      {/* counter */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full">
                        {activeShotIndex + 1} / {project.gallery.length}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((src, i) => (
                  <div
                    key={src + i}
                    onClick={() => openShot(i)}
                    className="
            relative w-full
            aspect-[4/5]
            rounded-2xl overflow-hidden
            bg-gradient-to-br from-slate-800/70 to-slate-900/70
            border border-white/10
            shadow-[0_16px_40px_rgba(0,0,0,0.45)]
            cursor-zoom-in
            transition-transform duration-200 hover:scale-[1.01]
          "
                  >
                    <Image
                      src={src}
                      alt={`Capture ${i + 1} - ${project.title}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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
