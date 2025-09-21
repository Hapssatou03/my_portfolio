'use client';

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaPencilRuler,
} from "react-icons/fa";

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="
        py-16 rounded-3xl
        bg-primary-50 dark:bg-gray-900/40
        border border-primary-100 dark:border-gray-800
      "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Compétences techniques</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SkillCard
              icon={<FaCode />}
              title="Développement web & mobile"
              skills={[
                "Frontend : Javascript, Angular, React, React Native, Redux, Vue.js, Tailwind CSS",
                "Backend : Java, Spring Boot, Hibernate, JPA, Maven, Node.js, Express.js ",
              ]}
              color="primary"
            />
            <SkillCard
              icon={<FaServer />}
              title="Création d'API REST"
              skills={[
                "Conception & implémentation d'API REST sécurisées (Spring Boot, Express.js)",
                "Authentification & autorisation : JWT",
                "Bonnes pratiques REST (CRUD, status codes, sécurité)",
              ]}
              color="secondary"
            />
            <SkillCard
              icon={<FaDatabase />}
              title="Base de données"
              skills={[
                "SQL : PostgreSQL, MySQL",
                "NoSQL : MongoDB",
                "Modélisation de schémas & optimisation des requêtes",
              ]}
              color="accent"
            />
            <SkillCard
              icon={<FaPencilRuler />}
              title="Conception (UX/UI & Architecture)"
              skills={[
                "Figma : wireframes, maquettes haute fidélité, design system",
                "Maquettage & prototypage interactif (zoning, parcours utilisateur)",
                "Diagrammes : UML (cas d’usage, séquence, classe), user flows",
                "Outils : StartUML, Lucidchart / draw.io, Mermaid / PlantUML",
                "Spécifications fonctionnelles & critères d’accessibilité",
              ]}
              color="primary"
            />
            <SkillCard
              icon={<FaShieldAlt />}
              title="Sécurité & Authentification"
              skills={[
                "Chiffrement & hachage : JWT, bcrypt",
                "Sécurisation des API & des données (validation, headers, CORS, rate limiting)",
              ]}
              color="primary"
            />
            <SkillCard
              icon={<FaTools />}
              title="DevOps & Outils"
              skills={[
                "Docker (conteneurisation front/back)",
                "CI/CD (GitHub Actions); gestion de versions : Git, GitHub",
                "Monitoring & logs de base",
              ]}
              color="secondary"
            />
          </div>

          {/* Pourquoi me choisir ? */}
          <div
            className="
              mt-16 p-8 rounded-3xl
              bg-white/70 dark:bg-gray-900/60
              border border-gray-100 dark:border-gray-800
            "
          >
            <h3 className="text-2xl font-serif font-bold text-primary-800 dark:text-primary-200 mb-6">
              Pourquoi me choisir ?
            </h3>

            <motion.ul
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  t: "De la conception au déploiement",
                  d: "De l’idée jusqu’au produit en ligne. Je maîtrise tout le cycle pour livrer vite et bien.",
                },
                {
                  t: "Développement sécurisé",
                  d: "Pratiques de sécurité intégrées dès la conception et code maintenable, testé et documenté.",
                },
                {
                  t: "Performance & expérience utilisateur",
                  d: "Applications rapides et fluides, au design moderne et centré sur l’utilisateur.",
                },
                {
                  t: "Polyvalence technique",
                  d: "Langages, frameworks, bases de données, CI/CD.",
                },
                 {
                  t: "Autonomie & esprit d’équipe",
                  d: "Persévérante et organisée, J’aime relever les défis et trouver des solutions créatives.",
                },
                 {
                  t: "Passion & engagement",
                  d: "Je proposer des solutions créatives.",
                },
              ].map((e, i) => (
                <motion.li key={i} variants={item} className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/40 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 dark:text-primary-300 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{e.t}</h4>
                    <p className="text-gray-700 dark:text-gray-200 mt-1">{e.d}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: "primary" | "secondary" | "accent";
}

const SkillCard = ({ icon, title, skills, color }: SkillCardProps) => {
  // couleurs claires + variantes dark (gradient doux + bordures sombres + texte lisible)
  const colorClasses = {
    primary:
      "bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/15 dark:to-gray-900 border-primary-200 dark:border-gray-800 text-primary-900 dark:text-primary-200",
    secondary:
      "bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/15 dark:to-gray-900 border-secondary-200 dark:border-gray-800 text-secondary-900 dark:text-secondary-200",
    accent:
      "bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/15 dark:to-gray-900 border-accent-200 dark:border-gray-800 text-accent-900 dark:text-accent-200",
  } as const;

  const iconColorClasses = {
    primary: "bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300",
    secondary: "bg-secondary-100 dark:bg-secondary-900/40 text-secondary-600 dark:text-secondary-300",
    accent: "bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-300",
  } as const;

  return (
    <motion.div
      className={`card border hover:shadow-lg ${colorClasses[color]}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full mr-4 ${iconColorClasses[color]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-200">
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
