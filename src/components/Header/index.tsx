import { motion } from "motion/react";
import { MenuMobile } from "../MenuMobile";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        isDarkTheme
          ? "bg-black/55 backdrop-blur-xl border-outline-variant/30"
          : "bg-[#F8FAFC]/95 border-slate-300/80 shadow-[0_1px_0_rgba(15,23,42,0.05)]"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a className="flex items-center gap-2 group cursor-pointer">
          <span
            className={`w-10 h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDarkTheme
                ? "bg-primary/10 border-primary group-hover:bg-primary group-hover:text-on-primary-container"
                : "bg-[#d7f5ef] border-[#71d8c7] group-hover:bg-[#6af2de]"
            }`}
          >
            <span
              className={`font-headline font-black text-xl tracking-tighter ${
                isDarkTheme
                  ? "text-primary group-hover:text-on-primary-container"
                  : "text-[#0f766e]"
              }`}
            >
              VM
            </span>
          </span>
        </a>

        <nav aria-label="Navegacao principal">
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a
                className={`transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200 ${
                  isDarkTheme
                    ? "text-slate-400 hover:text-[#6af2de]"
                    : "text-slate-600 hover:text-[#006D62]"
                }`}
                href="#sobre"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className={`transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200 ${
                  isDarkTheme
                    ? "text-slate-400 hover:text-[#6af2de]"
                    : "text-slate-600 hover:text-[#006D62]"
                }`}
                href="#habilidades"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                className={`transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200 ${
                  isDarkTheme
                    ? "text-slate-400 hover:text-[#6af2de]"
                    : "text-slate-600 hover:text-[#006D62]"
                }`}
                href="#projetos"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                className={`transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200 ${
                  isDarkTheme
                    ? "text-slate-400 hover:text-[#6af2de]"
                    : "text-slate-600 hover:text-[#006D62]"
                }`}
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 md:gap-0">
          <button
            className={`hover:scale-105 transition-transform duration-200 cursor-pointer ${
              isDarkTheme
                ? "text-[#6af2de]"
                : "text-[#0f766e] hover:text-[#115e59]"
            }`}
            aria-label="Alternar tema"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <IoSunnyOutline className="text-2xl" />
            ) : (
              <HiOutlineMoon className="text-2xl" />
            )}
          </button>

          <MenuMobile />
        </div>
      </div>
    </motion.header>
  );
};
