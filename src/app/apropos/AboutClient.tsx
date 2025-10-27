"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWalking } from "react-icons/fa";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaHeart,
  FaRegSmileBeam,
  FaCompass,
  FaSeedling,
  FaBookOpen,
  FaDumbbell,
  FaCameraRetro,
  FaPlane,
  FaHistory,
  FaBullseye,
  FaSpa,
} from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "-80px" },
};

export default function AboutClient() {
  return (
    <section id="about" className="py-20">
      <motion.div {...fadeUp}>
        <header className="max-w-4xl mx-auto text-center -mt-12 sm:-mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold leading-tight text-pink-500"
          >
            Construire des solutions qui allient performance, design et impact
          </motion.h2>
        </header>

        {/* Photo + stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/40 dark:ring-white/10">
              <Image
                src="/images/picture2.jpg"
                alt="Hapssatou"
                fill
                className="object-cover object-[50%_18%] md:object-[50%_15%]"
                priority
              />
            </div>
          </div>

          {/* Stat cards */}
          <div className="md:col-span-3 grid grid-cols-3 gap-4">
            <StatCard
              icon={
                <FaProjectDiagram className="text-pink-400 sm:text-pink-500" />
              }
              label="Projets"
              value="•Spendy •Éclat •Jiamini •MindIA"
            />
            <StatCard
              icon={
                <FaGraduationCap className="text-pink-400 sm:text-pink-500" />
              }
              label="Parcours"
              value="Data ingénieure en apprentissage"
            />
            <StatCard
              icon={<FaBullseye className="text-pink-400 sm:text-pink-500" />}
              label="Objectif pro"
              value="Rejoindre une équipe en alternance"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <div className="lg:col-span-2">
            <div className="h-full flex flex-col justify-between">
              <Card tone="primary">
                <h3 className="text-xl font-semibold flex items-center gap-3">
                  <FaHeart className="opacity-80" />
                  Ma vision du développement
                </h3>
                <p className="mt-3 text-gray-700 dark:text-gray-200 text-justify">
                  Pour moi, un bon pipeline de données allie fiabilité,
                  performance et qualité. Je privilégie la rigueur, la clarté et
                  l’automatisation — pour livrer des solutions data durables et
                  évolutives.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <Badge tone="primary">Craft & qualité</Badge>
                  <Badge tone="primary">DX & DX</Badge>
                  <Badge tone="primary">Accessibilité</Badge>
                  <Badge tone="primary">Sécurité by design</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mt-14">
          <h3 className="text-xl font-semibold mb-4">Parcours en bref</h3>
          <ol className="relative border-s border-gray-200 dark:border-white/10">
            <TimelineItem
              title="Mastère 2 – Ingénierie Data"
              subtitle="Spécialisation : Cloud, Big Data, ETL/ELT & IA appliquée"
              right="En cours"
            />
            <TimelineItem
              title="RNCP – Concepteur Développeur d’Applications"
              subtitle="Spécialisation en Java/Spring Boot, sécurité applicative, Docker et intégration DevOps."
              right="Validé"
            />
            <TimelineItem
              title="Licence – Marketing Digital"
              subtitle="Spécialisation en stratégie d’acquisition, communication multicanale et analyse de données."
              right="Validé"
            />
            <TimelineItem
              title="Titre professionnel – Référent Communication et Numérique"
              subtitle="Pilotage de projets digitaux, gestion de contenus et transformation numérique."
              right="Validé"
            />
          </ol>
        </div>

        {/* Valeurs & Hobbies */}
        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card tone="secondary">
            <h3 className="text-lg font-semibold flex items-center gap-3">
              <FaSeedling className="opacity-80" />
              Mes valeurs
            </h3>
            <div className="mt-4 flex flex-wrap">
              <Badge>Bienveillance</Badge>
              <Badge>Exigence</Badge>
              <Badge>Transparence</Badge>
              <Badge>Ownership</Badge>
              <Badge>Apprentissage continu</Badge>
            </div>
          </Card>

          <Card tone="secondary">
            <h3 className="text-lg font-semibold flex items-center gap-3">
              <FaRegSmileBeam className="opacity-80" />
              Ce qui me fait kiffer
            </h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Chip
                icon={<FaBookOpen className="text-pink-400 sm:text-pink-500" />}
              >
                Lecture
              </Chip>
              <Chip
                icon={<FaHistory className="text-pink-400 sm:text-pink-500" />}
              >
                Histoire
              </Chip>
              <Chip
                icon={<FaDumbbell className="text-pink-400 sm:text-pink-500" />}
              >
                Fitness
              </Chip>
              <Chip
                icon={<FaWalking className="text-pink-400 sm:text-pink-500" />}
              >
                Marche
              </Chip>
              <Chip icon={<FaSpa className="text-pink-400 sm:text-pink-500" />}>
                Méditation
              </Chip>
              <Chip
                icon={
                  <FaCameraRetro className="text-pink-400 sm:text-pink-500" />
                }
              >
                Design
              </Chip>
              <Chip
                icon={
                  <FaCameraRetro className="text-pink-400 sm:text-pink-500" />
                }
              >
                Photographie
              </Chip>
              <Chip
                icon={<FaPlane className="text-pink-400 sm:text-pink-500" />}
              >
                Voyages
              </Chip>
            </div>
          </Card>
        </div>

        {/* CTA final */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <p className="text-gray-700 dark:text-gray-200">
            Curieuse d’en savoir plus ? Je serais ravie d’échanger ☕
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/projets"
              className="px-6 py-2 rounded-full font-medium border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Explorer mes projets
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =============================
   UI SUB-COMPONENTS
============================= */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="card flex flex-col items-start gap-2 bg-gradient-to-br from-white to-primary-50/70 dark:from-gray-900 dark:to-primary-900/10">
      <div className="text-2xl opacity-80">{icon}</div>
      <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function Card({
  tone = "primary",
  children,
}: {
  tone?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}) {
  const tones = {
    primary:
      "bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/15 dark:to-gray-900",
    secondary:
      "bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/15 dark:to-gray-900",
    accent:
      "bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/15 dark:to-gray-900",
  } as const;
  return <div className={`card ${tones[tone]}`}>{children}</div>;
}

function TimelineItem({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: string;
}) {
  return (
    <li className="mb-8 ms-4">
      <div className="absolute w-3 h-3 bg-primary-500 rounded-full mt-1.5 -start-1.5 border border-white/70 dark:border-gray-900"></div>
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
        {right && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200">
            {right}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-1 text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
    </li>
  );
}

function Badge({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "accent";
}) {
  const tones = {
    primary:
      "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200",
    secondary:
      "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/40 dark:text-secondary-200",
    accent:
      "bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200",
  } as const;
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium m-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Chip({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-white/10 shadow-sm">
      {icon && <span className="text-sm opacity-80">{icon}</span>}
      {children}
    </span>
  );
}
