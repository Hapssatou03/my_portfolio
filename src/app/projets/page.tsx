import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection de projets: Spendy, Jiamini, Filmeo — carrousels, démos et code source.",
};

export default function ProjetsPage() {
  return <ProjectsClient />;
}
