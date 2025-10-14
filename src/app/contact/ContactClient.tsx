"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaFilePdf,
} from "react-icons/fa";
import { sendContact, ContactPayload } from "../../lib/contactApi";

type FormData = ContactPayload & { website?: string };

export default function ContactClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setSubmitSuccess(false);

    try {
      if (formData.website) throw new Error("Bot détecté");

      const payload: ContactPayload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      await sendContact(payload);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err: any) {
      setErrorMsg(err?.message || "Impossible d’envoyer le message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary-800 dark:text-primary-200 mb-6">
              Discutons de votre projet
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-8">
              N'hésitez pas à me contacter pour échanger sur une opportunité de collaboration !
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={<FaEnvelope />}
                title="Email"
                content="hapssatousy01@gmail.com"
                link="mailto:hapssatousy01@gmail.com"
              />
              <ContactInfo
                icon={<FaLinkedin />}
                title="LinkedIn"
                content="linkedin.com/in/hapssatou"
                link="https://www.linkedin.com/in/hapssatou-sy/"
                newTab
              />
              <ContactInfo
                icon={<FaGithub />}
                title="GitHub"
                content="github.com/hapssatou"
                link="https://github.com/Hapssatou03"
                newTab
              />
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Localisation"
                content="Argenteuil, France"
              />
              <ContactInfo
                icon={<FaFilePdf />}
                title="CV"
                content="Télécharger mon CV"
                link="/cv/Hapssatou_Sy_CV_.pdf"
                newTab
                download
              />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
                Envoyez-moi un message
              </h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg mb-6"
                >
                  Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </motion.div>
              )}

              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6"
                >
                  {errorMsg}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="">— Sélectionnez —</option>
                    <option value="Proposition d'alternance">Proposition d'alternance</option>
                    <option value="Collaboration projet">Collaboration sur un projet</option>
                    <option value="Question générale">Question générale</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* honeypot anti-bot */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* -------- Sous-composant -------- */

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  newTab?: boolean;
  download?: boolean;
}

function ContactInfo({ icon, title, content, link, newTab, download }: ContactInfoProps) {
  const isExternal = newTab ?? Boolean(link && (link.startsWith("http") || link.endsWith(".pdf")));
  const Comp: any = link ? "a" : "div";

  return (
    <Comp
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className="flex items-start group"
    >
      <div
        className="
          p-3 rounded-full mr-4 transition-colors
          bg-primary-100 group-hover:bg-primary-200
          dark:bg-primary-900/40 dark:group-hover:bg-primary-900/60
        "
      >
        <span className="text-primary-600 dark:text-primary-300 text-lg">{icon}</span>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="text-gray-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
          {content}
        </p>
      </div>
    </Comp>
  );
}
