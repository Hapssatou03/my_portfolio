"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

type TileProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

function ContactTile({ icon, label, value, href }: TileProps) {
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800/90 
                 border border-slate-700/70 px-5 py-4 transition-colors"
    >
      <div className="h-10 w-10 rounded-2xl bg-blue-500/90 text-white grid place-items-center text-lg shadow-md">
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-medium text-slate-300/80 uppercase tracking-wide">
          {label}
        </span>
        <span className="text-sm md:text-[15px] font-semibold text-slate-50 break-all">
          {value}
        </span>
      </div>
    </Comp>
  );
}

export default function ContactClient() {
  return (
    <section
      id="contact"
      className="bg-white pt-10 md:pt-12 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* ----- TITRE PRINCIPAL ----- */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Me Contacter
          </h1>
        </div>

        {/* ----- CARTE DE CONTACT ----- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 
                     border border-slate-800/80 shadow-[0_30px_80px_rgba(15,23,42,0.6)] 
                     px-6 sm:px-10 py-10 sm:py-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              Travaillons ensemble
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Je suis disponible pour discuter de vos projets et opportunités.
            </p>
          </div>

          {/* ----- GRID ----- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <ContactTile
              icon={<FaEnvelope />}
              label="Email"
              value="hapssatousy01@gmail.com"
              href="mailto:hapssatousy01@gmail.com"
            />
            <ContactTile
              icon={<FaPhoneAlt />}
              label="Téléphone"
              value="+33 6 18 76 18 86"
              href="tel:+33618761886"
            />
            <ContactTile
              icon={<FaMapMarkerAlt />}
              label="Localisation"
              value="Île-de-France"
            />
            <ContactTile
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="hapssatou-sy"
              href="https://www.linkedin.com/in/hapssatou-sy/"
            />
            <ContactTile
              icon={<FaGithub />}
              label="GitHub"
              value="@Hapssatou03"
              href="https://github.com/Hapssatou03"
            />
            <ContactTile icon={<FaGlobe />} label="Organisation" value="APNA" />
          </div>

          <div className="mt-8 mb-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="text-center">
            <p className="text-sm text-slate-300 mb-3"></p>

            <a
              href="/cv/Hapssatou_Sy_CV_.pdf"
              download
              className="inline-flex items-center justify-center
             px-10 py-3 rounded-full font-semibold text-white
             bg-gradient-to-r from-blue-500 to-cyan-500

             shadow-[0_10px_35px_rgba(0,140,255,.35)]
             hover:shadow-[0_12px_40px_rgba(0,160,255,.55)]

             transition-all duration-300
             hover:-translate-y-0.5
             hover:from-blue-500 hover:to-blue-500

             !text-white hover:!text-white"
            >
              Télécharger CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
