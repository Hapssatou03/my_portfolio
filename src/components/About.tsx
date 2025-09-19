"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaptopCode, FaShieldAlt, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">À propos de moi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800">
                Développement
              </h3>
            </div>
            <p className="text-gray-700">
              Passionnée par le développement web et mobile, j'ai acquis  de solides compétences dans plusieurs technologies et frameworks, me permettant
              de concevoir des applications robustes, performantes et
              sécurisées.
            </p>
          </div>

          <div className="card bg-gradient-to-br from-secondary-50 to-white">
            <div className="flex items-center mb-4">
              <div className="bg-secondary-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-secondary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800">
                Cybersécurité
              </h3>
            </div>
            <p className="text-gray-700">
              Mon objectif est d'approfondir mes compétences en sécurité
              informatique. J'intègre déjà des bonnes pratiques de cybersécurité
              et des algorithmes de chiffrement avancés dans mes projets.
            </p>
          </div>

          <div className="card bg-gradient-to-br from-accent-50 to-white">
            <div className="flex items-center mb-4">
              <div className="bg-accent-100 p-3 rounded-full mr-4">
                <FaGraduationCap className="text-accent-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-accent-800">
                Formation
              </h3>
            </div>
            <p className="text-gray-700">
            Diplômée d’un Bac+4 en Conception et Développement d’Applications, je suis actuellement à la recherche d’un CDI en développement d’applications à partir de septembre 2025.
Mon expérience dans la conception et le développement d’applications sécurisées, associée à ma sensibilité aux enjeux de la cybersécurité, me permet de créer des solutions robustes et performantes.
Passionnée par l’optimisation et la sécurité des applications, je suis prête à mettre mes compétences et mon engagement au service de projets ambitieux et innovants. 🚀
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-4">
              J’ai développé Spendy, une application web et mobile de gestion
              des dépenses, en utilisant Java 21, Spring Boot, MySQL, React
              (Vite), MongoDB et Docker. J’y ai intégré des bonnes pratiques de
              sécurité ainsi que des algorithmes de chiffrement avancés
              (JWT, BCrypt) pour garantir la sécurité des utilisateurs. 
            </p>
            <p className="text-gray-700 mb-4">
              Actuellement, je développe Spendy, une application mobile de
              gestion des dépenses, où j'intègre des bonnes pratiques de
              cybersécurité et des algorithmes de chiffrement avancés. Mon
              objectif est d'approfondir mes compétences en sécurité
              informatique, et je recherche une alternance en cybersécurité à
              partir de septembre 2025.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-primary-700 mb-2">
                Objectif professionnel
              </h4>
              <p className="text-gray-700">
                Contrat à durer interminée CDI (septembre 2025)
              </p>
            
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-secondary-200 rounded-lg opacity-20 blur-xl"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/picture2.jpg"
                  width={400}
                  height={400}
                  className="w-full h-auto" alt={""}                />
              </div>
              <div className="absolute -bottom-6 -right-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <span className="text-primary-600 font-bold">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
