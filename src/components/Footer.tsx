import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#162541] text-slate-200 border-t border-slate-700/40">
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">

        <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
          Créé avec
          <span className="text-red-500">
            <FaHeart />
          </span>
          par
          <span className="font-semibold tracking-wide">
            Hapssatou SY
          </span>
        </p>

        <p className="mt-3 text-xs sm:text-sm text-slate-300/80">
          2026 — Tous droits réservés
        </p>

      </div>
    </footer>
  );
};

export default Footer;
