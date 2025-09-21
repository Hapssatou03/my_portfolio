'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Me contacter</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Infos de contact */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-800 dark:text-primary-200 mb-6">
              Discutons de votre projet
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-8">
              N'hésitez pas à me contacter pour échanger sur une opportunité de colllaboration !
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
                link="https://linkedin.com/in/hapssatou"
              />

              <ContactInfo
                icon={<FaGithub />}
                title="GitHub"
                content="github.com/hapssatou"
                link="https://github.com/hapssatou"
              />

              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Localisation"
                content="Argenteuil, France"
                link="#"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
                Envoyez-moi un message
              </h3>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg mb-6"
                >
                  Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
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
                      <option value="">Sélectionnez un sujet</option>
                      <option value="alternance">Proposition d'alternance</option>
                      <option value="projet">Collaboration sur un projet</option>
                      <option value="question">Question générale</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

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
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  content: string
  link: string
}

const ContactInfo = ({ icon, title, content, link }: ContactInfoProps) => {
  return (
    <a
      href={link}
      className="flex items-start group"
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
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
    </a>
  )
}

export default Contact
