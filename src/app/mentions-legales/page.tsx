// app/mentions-legales/page.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  FaUserTie,
  FaServer,
  FaBalanceScale,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Mentions légales | Hapssatou SY",
  description:
    "Mentions légales du site portfolio de Hapssatou SY : informations éditeur, hébergeur, propriété intellectuelle et contact.",
};

type Section = {
  icon: ReactNode;
  title: string;
  content: ReactNode;
};

const sections: Section[] = [
  {
    icon: <FaUserTie />,
    title: "Éditeur du site",
    content: (
      <p>
        <strong>Hapssatou SY</strong> <br />
        Conceptrice Développeuse d’Applications <br />
        Email :{" "}
        <Link
          href="mailto:hapssatousy01@gmail.com"
          className="text-primary-600 dark:text-primary-300 underline"
        >
          hapssatousy01@gmail.com
        </Link>{" "}
        <br />
        Localisation : Argenteuil, France
      </p>
    ),
  },
  {
    icon: <FaServer />,
    title: "Hébergement",
    content: (
      <p>
        Le site est hébergé par <strong>Vercel</strong> – Vercel Inc., 440 N
        Barranca Ave #4133, Covina, CA 91723, USA. <br />
        Site :{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 dark:text-primary-300 underline"
        >
          vercel.com
        </a>
      </p>
    ),
  },
  {
    icon: <FaBalanceScale />,
    title: "Propriété intellectuelle",
    content: (
      <p>
        L’ensemble des contenus (textes, images, logos, identité visuelle, code.) présents sur ce site est protégé par le droit d’auteur. <br />
        Toute reproduction, distribution ou utilisation non autorisée est
        interdite sans l’accord écrit préalable d’Hapssatou SY.
      </p>
    ),
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Contact",
    content: (
      <p>
        Pour toute question relative aux mentions légales, merci de contacter :{" "}
        <Link
          href="mailto:hapssatousy01@gmail.com"
          className="text-primary-600 dark:text-primary-300 underline"
        >
          hapssatousy01@gmail.com
        </Link>
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Mentions légales</h1>

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
            Conformément à la législation française et européenne, cette page
            présente les informations légales relatives au présent site web.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
