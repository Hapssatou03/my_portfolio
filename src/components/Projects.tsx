"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

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

          {/* EXPRESSIVE (exemple) */}
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

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  liveLink?: string;
  reverse?: boolean;
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
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}
      >
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              {/* Technologies tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 rounded-full text-xs backdrop-blur-sm
                      bg-white/20 text-white
                      dark:bg-white/25 dark:text-white
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons (GitHub & Live) */}
              <div className="flex space-x-4">
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le code ${title} sur GitHub`}
                  className="
                    p-2 rounded-full
                    bg-white/95 dark:bg-white
                    ring-1 ring-black/10 dark:ring-black/20
                    shadow-md hover:shadow-lg
                    transition
                  "
                >
                  <FaGithub className="text-gray-900 text-lg" />
                </Link>

                {liveLink && liveLink !== "#" && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir la démo ${title}`}
                    className="
                      p-2 rounded-full
                      bg-white/95 dark:bg-white
                      ring-1 ring-black/10 dark:ring-black/20
                      shadow-md hover:shadow-lg
                      transition
                    "
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
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-1 rounded-full mr-3 mt-1.5">
                <span className="text-primary-600 dark:text-primary-300 text-xs">
                  ✓
                </span>
              </div>
              <span className="text-gray-700 dark:text-gray-200">
                {feature}
              </span>
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

export default Projects;
