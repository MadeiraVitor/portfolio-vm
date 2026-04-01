import { motion } from "motion/react";
import { useContext } from "react";
import {
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  const footerClassName = `w-full py-12 border-t ${
    isDarkTheme
      ? "border-outline-variant/30 bg-black"
      : "border-slate-300/80 bg-[#eceff3]"
  }`;

  const logoBoxClassName = `w-10 h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-300 ${
    isDarkTheme
      ? "bg-primary/10 border-primary group-hover:bg-primary group-hover:text-on-primary-container"
      : "bg-[#dff7f3] border-[#6adbcf] group-hover:bg-[#6af2de]"
  }`;

  const logoTextClassName = `font-headline font-black text-xl tracking-tighter ${
    isDarkTheme
      ? "text-primary group-hover:text-on-primary-container"
      : "text-[#0f766e]"
  }`;

  const creditsClassName = `font-body text-sm leading-relaxed ${
    isDarkTheme ? "text-on-surface-variant" : "text-slate-500"
  }`;

  const authorClassName = isDarkTheme
    ? "text-primary font-bold"
    : "text-[#0f766e] font-bold";

  const rightsClassName = `font-body text-[10px] tracking-[0.2em] uppercase mt-2 ${
    isDarkTheme ? "text-outline" : "text-slate-400"
  }`;

  const navContainerClassName = `flex items-center gap-1 py-1 px-3 rounded-full border ${
    isDarkTheme
      ? "border-outline-variant/30 bg-transparent"
      : "border-slate-300 bg-[#e9edf2]"
  }`;

  const navLinkClassName = `p-3 rounded-full transition-all duration-300 group ${
    isDarkTheme
      ? "text-outline hover:text-primary hover:bg-primary/10"
      : "text-slate-400 hover:text-[#0f766e] hover:bg-[#dff7f3]"
  }`;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={footerClassName}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8">
        {/* <!-- VM Logo --> */}
        <div className="flex justify-center md:justify-start">
          <a
            className="flex items-center gap-2 group cursor-pointer"
            href="#hero"
            aria-label="Ir para o topo"
          >
            <span className={logoBoxClassName}>
              <span className={logoTextClassName}>VM</span>
            </span>
          </a>
        </div>
        {/* <!-- Credits --> */}
        <div className="text-center">
          <p className={creditsClassName}>
            Portfólio Profissional desenvolvido por <br />
            <span className={authorClassName}> Vitor Madeira</span>
          </p>
          <p className={rightsClassName}>© 2026 Todos os direitos reservados</p>
        </div>
        {/* <!-- Navigation Icons --> */}
        <div className="flex justify-center md:justify-end">
          <div className={navContainerClassName}>
            <a className={navLinkClassName} href="#hero">
              <FaHome className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a className={navLinkClassName} href="#sobre">
              <FaUser className="block text-md group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a className={navLinkClassName} href="#habilidades">
              <FaCode className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a className={navLinkClassName} href="#projetos">
              <FaFolderOpen className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a className={navLinkClassName} href="#contato">
              <FaEnvelope className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
