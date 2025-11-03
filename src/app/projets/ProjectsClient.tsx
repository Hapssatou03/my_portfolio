"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ====== Projets Data (données) ====== */
const dataProjects = [
  {
    title: "Data Pipeline AWS (Batch ETL)",
    description:
      "Ingestion → transformation → stockage → requêtes analytiques sur un data lake.",
    image: "/images/DataPipeline.png", 
    technologies: ["AWS S3", "Python", "Airflow", "Athena", "Glue/DBT"],
    features: [
      "DAG Airflow (ingestion & transformation)",
      "Zones Raw / Processed sur S3",
      "Schéma simple de Data Lake",
      "Requêtes analytiques (Athena/SQL)",
    ],
    githubLink: "https://github.com/Hapssatou03/transactions",
    liveLink: "#",
  },
  {
    title: "Streaming Light (Temps réel)",
    description:
      "Flux d’événements en continu, transformation légère et visualisation quasi temps réel.",
    image: "/images/data-streaming.jpg",
    technologies: ["Kafka / Kinesis", "Python", "Streamlit / Metabase"],
    features: [
      "Producers & Consumers",
      "Transformation en stream",
      "Mini dashboard live",
      "Monitoring des topics/streams",
    ],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Data Warehouse & BI",
    description:
      "Modélisation analytique (étoile), tables Fact/Dim et dashboards KPI.",
    image: "/images/data-warehouse.jpg", 
    technologies: ["PostgreSQL", "DBT", "Power BI / Metabase"],
    features: [
      "Modèle en étoile (Star Schema)",
      "Tables Fact / Dimension",
      "Transformations DBT",
      "Dashboards KPI propres",
    ],
    githubLink: "#",
    liveLink: "#",
  },
];

/* =========================
   PAGE: Projects (client)
========================= */
const ProjectsClient = () => {
  return (
    <section id="projects" className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====== PROJETS DATA (au-dessus) ====== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700">
            EN COURS
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
            Projets Data en cours
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Pipelines batch & streaming, modélisation BI et dashboards décisionnels.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {dataProjects.map((p, i) => (
            <ProjectCard key={`data-${i}`} {...p} />
          ))}
        </div>

        {/* ====== PROJETS FULL-STACK (TES PROJETS ACTUELS) ====== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
            Mes projets Full Stack
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            De la conception à la mise en production : une vitrine de projets full-stack qui conjuguent rigueur, design et innovation.
          </p>
        </motion.div>

        {/* ——  —— */}
         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Spendy */}
          <ProjectCard
            title="Spendy"
            description="Application de gestion des finances personnelles avec statistiques automatiques."
            image="/images/spendy.png"
            technologies={["React", "Spring Boot", "MySQL", "MongoDB", "JWT"]}
            features={[
              "API REST sécurisée (JWT, BCrypt)",
              "Gestion revenus/dépenses + budgets",
              "Dashboard et totaux automatiques",
            ]}
            githubLink="https://github.com/Hapssatou03/spendy_backend"
            liveLink="https://spendy-front-klbm.vercel.app"
          />

          {/* Jiamini */}
          <ProjectCard
            title="JIAMINI — Plateforme éducative immersive"
            description="Application éducative interactive permettant aux élèves d’apprendre à travers un globe 3D et des quiz par matières."
            image="/images/jiamini1.png"
            gallery={[
              "/images/jiamini1.png",
              "/images/globe_interactive.png",
              "/images/jiamini_espace_student.png",
              "/images/jiamini_quiz_1.png",
              "/images/choice_level_quiz.png",
            ]}
            technologies={["Next.js", "Three.js", "MongoDB", "Tailwind CSS", "JWT"]}
            features={[
              "Globe 3D interactif pour explorer les contenus",
              "Quiz par matières et niveaux",
              "Espace élève avec progression",
            ]}
            githubLink="https://github.com/Hapssatou03/Jiamini-API"
            liveLink="#"
          />

          {/* Éclat Solidaire */}
          <ProjectCard
            title="Éclat Solidaire"
            description="Plateforme solidaire pour connecter associations, bénévoles et bénéficiaires, avec gestion des projets et des dons."
            image="/images/eclat-solidaire.png"
            technologies={["React", "Node.js", "Express", "MongoDB"]}
            features={[
              "Espace projets associatifs et suivi",
              "Gestion des bénévoles et des dons",
              "UI simple et accessible",
            ]}
            githubLink="https://github.com/hapssatou03/eclat-solidaire"
            liveLink="https://eclat-solidaire.vercel.app"
          />

          {/* Filmeo */}
          <ProjectCard
            title="FILMEO — Catalogue de films & bandes-annonces"
            description="Site vitrine façon plateforme de streaming : recherche, grilles par catégories, fiches avec bande-annonce."
            image="/images/filmeo.png"
            gallery={[
              "/images/filmeo.png",
              "/images/flime_bande_annonce.png",
              "/images/flimeo_polulaire.png",
              "/images/filmeo3.png",
              "/images/flimeo_tendance_2.png",
              "/images/flimeo_tendance.png",
            ]}
            technologies={["Next.js", "TypeScript", "Tailwind CSS", "YouTube API"]}
            features={[
              "Recherche globale (films, séries, artistes)",
              "Sections : Populaires, Tendances, Streaming",
              "Bandes-annonces intégrées (YouTube)",
            ]}
            githubLink="https://github.com/ton-compte/filmeo"
            liveLink="#"
          />
        </div>
      </div>
    </section>
  );
};

