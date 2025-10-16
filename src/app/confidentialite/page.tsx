import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Hapssatou SY",
  description:
    "Politique de confidentialité du portfolio d’Hapssatou SY : données collectées, base légale, durée, droits RGPD et contact.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100">
      <section className="pt-2 sm:pt-6 pb-16 sm:pb-20">


        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* ===== HEADER ===== */}
          <header className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
              Politique de confidentialité
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Dernière mise à jour : 21 septembre 2025
            </p>
            <div className="mt-6 h-[2px] w-24 bg-primary-400 mx-auto rounded-full opacity-60" />
          </header>

          {/* ===== CONTENU ===== */}
          <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm shadow-sm rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 space-y-8 leading-relaxed">
            {sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-primary-600 dark:text-primary-400">
                  {section.title}
                </h2>
                <div
                  className="text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-3"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>

          {/* ===== BOUTON RETOUR ===== */}
          <div className="text-center mt-10">
            <Link
              href="/"
              className="inline-block px-6 py-2 rounded-full border border-primary-400 text-primary-600 dark:text-primary-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              ← Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
const sections = [
  {
    id: 1,
    title: "1. Responsable du traitement",
    content: `
      La responsable du traitement est <strong>Hapssatou SY</strong>.<br />
      Contact : <a href="mailto:hapssatousy01@gmail.com" class="text-primary-500 underline">hapssatousy01@gmail.com</a>.
    `,
  },
  {
    id: 2,
    title: "2. Données collectées",
    content: `
      Lors de l’utilisation du formulaire de contact, les informations suivantes peuvent être collectées : nom, email, sujet et message.<br />
      L’hébergeur collecte également des données techniques anonymes utilisées pour la sécurité et la performance.<br />
      Des cookies strictement nécessaires peuvent être utilisés (préférences de thème, bon fonctionnement du site). Aucun cookie publicitaire n’est employé.
    `,
  },
  {
    id: 3,
    title: "3. Finalités et base légale",
    content: `
      Les données sont utilisées pour répondre à vos messages et assurer le bon fonctionnement du site. 
      La base légale repose sur l’exécution de mesures contractuelles et l’intérêt légitime.
    `,
  },
  {
    id: 4,
    title: "4. Durées de conservation",
    content: `
      Les messages sont conservés jusqu’à 12 mois après le dernier contact.<br />
      Les journaux techniques dépendent de la politique de l’hébergeur (<strong>Vercel</strong>).<br />
      Les cookies de préférence sont limités dans le temps côté navigateur.
    `,
  },
  {
    id: 5,
    title: "5. Destinataires",
    content: `
      Les données sont traitées uniquement par <strong>Hapssatou SY</strong>.<br />
      L’hébergeur <strong>Vercel</strong> traite uniquement des données techniques liées à l’hébergement et à la diffusion du site.
    `,
  },
  {
    id: 6,
    title: "6. Vos droits (RGPD)",
    content: `
      Conformément au RGPD, vous disposez de droits d’accès, de rectification, d’effacement, de limitation et d’opposition.<br />
      Pour les exercer, contactez : <a href="mailto:hapssatousy01@gmail.com" class="text-primary-500 underline">hapssatousy01@gmail.com</a>.
    `,
  },
  {
    id: 7,
    title: "7. Cookies",
    content: `
      Ce site n’emploie pas de cookies publicitaires.<br />
      Seuls des cookies strictement nécessaires peuvent être utilisés pour améliorer votre expérience.
    `,
  },
  {
    id: 8,
    title: "8. Sécurité",
    content: `
      Des mesures raisonnables sont mises en place pour protéger vos données : 
      connexion sécurisée (HTTPS), mises à jour régulières et bonnes pratiques de développement.
    `,
  },
  {
    id: 9,
    title: "9. Contact",
    content: `
      Pour toute question concernant cette politique, écrivez à : 
      <a href="mailto:hapssatousy01@gmail.com" class="text-primary-500 underline">hapssatousy01@gmail.com</a>.
    `,
  },
];
