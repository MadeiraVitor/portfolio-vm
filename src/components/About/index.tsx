import fotoPerfil from "../../assets/images/foto-perfil.png";
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  return (
    <section
      className={`py-20 md:py-32 px-3 md:px-6 ${
        isDarkTheme ? "bg-black" : "bg-[#eceff3]"
      }`}
      id="sobre"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 76 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`rounded-3xl p-4 md:p-16 border relative overflow-hidden flex flex-col items-center text-center ${
            isDarkTheme
              ? "bg-zinc-900/30 border-outline-variant/20"
              : "bg-[#f3f5f8] border-slate-300/70 shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-headline font-black mb-12 ${
              isDarkTheme ? "text-on-surface" : "text-[#0f172a]"
            }`}
          >
            <span
              className={isDarkTheme ? "text-on-surface" : "text-[#0f172a]"}
            >
              Sobre
            </span>{" "}
            <span className={isDarkTheme ? "text-primary" : "text-[#006D62]"}>
              Mim
            </span>
          </h2>
          <div className="relative w-48 h-64 md:w-56 md:h-72 mb-10 group">
            <div
              className={`absolute -inset-3 rounded-2xl blur-xl transition-all duration-500 ${
                isDarkTheme
                  ? "bg-primary/20 group-hover:bg-primary/30"
                  : "bg-[#6af2de]/20 group-hover:bg-[#6af2de]/30"
              }`}
            ></div>
            <div
              className={`relative w-full h-full rounded-2xl overflow-hidden border ${
                isDarkTheme
                  ? "border-outline-variant/30 shadow-2xl"
                  : "border-slate-300/80 shadow-[0_12px_24px_rgba(15,23,42,0.12)]"
              }`}
            >
              <img
                alt="Vitor Madeira Profile Photo"
                className="w-full h-full object-cover"
                src={fotoPerfil}
              />
            </div>
          </div>
          <div className="max-w-2xl mb-10">
            <p
              className={`text-lg leading-relaxed mb-6 ${
                isDarkTheme ? "text-on-surface-variant" : "text-slate-500"
              }`}
            >
              Desenvolvedor Front-End com foco em React e TypeScript, atuando na
              construção de interfaces modernas, performáticas e bem
              estruturadas. Utilizo TypeScript para aumentar a previsibilidade
              do código e reduzir erros em tempo de desenvolvimento. Tenho como
              prioridade escrever código limpo, organizado e escalável, seguindo
              boas práticas e versionamento com Git. Busco evoluir
              constantemente em arquitetura de projetos, performance e
              experiência do usuário.
            </p>
          </div>
          <a
            className={`px-10 py-4 font-headline font-black rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 ${
              isDarkTheme
                ? "bg-primary text-on-primary-container hover:shadow-[0_0_30px_rgba(106,242,222,0.5)]"
                : "bg-[#006D62] text-white hover:bg-[#006D62]/90 hover:shadow-[0_0_30px_rgba(0,109,98,0.5)]"
            }`}
            href="/curriculo-vitor-madeira.pdf"
            download
          >
            <span className="material-symbols-outlined" data-icon="download">
              download
            </span>
            Baixar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};
