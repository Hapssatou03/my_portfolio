import React from "react";
import { Wallet } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet size={22} />
            <h1 className="text-lg font-semibold tracking-tight">
              Hapssatou.S — Portfolio
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">À propos</a>
            <a href="#projects" className="hover:opacity-80">Projets</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ingénieure logicielle — Full-stack & DevOps
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Bienvenue sur mon portfolio. Découvrez mes projets, mon stack et ce que je peux apporter à votre équipe.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-md border border-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-md border hover:bg-gray-100 transition"
            >
              Me contacter
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t">
          <div className="container mx-auto px-4 py-12">
            <h3 className="text-xl font-semibold">À propos</h3>
            <p className="mt-3 max-w-3xl text-gray-700">
              Développeuse full-stack (Java/Spring, React/Next.js), CI/CD, Docker. Passionnée par l’architecture,
              la qualité logicielle et l’UX.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t">
          <div className="container mx-auto px-4 py-12">
            <h3 className="text-xl font-semibold">Projets</h3>
            <p className="mt-3 text-gray-700">
              (À remplacer par ta vraie grille de projets / cartes.)
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t">
          <div className="container mx-auto px-4 py-12">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-3 text-gray-700">
              Tu peux m’écrire à{" "}
              <a href="mailto:hapssatousy01@gmail.com" className="underline">
                hapssatousy01@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Hapssatou.S — Portfolio
        </div>
      </footer>
    </div>
  );
}
