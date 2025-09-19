'use client'

import { motion } from 'framer-motion'
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaPencilRuler,     
  FaProjectDiagram   
} from 'react-icons/fa'

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-16 bg-primary-50 rounded-3xl">
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
                "JavaScript & Frontend : React, React Native, Redux, Vue.js, Tailwind CSS",
                "Backend : Node.js, Express.js",
                "Java & Frameworks : Java, Spring Boot, Hibernate, JPA, Maven"
              ]}
              color="primary"
            />

            <SkillCard
              icon={<FaServer />}
              title="Création d'API REST"
              skills={[
                "Conception & implémentation d'API REST sécurisées (Spring Boot, Express.js)",
                "Authentification & autorisation : JWT",
                "Bonnes pratiques REST (CRUD, status codes, sécurité)"
              ]}
              color="secondary"
            />

            <SkillCard
              icon={<FaDatabase />}
              title="Base de données"
              skills={[
                "SQL : PostgreSQL, MySQL",
                "NoSQL : MongoDB",
                "Modélisation de schémas & optimisation des requêtes"
              ]}
              color="accent"
            />

            {/* 🆕 Card Conception */}
            <SkillCard
              icon={<FaPencilRuler />}
              title="Conception (UX/UI & Architecture)"
              skills={[
                "Figma : wireframes, maquettes haute fidélité, design system",
                "Maquettage & prototypage interactif (zoning, parcours utilisateur)",
                "Diagrammes : UML (cas d’usage, séquence, classe), user flows",
                "Outils : StartUML, Lucidchart / draw.io, Mermaid / PlantUML",
                "Spécifications fonctionnelles & critères d’accessibilité"
              ]}
              color="primary"
            />

            <SkillCard
              icon={<FaShieldAlt />}
              title="Sécurité & Authentification"
              skills={[
                "Chiffrement & hachage : JWT, bcrypt",
                "Sécurisation des API & des données (validation, headers, CORS, rate limiting)"
              ]}
              color="primary"
            />

            <SkillCard
              icon={<FaTools />}
              title="DevOps & Outils"
              skills={[
                "Docker (conteneurisation front/back)",
                "CI/CD (GitHub Actions), gestion de versions : Git, GitHub",
                "Monitoring & logs de base"
              ]}
              color="secondary"
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
              Pourquoi me choisir ?
            </h3>

            <motion.ul
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.li variants={item} className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Conception → Déploiement</h4>
                  <p className="text-gray-700 mt-1">
                    De la maquette Figma aux diagrammes UML puis au code, je couvre tout le cycle pour livrer vite et bien.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Développement sécurisé</h4>
                  <p className="text-gray-700 mt-1">
                    Bonnes pratiques de sécurité intégrées dès la conception (auth, chiffrement, durcissement API).
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Performance & lisibilité</h4>
                  <p className="text-gray-700 mt-1">
                    Code maintenable, composants réutilisables et UX fluide pour des apps robustes et rapides.
                  </p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: 'primary' | 'secondary' | 'accent';
}

const SkillCard = ({ icon, title, skills, color }: SkillCardProps) => {
  const colorClasses = {
    primary: 'bg-primary-50 border-primary-200 text-primary-800',
    secondary: 'bg-secondary-50 border-secondary-200 text-secondary-800',
    accent: 'bg-accent-50 border-accent-200 text-accent-800'
  }

  const iconColorClasses = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    accent: 'bg-accent-100 text-accent-600'
  }

  return (
    <motion.div
      className={`card border ${colorClasses[color]} hover:shadow-lg`}
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
          <li key={index} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Skills
