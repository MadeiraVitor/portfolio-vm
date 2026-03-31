import NetworkBackground from "../NetworkBackground";
import fotoPerfil from "../../assets/images/foto-perfil.png";
import setupFuturista from "../../assets/images/setup-futurista.png";
import { TypewriterRole } from "../TypewriterRole";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[max-content_max-content] lg:gap-24 items-center lg:justify-center">
        <motion.div
          className="z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mb-6 lg:hidden">
            <div className="w-28 h-28 rounded-full p-0.5 bg-linear-to-br from-primary to-secondary shadow-[0_0_20px_rgba(106,242,222,0.35)]">
              <img
                src={fotoPerfil}
                alt="Vitor Madeira Profile Photo"
                className="w-full h-full rounded-full object-cover object-[50%_30%] bg-[#020617]"
              />
            </div>
            <span className="absolute right-1.5 bottom-2 w-4 h-4 rounded-full bg-primary border-2 border-black" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-on-surface font-headline font-black text-5xl md:text-6xl lg:text-8xl tracking-tighter leading-tight mb-4 whitespace-normal lg:whitespace-nowrap"
          >
            Vitor{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Madeira
            </span>
          </motion.h1>
          <div className="space-y-4 mb-10">
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-primary text-md sm:text-xl md:text-2xl font-headline font-bold min-h-[2.2rem] whitespace-nowrap"
            >
              {" "}
              <TypewriterRole />{" "}
              <span className="ml-1 animate-pulse">|</span>{" "}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-on-surface-variant text-xl md:text-2xl font-body max-w-lg leading-relaxed lg:max-w-lg"
            >
              Construo interfaces modernas e performáticas com{" "}
              <span className="text-on-surface">React</span>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row gap-4 w-full max-w-xs lg:max-w-none"
          >
            <a
              className="px-8 py-4 bg-linear-to-br from-primary to-primary-container text-on-primary-container font-headline font-bold rounded-full hover:shadow-[0_0_30px_rgba(106,242,222,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full lg:w-auto"
              href="https://github.com/MadeiraVitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_outward"
              >
                arrow_outward
              </span>
            </a>
            <a
              className="px-8 py-4 border-3 border-outline-variant/50 text-primary font-headline font-bold rounded-full hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full lg:w-auto"
              href="https://www.linkedin.com/in/vitor-madeira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_outward"
              >
                arrow_outward
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="z-10 relative w-100 h-100 rounded-2xl overflow-visible hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div
            className="
              relative
              w-100 h-100
              rounded-full
              p-0.75
              bg-linear-to-br from-cyan-400/30 to-blue-500/30
              shadow-[0_0_40px_rgba(0,255,200,0.3)]
              animate-pulse-slow
            "
          >
            <div
              className="
                w-full h-full
                rounded-full
                overflow-hidden
                bg-[#020617]
                flex items-center justify-center
              "
            >
              <img
                src={setupFuturista}
                alt="Developer"
                className="w-full h-full object-cover object-[65%_50%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
