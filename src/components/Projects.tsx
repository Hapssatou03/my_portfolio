'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

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
          <ProjectCard 
            title="Spendy"
            description="Application mobile de gestion des dépenses"
            image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            technologies={["React Native", "Spring Boot", "PostgreSQL", "JWT"]}
            features={[
              "React Native pour le front, Spring Boot pour le backend",
              "Création d'une API REST sécurisée",
              "Sécurisation des données utilisateurs (chiffrement, JWT)",
              "Gestion des utilisateurs principaux et secondaires"
            ]}
            githubLink="https://github.com"
            liveLink="#"
            reverse={false}
          />
          
          <ProjectCard 
            title="Expressive"
            description="Blog sur le développement personnel et professionnel"
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            technologies={["Express.js", "MongoDB", "JWT", "React"]}
            features={[
              "Express.js + MongoDB",
              "API REST pour la gestion des articles et des utilisateurs",
              "Authentification avec JWT",
              "Interface fluide et design optimisé"
            ]}
            githubLink="https://github.com"
            liveLink="#"
            reverse={true}
          />
        </div>
      </motion.div>
    </section>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  liveLink: string;
  reverse: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  features, 
  githubLink, 
  liveLink, 
  reverse 
}: ProjectCardProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}
      >
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Image 
            src={image} 
            alt={title} 
            width={600} 
            height={400}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Link href={githubLink} className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-100 transition-colors">
                  <FaGithub />
                </Link>
                <Link href={liveLink} className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-100 transition-colors">
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`order-1 ${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
          {title}
        </h3>
        <p className="text-xl text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1.5">
                <span className="text-primary-600 text-xs">✓</span>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex space-x-4">
          <Link href={githubLink} className="btn btn-outline flex items-center space-x-2">
            <FaGithub />
            <span>Code source</span>
          </Link>
          <Link href={liveLink} className="btn btn-primary flex items-center space-x-2">
            <FaExternalLinkAlt />
            <span>Voir le projet</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects