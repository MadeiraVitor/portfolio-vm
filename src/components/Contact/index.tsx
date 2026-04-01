import { motion } from "motion/react";
import { useContext } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  const sectionClassName = `pb-20 md:pb-32 px-3 md:px-6 ${
    isDarkTheme ? "bg-black" : "bg-[#eceff3]"
  }`;

  const cardClassName = `rounded-3xl p-4 md:p-16 border relative overflow-hidden ${
    isDarkTheme
      ? "bg-zinc-900/30 border-outline-variant/20"
      : "bg-[#f3f5f8] border-slate-300/70 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:border-[#67dbcf]"
  }`;

  const titleClassName = `text-4xl md:text-5xl font-headline font-black mb-6 ${
    isDarkTheme ? "text-on-surface" : "text-[#0f172a]"
  }`;

  const titleHighlightClassName = isDarkTheme
    ? "text-primary"
    : "text-[#006D62]";

  const descriptionClassName = `text-lg mb-12 max-w-2xl ${
    isDarkTheme ? "text-on-surface-variant" : "text-slate-500"
  }`;

  const contactItemClassName = `group flex flex-col items-center gap-4 transition-transform hover:scale-110`;

  const iconBoxClassName = `w-20 h-20 md:w-24 md:h-24 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
    isDarkTheme
      ? "bg-black border-outline-variant/30 group-hover:bg-primary/10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(106,242,222,0.3)]"
      : "bg-[#eceff3] border-slate-300 group-hover:bg-[#e3f8f4] group-hover:border-[#6adbcf]"
  }`;

  const iconClassName = `text-4xl ${isDarkTheme ? "text-primary" : "text-[#0f766e]"}`;

  const labelClassName = `font-headline font-bold tracking-tight transition-colors ${
    isDarkTheme
      ? "text-on-surface group-hover:text-primary"
      : "text-slate-700 group-hover:text-[#0f766e]"
  }`;

  return (
    <section className={sectionClassName} id="contato">
      <motion.div
        initial={{ opacity: 0, y: 76 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto"
      >
        <div className={cardClassName}>
          <div
            className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] ${
              isDarkTheme ? "bg-primary/10" : "bg-[#6af2de]/25"
            }`}
          ></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h3 className={titleClassName}>
              Vamos
              <span className={titleHighlightClassName}> conversar?</span>
            </h3>
            <p className={descriptionClassName}>
              Estou aberto a novas oportunidades e parcerias. Conecte-se comigo
              através de qualquer um dos canais abaixo.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* <!-- WhatsApp --> */}
              <a
                className={contactItemClassName}
                href="https://wa.me/5548998411187"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={iconBoxClassName}>
                  <FaWhatsapp className={iconClassName} />
                </div>
                <span className={labelClassName}>WhatsApp</span>
              </a>
              {/* <!-- LinkedIn --> */}
              <a
                className={contactItemClassName}
                href="https://www.linkedin.com/in/vitor-madeira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={iconBoxClassName}>
                  <FaLinkedinIn className={iconClassName} />
                </div>
                <span className={labelClassName}>LinkedIn</span>
              </a>
              {/* <!-- Email --> */}
              <a
                className={contactItemClassName}
                href="mailto:vitorsoutom@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={iconBoxClassName}>
                  <FaEnvelope className={iconClassName} />
                </div>
                <span className={labelClassName}>Email</span>
              </a>
              {/* <!-- GitHub --> */}
              <a
                className={contactItemClassName}
                href="https://github.com/MadeiraVitor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={iconBoxClassName}>
                  <FaGithub className={iconClassName} />
                </div>
                <span className={labelClassName}>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
