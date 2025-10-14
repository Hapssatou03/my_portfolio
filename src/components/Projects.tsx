"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* =========================
   PAGE: Projects
========================= */

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Mes projets</h2>

        <div className="mt-12 space-y-20">
          {/* SPENDY */}
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
            reverse={false}
          />

          {/* JIAMINI avec CARROUSEL */}
          <ProjectCard
            title="JIAMINI — Plateforme éducative immersive"
            description="Application éducative interactive permettant aux élèves d’apprendre à travers un globe 3D, des quiz par matières et un espace personnel de suivi."
            image="/images/jiamini1.png"
            gallery={[
              "/images/jiamini1.png",
              "/images/globe_interactive.png",
              "/images/jiamini_espace_student.png",
              "/images/jiamini_quiz_1.png",
              "/images/choice_level_quiz.png",
            ]}
            technologies={[
              "Next.js",
              "React",
              "Three.js",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Tailwind CSS",
            ]}
            features={[
              "Globe 3D interactif pour explorer les contenus",
              "Espace élève (profil, scores, cours suivis, recommandations)",
              "Quiz par matières et niveaux (1, 2, 3) avec progression",
              "Assistant IA (Kélé) pour accompagner l'apprentissage",
            ]}
            githubLink="https://github.com/Hapssatou03/Jiamini-API" 
            liveLink="#"
            reverse={true}
          />

          {/* ÉCLAT SOLIDAIRE */}
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
            reverse={true}
          />

          {/* EXPRESSIVE */}
          <ProjectCard
            title="Expressive"
            description="Blog full-stack sur le développement personnel et professionnel."
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
            technologies={["Express.js", "MongoDB", "JWT", "React"]}
            features={["API articles + users", "Auth JWT", "Interface fluide"]}
            githubLink="https://github.com"
            liveLink="#"
            reverse={false}
          />
        </div>
      </motion.div>
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
  reverse?: boolean;
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
  reverse = false,
  gallery,
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image / Carousel side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}
      >
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {gallery && gallery.length > 0 ? (
            <ImageCarousel images={gallery} altBase={title} autoPlayMs={0} />
          ) : (
            <SingleImage image={image} title={title} />
          )}

          {/* Overlay: tags + boutons (sous les contrôles du carrousel) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end z-10 pointer-events-none">
            <div className="p-6 w-full">
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs backdrop-blur-sm bg-white/20 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pointer-events-auto">
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le code ${title} sur GitHub`}
                  className="p-2 rounded-full bg-white/95 ring-1 ring-black/10 shadow-md hover:shadow-lg transition"
                >
                  <FaGithub className="text-gray-900 text-lg" />
                </Link>

                {liveLink && liveLink !== "#" && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir la démo ${title}`}
                    className="p-2 rounded-full bg-white/95 ring-1 ring-black/10 shadow-md hover:shadow-lg transition"
                  >
                    <FaExternalLinkAlt className="text-gray-900 text-lg" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`order-1 ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <h3 className="text-2xl font-serif font-bold text-primary-800 dark:text-primary-200 mb-2">
          {title}
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-1 rounded-full mr-3 mt-1.5">
                <span className="text-primary-600 dark:text-primary-300 text-xs">
                  ✓
                </span>
              </div>
              <span className="text-gray-700 dark:text-gray-200">{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center space-x-2"
          >
            <FaGithub />
            <span>Code source</span>
          </Link>

          {liveLink && liveLink !== "#" && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center space-x-2"
            >
              <FaExternalLinkAlt />
              <span>Voir le projet</span>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

/* =========================
   FALLBACK: Single Image
========================= */

const SingleImage = ({ image, title }: { image: string; title: string }) => (
  <div className="relative w-full h-64 md:h-96">
    <Image
      src={image}
      alt={`Illustration du projet ${title}`}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
    />
  </div>
);

/* =========================
   IMAGE CAROUSEL
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

  // clavier (← / →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  // autoplay optionnel
  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(id);
  }, [autoPlayMs, images.length]);

  // swipe (mobile)
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
      className="relative w-full h-64 md:h-96 select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {images.map((src, i) => (
        <motion.div
          key={src + i}
          className={`absolute inset-0 ${i === index ? "z-20" : "z-0"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={`${altBase} ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </motion.div>
      ))}

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

      {/* Puces */}
      <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à l’image ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-white"
                : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
