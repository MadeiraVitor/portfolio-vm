import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { motion } from "motion/react";
import { useContext } from "react";
import {
  SiDbeaver,
  SiDocker,
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { ThemeContext } from "../../contexts/ThemeContext";

const cardsContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  const sectionClassName = `py-20 md:py-32 px-3 md:px-6 relative overflow-hidden ${
    isDarkTheme ? "bg-black" : "bg-[#eceff3]"
  }`;

  const headingClassName = `text-4xl md:text-5xl font-headline font-black mb-6 ${
    isDarkTheme ? "text-on-surface" : "text-[#0f172a]"
  }`;

  const stackHighlightClassName = isDarkTheme
    ? "text-primary"
    : "text-[#006D62]";

  const dividerClassName = `h-1.5 w-24 mx-auto rounded-full ${
    isDarkTheme ? "bg-primary" : "bg-[#006D62]"
  }`;

  const cardClassName = `rounded-3xl p-8 border transition-all duration-300 ${
    isDarkTheme
      ? "bg-zinc-900/40 border-outline-variant/20 hover:border-primary/30"
      : "bg-[#f3f5f8] border-slate-300/70 hover:border-[#6adbcf] shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
  }`;

  const cardTitleClassName = `font-headline font-bold text-lg mb-8 pb-4 border-b ${
    isDarkTheme
      ? "text-on-surface border-outline-variant/20"
      : "text-slate-700 border-slate-200"
  }`;

  const techItemClassName = `flex flex-col items-center gap-2 p-4 rounded-2xl border group transition-all ${
    isDarkTheme
      ? "bg-black/40 border-outline-variant/10 hover:border-primary/40"
      : "bg-[#eceff3] border-slate-200 hover:border-[#6adbcf]"
  }`;

  const techLabelClassName = `text-xs font-bold transition-colors ${
    isDarkTheme
      ? "text-on-surface-variant group-hover:text-primary"
      : "text-slate-500 group-hover:text-[#0f766e]"
  }`;

  return (
    <section className={sectionClassName} id="habilidades">
      <div
        className={`absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent to-transparent ${
          isDarkTheme ? "via-primary/30" : "via-slate-300"
        }`}
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className={headingClassName}>
            Minhas <span className={stackHighlightClassName}>Stacks</span>
          </h2>
          <div className={dividerClassName}></div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className={cardClassName} variants={cardVariants}>
            <h4 className={cardTitleClassName}>Front-end</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className={techItemClassName}>
                <FaReact className="text-3xl mb-1 text-[#61DAFB]" />
                <span className={techLabelClassName}>React</span>
              </div>
              <div className={techItemClassName}>
                <SiTypescript className="text-3xl mb-1 text-[#3178C6] bg-white rounded-xs" />
                <span className={techLabelClassName}>TypeScript</span>
              </div>
              <div className={techItemClassName}>
                <SiJavascript className="text-3xl mb-1 text-[#F7DF1E] bg-black" />
                <span className={techLabelClassName}>JavaScript</span>
              </div>

              <div className={techItemClassName}>
                <SiTailwindcss className="text-3xl mb-1 text-[#06B6D4]" />
                <span className={techLabelClassName}>Tailwind CSS</span>
              </div>
            </div>
          </motion.div>

          <motion.div className={cardClassName} variants={cardVariants}>
            <h4 className={cardTitleClassName}>Back-end</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className={techItemClassName}>
                <FaNodeJs className="text-3xl mb-1 text-[#5FA04E]" />
                <span className={techLabelClassName}>Node.js</span>
              </div>
              <div className={techItemClassName}>
                <SiPostgresql className="text-3xl mb-1 text-[#4169E1]" />
                <span className={techLabelClassName}>PostgreSQL</span>
              </div>
              <div className={techItemClassName}>
                <SiExpress className="text-3xl mb-1 text-slate-500" />
                <span className={techLabelClassName}>Express</span>
              </div>

              <div className={techItemClassName}>
                <SiPrisma className="text-3xl mb-1 text-[#2D3748]" />
                <span className={techLabelClassName}>Prisma</span>
              </div>
            </div>
          </motion.div>
          {/* <!-- Ferramentas --> */}
          <motion.div className={cardClassName} variants={cardVariants}>
            <h4 className={cardTitleClassName}>Ferramentas</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className={techItemClassName}>
                <FaGitAlt className="text-3xl mb-1 text-[#F05032]" />
                <span className={techLabelClassName}>Git</span>
              </div>
              <div className={techItemClassName}>
                <FaFigma className="text-3xl mb-1 text-[#F24E1E]" />
                <span className={techLabelClassName}>Figma</span>
              </div>
              <div className={techItemClassName}>
                <SiVite className="text-3xl mb-1 text-[#646CFF]" />
                <span className={techLabelClassName}>Vite</span>
              </div>
              <div className={techItemClassName}>
                <SiDbeaver className="text-3xl mb-1 text-[#A63A2B]" />
                <span className={techLabelClassName}>DBeaver</span>
              </div>
              <div className={techItemClassName}>
                <SiDocker className="text-3xl mb-1 text-[#2496ED]" />
                <span className={techLabelClassName}>Docker</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
