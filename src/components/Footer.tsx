import Link from 'next/link'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary-50 border-t border-primary-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <FaHeart className="text-primary-500 text-xl" />
              <span className="font-serif text-lg text-primary-800">Hapssatou</span>
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Conceptrice Développeuse d'Applications
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="mailto:hapssatousy01@gmail.com" icon={<FaEnvelope />} label="Email" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-100 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Hapssatou SY. Tous droits réservés.</p>
         
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
      aria-label={label}
    >
      <div className="text-xl">{icon}</div>
    </Link>
  )
}

export default Footer