/* =========================
   PROJECT CARD
========================= */
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  liveLink?: string;
  gallery?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  features,
  githubLink,
  liveLink,
  gallery,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden hover:-translate-y-1 transition-transform"
    >
      {/* Media */}
      <div className="relative">
        <div className="relative w-full aspect-[16/10]">
          {gallery?.length ? (
            <ImageCarousel images={gallery} altBase={title} autoPlayMs={6000} />
          ) : (
            <Image
              src={image}
              alt={`Illustration du projet ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Boutons */}
        <div className="absolute left-4 bottom-4 z-20 flex gap-3">
          <CircleIconBtn href={githubLink} label="Code source">
            <FaGithub className="text-lg" />
          </CircleIconBtn>
          {!!liveLink && liveLink !== "#" && (
            <CircleIconBtn href={liveLink} label="Voir le projet">
              <FaExternalLinkAlt className="text-lg" />
            </CircleIconBtn>
          )}
        </div>

        {/* Tags techno */}
        <div className="absolute right-4 bottom-4 z-20 flex flex-wrap justify-end gap-1.5 max-w-[70%]">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/85 dark:bg-black/40 text-gray-900 dark:text-gray-50 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Contenu texte */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-primary-200">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-base">{description}</p>

        <ul className="mt-5 space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 text-[11px]">
                ✓
              </span>
              <span className="text-gray-700 dark:text-gray-200">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

/* =========================
   BOUTON ROND (icônes colorées)
========================= */
const CircleIconBtn = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  const isGithub = href.includes("github.com");
  const iconColor = isGithub ? "text-gray-800" : "text-primary-600";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`grid place-items-center w-10 h-10 rounded-full 
      bg-white text-xl ${iconColor}
      ring-1 ring-black/10 shadow-md hover:shadow-lg
      hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-400 
      hover:text-white transition duration-300`}
    >
      {children}
    </Link>
  );
};

/* =========================
   CARROUSEL D’IMAGES
========================= */
type CarouselProps = {
  images: string[];
  altBase?: string;
  autoPlayMs?: number;
};

const ImageCarousel = ({
  images,
  altBase = "Diapositive",
  autoPlayMs = 0,
}: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (dir: 1 | -1) =>
    setIndex((prev) => (prev + dir + images.length) % images.length);
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(id);
  }, [autoPlayMs, images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (delta > threshold) go(-1);
    else if (delta < -threshold) go(1);
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-full select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {images.map((src, i) => (
        <motion.div
          key={src + i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden={i !== index}
          style={{ zIndex: i === index ? 20 : 0 }}
        >
          <Image
            src={src}
            alt={`${altBase} ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={i === 0}
          />
        </motion.div>
      ))}

      {/* Ombres latérales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/35 to-transparent" />

      {/* Contrôles */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Image précédente"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/55 hover:bg-black/70 text-white rounded-full w-10 h-10 grid place-items-center backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Image suivante"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/55 hover:bg-black/70 text-white rounded-full w-10 h-10 grid place-items-center backdrop-blur-sm"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à l’image ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsClient;
