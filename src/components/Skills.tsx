'use client'

import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaShieldAlt, FaTools } from 'react-icons/fa'

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
                "JavaScript & Frontend : React, React Native, Redux, Tailwind CSS",
                "Backend : Node.js, Express.js",
                "Java & Frameworks : Java, Spring Boot, Hibernate, JPA, Maven"
              ]}
              color="primary"
            />
            
            <SkillCard 
              icon={<FaServer />} 
              title="Création d'API REST" 
              skills={[
                "Conception et implémentation d'API REST sécurisées avec Spring Boot et Express.js",
                "Gestion des authentifications avec JWT",
                "Respect des bonnes pratiques REST (CRUD, status codes, sécurité)"
              ]}
              color="secondary"
            />
            
            <SkillCard 
              icon={<FaDatabase />} 
              title="Base de données" 
              skills={[
                "SQL (PostgreSQL, MySQL)",
                "NoSQL (MongoDB)"
              ]}
              color="accent"
            />
            
            <SkillCard 
              icon={<FaShieldAlt />} 
              title="Sécurité & Authentification" 
              skills={[
                "Chiffrement et hachage : JWT, bcrypt",
                "Sécurisation des API et des données utilisateurs"
              ]}
              color="primary"
            />
            
            <SkillCard 
              icon={<FaTools />} 
              title="DevOps & Outils" 
              skills={[
                "Docker (conteneurisation du backend et du frontend)",
                "Gestion de projet : Git, GitHub",
                "UI/UX : Figma (wireframing, zoning)"
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
                  <h4 className="font-medium text-gray-900">Compétences solides en développement sécurisé</h4>
                  <p className="text-gray-700 mt-1">J'applique systématiquement les bonnes pratiques de sécurité dans tous mes projets.</p>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expérience dans la conception d'applications complètes</h4>
                  <p className="text-gray-700 mt-1">Je maîtrise le développement full-stack et la création d'API REST performantes.</p>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Passionnée par la sécurité des systèmes</h4>
                  <p className="text-gray-700 mt-1">Je m'intéresse activement à la protection des données et à la cybersécurité.</p>
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