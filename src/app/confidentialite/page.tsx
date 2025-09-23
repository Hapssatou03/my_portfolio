// app/confidentialite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Hapssatou SY",
  description:
    "Politique de confidentialité du portfolio d’Hapssatou SY : données collectées, base légale, durée, droits RGPD et contact.",
};

export default function ConfidentialitePage() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Politique de confidentialité
        </h1>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Dernière mise à jour : 21 septembre 2025
        </p>

        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Responsable du traitement</h2>
            <p>
              <strong>Hapssatou SY</strong> est responsable du traitement.
              Contact :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2. Données collectées</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Formulaire de contact</strong> : nom, email, sujet, message
                (nécessaires pour répondre).
              </li>
              <li>
                <strong>Journaux techniques</strong> de l’hébergeur (sécurité, performance).
              </li>
              <li>
                <strong>Cookies</strong> : uniquement techniques (préférences de thème, fonctionnement).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. Finalités et base légale</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre à vos messages (exécution de mesures pré/contractuelles).</li>
              <li>Sécuriser et faire fonctionner le site (intérêt légitime).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Durées de conservation</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Messages : jusqu’à 12 mois après le dernier contact.</li>
              <li>Journaux techniques : selon la politique de Vercel.</li>
              <li>Cookies de préférence : durée limitée côté navigateur.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Destinataires</h2>
            <p>
              Données traitées par Hapssatou SY. L’hébergeur <strong>Vercel</strong> traite
              des données techniques liées à l’hébergement et la diffusion.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. Vos droits (RGPD)</h2>
            <p>
              Droits d’accès, rectification, effacement, limitation, opposition.
              Exercez vos droits à :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">7. Cookies</h2>
            <p>
              Pas de cookies publicitaires. Seuls des cookies strictement nécessaires
              peuvent être utilisés pour améliorer l’expérience.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">8. Sécurité</h2>
            <p>
              Mesures raisonnables de protection (HTTPS, mises à jour, pratiques de
              développement sécurisé).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">9. Contact</h2>
            <p>
              Pour toute question :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
