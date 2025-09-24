import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-50 dark:bg-gray-900 border-t border-primary-100 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo + texte */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center space-x-2 justify-center md:justify-start"
            >
              <span className="font-serif text-lg font-semibold text-primary-800 dark:text-primary-200">
                Hapssatou.S
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Conceptrice Développeuse d'Applications
            </p>
          </div>

          {/* Liens RGPD */}
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0 text-center">
            {/* <Link
              href="/mentions-legales"
              className="hover:underline text-primary-600 dark:text-primary-400 mx-2"
            >
              Mentions légales
            </Link> */}
            |
            <Link
              href="/confidentialite"
              className="hover:underline text-primary-600 dark:text-primary-400 mx-2"
            >
              Politique de confidentialité
            </Link>
          </div>

          {/* Réseaux sociaux*/}
          <div className="flex space-x-6">
            <SocialLink
              href="https://github.com/hapssatou"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/hapssatou"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:hapssatousy01@gmail.com"
              icon={<FaEnvelope />}
              label="Email"
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-primary-100 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Link
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-2xl">{icon}</div>
    </Link>
  );
};

export default Footer;
