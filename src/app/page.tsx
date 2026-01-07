"use client";

import Hero from "@/components/Hero";
import CompetencesClient from "./competences/CompetencesClient";
// import AboutClient from "./apropos/AboutClient";
import ProjectsClient from "./projets/ProjectsClient";
import ExperienceClient from "./experience/ExperienceClient";
import FormationClient from "./formation/FormationClient";
import ContactClient from "./contact/ContactClient";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-[#f7f9fc] text-slate-900">
        <CompetencesClient />
        {/* <AboutClient /> */}
        <ProjectsClient />
        <ExperienceClient />
        <FormationClient />
        <ContactClient />
      </div>
    </>
  );
}
