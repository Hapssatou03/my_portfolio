// app/confidentialite/page.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  FaUserShield,
  FaDatabase,
  FaBalanceScale,
  FaClock,
  FaUsers,
  FaIdCard,
  FaCookieBite,
  FaLock,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Hapssatou SY",
  description:
    "Politique de confidentialité du portfolio d’Hapssatou SY : données collectées, base légale, durée, droits RGPD et contact.",
};

type Section = {
  icon: ReactNode;
  title: string;
  content: ReactNode;
};

const sections: Section[] = [
  {
    icon: <FaUserShield />,
    title: "1. Responsable du traitement",
    content: (
      <p>
        La responsable du traitement des données personnelles est{" "}
        <strong>Hapssatou SY</strong>. <br />
        Contact :{" "}
        <Link
          href="mailto:hapssatousy01@gmail.com"
          className="text-primary-600 dark:text-primary-300 underline"
        >
          hapssatousy01@gmail.com
        </Link>
        .
      </p>
    ),
  },
  {
    icon: <FaDatabase />,
    title: "2. Données collectées",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Formulaire de contact</strong> : nom, email, sujet, message
          (obligatoires pour répondre).
        </li>
        <li>
          <strong>Journaux techniques</strong> (hébergeur) : données techniques
          non identifiantes utilisées pour la sécurité et la performance.
        </li>
        <li>
          <strong>Cookies</strong> : uniquement techniques (préférences de
          thème, fonctionnement du site). Pas de cookies publicitaires.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaBalanceScale />,
    title: "3. Finalités et base légale",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Répondre à vos messages (exécution de mesures
          précontractuelles/contractuelles).
        </li>
     
      </ul>
    ),
  },
  {
    icon: <FaClock />,
    title: "4. Durées de conservation",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Messages : jusqu’à 12 mois après le dernier contact.</li>
        <li>Journaux techniques : selon la politique de l’hébergeur (Vercel).</li>
        <li>Cookies de préférence (thème) : durée limitée côté navigateur.</li>
      </ul>
    ),
  },
  {
    icon: <FaUsers />,
    title: "5. Destinataires",
    content: (
      <p>
        Les données sont traitées uniquement par Hapssatou SY. L’hébergeur{" "}
        <strong>Vercel</strong> peut traiter des données techniques liées à
        l’hébergement et à la diffusion du site.
      </p>
    ),
  },
  {
    icon: <FaIdCard />,
    title: "6. Vos droits (RGPD)",
    content: (
      <p>
        Conformément au RGPD, vous disposez des droits d’accès, de
        rectification, d’effacement, de limitation et d’opposition. Pour
        exercer vos droits :{" "}
        <Link
          href="mailto:hapssatousy01@gmail.com"
          className="text-primary-600 dark:text-primary-300 underline"
        >
          hapssatousy01@gmail.com
        </Link>
        .
      </p>
    ),
  },
  {
    icon: <FaCookieBite />,
    title: "7. Cookies",
    content: (
      <p>
        Ce site n’emploie pas de cookies publicitaires. Seuls des cookies
        strictement nécessaires peuvent être utilisés
        pour améliorer votre expérience.
      </p>
    ),
  },
  {
    icon: <FaLock />,
    title: "8. Sécurité",
    content: (
      <p>
        Des mesures raisonnables sont mises en place pour protéger vos données
        (HTTPS, mises à jour, pratiques de développement sécurisé).
      </p>
    ),
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "9. Contact",
    content: (
      <p>
        Pour toute question concernant cette politique, vous pouvez écrire à{" "}
        <Link
          href="mailto:hapssatousy01@gmail.com"
          className="text-primary-600 dark:text-primary-300 underline"
        >
          hapssatousy01@gmail.com
        </Link>
        .
      </p>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Politique de confidentialité</h1>

        {/* Intro Card */}
        <div
          className="
            mt-8 p-6 md:p-8 rounded-3xl
            bg-white/70 dark:bg-gray-900/60
            border border-gray-100 dark:border-gray-800
            text-gray-800 dark:text-gray-200
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Dernière mise à jour : 21 septembre 2025
          </p>
          <p className="mt-3">
            Cette page présente de manière claire comment vos données sont
            traitées lorsque vous utilisez ce site. Je favorise des pratiques
            simples, respectueuses et transparentes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <article
              key={i}
              className="
                group relative overflow-hidden
                rounded-2xl p-6
                bg-white/70 dark:bg-gray-900/60
                border border-gray-100 dark:border-gray-800
                text-gray-800 dark:text-gray-200
                shadow-sm hover:shadow-md
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
                    w-10 h-10 rounded-xl flex items-center justify-center
                    bg-primary-100 dark:bg-primary-900/40
                    text-primary-600 dark:text-primary-300
                    text-lg
                  "
                >
                  {s.icon}
                </div>
                <h2 className="text-lg font-semibold">{s.title}</h2>
              </div>
              <div className="prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
                {s.content}
              </div>

              <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-primary-50/40 dark:from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
