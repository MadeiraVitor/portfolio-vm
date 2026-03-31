import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="py-16 md:py-32 px-3 md:px-6 bg-black" id="contato">
      <motion.div
        initial={{ opacity: 0, y: 76 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-zinc-900/30 rounded-3xl p-4 md:p-16 border border-outline-variant/20 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-6">
              Vamos
              <span className="text-primary"> conversar?</span>
            </h3>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl">
              Estou aberto a novas oportunidades e parcerias. Conecte-se comigo
              através de qualquer um dos canais abaixo.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* <!-- WhatsApp --> */}
              <a
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
                href="https://wa.me/5548998411187"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-2xl border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(106,242,222,0.3)] transition-all duration-300">
                  <FaWhatsapp className="text-primary text-4xl" />
                </div>
                <span className="text-on-surface font-headline font-bold tracking-tight group-hover:text-primary transition-colors">
                  WhatsApp
                </span>
              </a>
              {/* <!-- LinkedIn --> */}
              <a
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
                href="https://www.linkedin.com/in/vitor-madeira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-2xl border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(106,242,222,0.3)] transition-all duration-300">
                  <FaLinkedinIn className="text-primary text-4xl" />
                </div>
                <span className="text-on-surface font-headline font-bold tracking-tight group-hover:text-primary transition-colors">
                  LinkedIn
                </span>
              </a>
              {/* <!-- Email --> */}
              <a
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
                href="mailto:vitorsoutom@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-2xl border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(106,242,222,0.3)] transition-all duration-300">
                  <FaEnvelope className="text-primary text-4xl" />
                </div>
                <span className="text-on-surface font-headline font-bold tracking-tight group-hover:text-primary transition-colors">
                  Email
                </span>
              </a>
              {/* <!-- GitHub --> */}
              <a
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
                href="https://github.com/MadeiraVitor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-2xl border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(106,242,222,0.3)] transition-all duration-300">
                  <FaGithub className="text-primary text-4xl" />
                </div>
                <span className="text-on-surface font-headline font-bold tracking-tight group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
