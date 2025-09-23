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

        <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Responsable du traitement</h2>
            <p>
              La responsable du traitement est <strong>Hapssatou SY</strong>. 
              Contact :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2. Données collectées</h2>
            <p>
              Lors de l’utilisation du formulaire de contact : nom, email, sujet et
              message sont recueillis pour répondre à vos demandes.
            </p>
            <p>
              L’hébergeur collecte des données techniques anonymes pour la sécurité
              et la performance.
            </p>
            <p>
              Des cookies strictement nécessaires peuvent être utilisés (préférences
              de thème, bon fonctionnement du site). Aucun cookie publicitaire.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. Finalités et base légale</h2>
            <p>
              Les données sont utilisées pour répondre à vos messages et assurer le
              bon fonctionnement du site. Base légale : exécution de mesures
              contractuelles et intérêt légitime.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Durées de conservation</h2>
            <p>
              Les messages sont conservés jusqu’à 12 mois après le dernier contact.  
              Les journaux techniques dépendent de la politique de l’hébergeur (Vercel).  
              Les cookies de préférence sont limités dans le temps côté navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Destinataires</h2>
            <p>
              Les données sont traitées uniquement par Hapssatou SY. 
              L’hébergeur <strong>Vercel</strong> traite uniquement des données
              techniques liées à l’hébergement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. Vos droits (RGPD)</h2>
            <p>
              Conformément au RGPD, vous disposez de droits d’accès, de rectification,
              d’effacement, de limitation et d’opposition.  
              Pour les exercer :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">7. Cookies</h2>
            <p>
              Ce site n’emploie aucun cookie publicitaire. Seuls des cookies
              techniques nécessaires au fonctionnement peuvent être utilisés.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">8. Sécurité</h2>
            <p>
              Des mesures raisonnables sont appliquées pour protéger vos données
              (connexion sécurisée HTTPS, mises à jour, bonnes pratiques).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">9. Contact</h2>
            <p>
              Pour toute question concernant cette politique, écrivez à :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
