import type { Metadata } from "next";
import CompetencesClient from "./CompetencesClient";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Compétences techniques de Hapssatou Sy — développement full-stack, DevOps, sécurité et conception UX/UI.",
};

export default function CompetencesPage() {
  return <CompetencesClient />;
}
