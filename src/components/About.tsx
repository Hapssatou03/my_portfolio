'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

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

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Développement */}
          <div className="card bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/15 dark:to-gray-900">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-primary-600 dark:text-primary-300 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200">
                Développement
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Passionnée par le développement web et mobile, j&apos;ai acquis de solides
              compétences dans plusieurs technologies et frameworks, me permettant
              de concevoir des applications robustes, performantes et sécurisées.
            </p>
            {/* <div className="space-y-3">
              <Block title="Langages">
                {["JavaScript", "TypeScript", "Java", "SQL"].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </Block>

              <Block title="Frameworks & Front">
                {["Angular", "React", "Next.js", "React Native", "Redux", "Tailwind CSS"].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </Block>

              <Block title="Back-end & Data">
                {["Node.js", "Express", "Spring Boot", "MySQL", "MongoDB"].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </Block>

              <Block title="Déploiement / DevOps">
                {["GitHub Actions", "Docker (basics)", "Vercel", "Git"].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </Block>
            </div> */}
          </div>

          {/* Conception */}
          <div className="card bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/15 dark:to-gray-900">
            <div className="flex items-center mb-4">
              <div className="bg-secondary-100 dark:bg-secondary-900/40 p-3 rounded-full mr-4">
                <FaProjectDiagram className="text-secondary-600 dark:text-secondary-300 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
                Conception
              </h3>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                <span className="font-medium">UX/UI :</span> wireframes & maquettes (Figma),
                design system, accessibilité (couleurs, contrastes, parcours).
              </li>
              {/* <li>
                <span className="font-medium">Architecture :</span> séparation des
                responsabilités, composants réutilisables, gestion d’état claire.
              </li> */}
              <li>
                <span className="font-medium">UML & docs :</span> cas d’usage, séquence,
                classes, user flows — spécifications fonctionnelles & critères d’acceptabilité.
              </li>
              <li>
                <span className="font-medium">APIs :</span> conception REST (ressources, codes
                HTTP, validation), sécurité by design.
              </li>
              {/* <li>
                <span className="font-medium">Qualité :</span> lisibilité, performances,
                structure de projet, revues de code.
              </li> */}
            </ul>
          </div>

          {/* Formation */}
          <div className="card bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/15 dark:to-gray-900">
            <div className="flex items-center mb-4">
              <div className="bg-accent-100 dark:bg-accent-900/40 p-3 rounded-full mr-4">
                <FaGraduationCap className="text-accent-600 dark:text-accent-300 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-accent-800 dark:text-accent-200">
                Formation
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                <span className="font-medium">Bac+4 – Concepteur Développeur d’Applications</span>
              </li>
              <li>
                <span className="font-medium">Licence – Marketing Digital</span>
              </li>
              <li>
                <span className="font-medium">Titre professionnel – Référent communication & numérique</span>
              </li>
            </ul>

            {/* <div className="mt-4">
              <h4 className="font-semibold text-accent-700 dark:text-accent-300 mb-1">
                Outils & DevOps utilisés pendant les projets
              </h4>
              <div className="flex flex-wrap">
                {["Git", "GitHub", "CI/CD", "Docker (initiation)"].map((t) => (
                  <Badge key={t} tone="accent">
                    {t}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-1">
            <div className="aspect-square w-72 md:w-96 rounded-full overflow-hidden ring-4 ring-white/40 dark:ring-white/10 shadow-2xl bg-white dark:bg-gray-900">
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
            <p className="text-gray-700 dark:text-gray-200 mb-4 text-justify">
              Actuellement en freelance sur Jiamini (plateforme éducative) et Spendy
              (application de gestion des dépenses), je privilégie des solutions utiles,
              performantes et évolutives. J’aime transformer un besoin en produit concret
              avec une expérience fluide et une base technique saine.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                Objectif professionnel
              </h4>
              <p className="text-gray-700 dark:text-gray-200">
                Contrat à durée indéterminée (CDI) ✨
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
    <div className="flex flex-wrap">{children}</div>
  </div>
);

const Badge = ({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "accent";
}) => {
  const tones = {
    primary:
      "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200",
    secondary:
      "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/40 dark:text-secondary-200",
    accent:
      "bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200",
  } as const;
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium m-1 ${tones[tone]}`}>
      {children}
    </span>
  );
};

export default About;
