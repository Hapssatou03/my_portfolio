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
              Passionnée par le développement web et mobile, j'ai acquis de
              solides compétences dans plusieurs technologies et frameworks, me
              permettant de concevoir des applications robustes, performantes et
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
              Diplômée d’un Bac+4 en Conception et Développement d’Applications,
              je suis actuellement à la recherche d’un CDI en développement
              d’applications à partir de septembre 2025. Mon expérience dans la
              conception et le développement d’applications sécurisées, associée
              à ma sensibilité aux enjeux de la cybersécurité, me permet de
              créer des solutions robustes et performantes. Passionnée par
              l’optimisation et la sécurité des applications, je suis prête à
              mettre mes compétences et mon engagement au service de projets
              ambitieux et innovants. 🚀
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image à gauche */}
          <div className="order-1 md:order-1">
            <div className="aspect-square w-72 md:w-96 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-white">
              <Image
                src="/images/picture2.jpg"
                alt="Hapssatou"
                width={800}
                height={800}
                className="w-full h-full object-cover object-[50%_18%] md:object-[50%_15%]"
                priority
              />
            </div>
          </div>

          <div className="order-2 md:order-2">
            <p className="text-gray-700 mb-4 text-justify">
              Actuellement en freelance sur Jiamini, une plateforme éducative
              innovante, et sur Spendy, une application mobile de gestion des
              dépenses intégrant des pratiques modernes de développement. Mon
              objectif est de perfectionner mes compétences en contribuant à des
              projets à forte valeur ajoutée et ayant un réel impact.
              Persévérante et passionnée, je m’engage à concevoir des solutions
              robustes, performantes et utiles, tout en continuant à évoluer
              dans un environnement stimulant.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-primary-700 mb-2">
                Objectif professionnel
              </h4>
              <p className="text-gray-700">
                Contrat à durée indéterminée CDI ✨
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
