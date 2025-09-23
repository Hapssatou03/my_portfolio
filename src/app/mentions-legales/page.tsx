// app/mentions-legales/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Hapssatou SY",
  description:
    "Mentions légales du site portfolio de Hapssatou SY : informations éditeur, hébergeur, propriété intellectuelle et contact.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Mentions légales</h1>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Dernière mise à jour : 21 septembre 2025
        </p>

        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <div>
            <h2 className="text-lg font-semibold mb-2">Éditeur du site</h2>
            <p>
              <strong>Hapssatou SY</strong> <br />
              Conceptrice Développeuse d’Applications <br />
              Email :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>{" "}
              <br />
              Localisation : Argenteuil, France
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Hébergement</h2>
            <p>
              Le site est hébergé par <strong>Vercel</strong> – Vercel Inc., 440 N
              Barranca Ave #4133, Covina, CA 91723, USA. <br />
              Site :{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus (textes, images, logos, identité visuelle, code)
              présents sur ce site est protégé par le droit d’auteur. <br />
              Toute reproduction, distribution ou utilisation non autorisée est
              interdite sans l’accord écrit préalable d’Hapssatou SY.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, merci de contacter :{" "}
              <Link
                href="mailto:hapssatousy01@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hapssatousy01@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
