import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-50 dark:bg-gray-900 border-t border-primary-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))]">
        <div
          className="grid grid-cols-1 gap-6 items-center
                        md:grid-cols-[1fr_auto_1fr]"
        >
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="font-serif text-lg font-semibold text-primary-800 dark:text-primary-200">
                Hapssatou.S
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Ingénieure logicielle en apprentissage
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="hidden md:inline text-gray-400">|</span>
            <Link
              href="/confidentialite"
              className="hover:underline text-primary-600 dark:text-primary-400"
            >
              Politique de confidentialité
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-6">
            <SocialLink
              href="https://github.com/Hapssatou03"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/hapssatou-sy/"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="hapssatousy01@gmail.com"
              icon={<FaEnvelope />}
              label="Email"
            />
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-primary-100 dark:border-gray-800">
          <p className="mx-auto w-fit text-center text-sm text-gray-600 dark:text-gray-400">
            © Tous droits réservés.
          </p>
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
      <span className="inline-flex items-center justify-center text-2xl leading-none w-7 h-7">
        {icon}
      </span>
    </Link>
  );
};

export default Footer;
