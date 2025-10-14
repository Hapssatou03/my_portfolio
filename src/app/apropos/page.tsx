import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "À propos de Hapssatou Sy — développeuse full-stack passionnée par l’architecture, l’UX et les produits utiles.",
};

export default function AproposPage() {
  return <AboutClient />;
}
