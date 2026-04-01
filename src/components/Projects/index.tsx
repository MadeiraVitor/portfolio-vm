import imageSyntaxwear from "../../assets/images/syntaxwear.png";
import imageGhibli from "../../assets/images/ghibli.png";
import imagePokedex from "../../assets/images/pokedex.png";
import imageTodo from "../../assets/images/todo.png";
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const projectCardsContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  const sectionClassName = `py-20 md:py-32 md:px-6 relative overflow-hidden ${
    isDarkTheme ? "bg-black" : "bg-[#eceff3]"
  }`;

  const headingClassName = `text-4xl md:text-5xl font-headline font-black mb-6 ${
    isDarkTheme ? "text-on-surface" : "text-[#0f172a]"
  }`;

  const projectsHighlightClassName = isDarkTheme
    ? "text-primary"
    : "text-[#006D62]";

  const dividerClassName = `h-1.5 w-24 mx-auto rounded-full ${
    isDarkTheme ? "bg-primary" : "bg-[#006D62]"
  }`;

  const cardClassName = `group relative rounded-2xl overflow-hidden border transition-all duration-500 shrink-0 snap-center ${
    isDarkTheme
      ? "bg-zinc-500/40 border-outline-variant/20 hover:border-primary/40 shadow-xl"
      : "bg-[#f8fafc] border-slate-200 hover:border-[#67dbcf] shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
  }`;

  const techTagClassName = `px-3 py-1 text-xs font-bold rounded-full border ${
    isDarkTheme
      ? "bg-black/50 text-primary border-primary/20"
      : "bg-slate-100 text-[#0f766e] border-slate-200"
  }`;

  const projectTitleClassName = `text-2xl font-headline font-bold mb-3 ${
    isDarkTheme ? "text-on-surface" : "text-slate-800"
  }`;

  const projectDescriptionClassName = isDarkTheme
    ? "text-on-surface-variant mb-8"
    : "text-slate-500 mb-8";

  const liveLinkClassName = `flex items-center gap-1 transition-all ${
    isDarkTheme ? "hover:scale-105 hover:shadow-[0_0_30px_rgba(106,242,222,0.5)] bg-primary text-on-primary-container px-4 py-2 rounded-lg active:scale-95" : "hover:scale-105 hover:shadow-[0_0_30px_rgba(0,109,98,0.5)] bg-[#006D62] text-white px-4 py-2 rounded-lg active:scale-95"
  }`;

  const githubLinkClassName = `flex items-center gap-1 transition-all ${
    isDarkTheme ? "hover:scale-105 hover:shadow-[0_0_30px_rgba(106,242,222,0.5)] bg-primary text-on-primary-container px-4 py-2 rounded-lg active:scale-95" : "hover:scale-105 hover:shadow-[0_0_30px_rgba(0,109,98,0.5)] bg-[#006D62] text-white px-4 py-2 rounded-lg active:scale-95"
  }`;

  return (
    <section className={sectionClassName} id="projetos">
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
          <h3 className={headingClassName}>
            Meus <span className={projectsHighlightClassName}>Projetos</span>
          </h3>
          <div className={dividerClassName}></div>
        </div>
        <motion.div
          className="flex gap-2.5 md:grid grid-cols-1 md:grid-cols-2 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          variants={projectCardsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <!-- Project Card 1 --> */}
          <motion.div
            className={`${cardClassName} w-[92%] md:w-full ml-2.5 md:ml-0`}
            variants={projectCardVariants}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                alt="Syntaxwear Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imageSyntaxwear}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={techTagClassName}>React</span>
                <span className={techTagClassName}>TypeScript</span>
                <span className={techTagClassName}>Tailwind</span>
              </div>
              <h4 className={projectTitleClassName}>Ecommerce SyntaxWear</h4>
              <p className={projectDescriptionClassName}>
                Aplicação de uma loja virtual de calçados desenvolvida com foco
                em navegação moderna, experiência de compra e organização de
                componentes reutilizáveis.
              </p>
              <div className="flex gap-4">
                <a
                  className={liveLinkClassName}
                  href="https://syntax-wear-app-sage.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </a>
                <a
                  className={githubLinkClassName}
                  href="https://github.com/MadeiraVitor/syntax-wear-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="code"
                  >
                    code
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          {/* <!-- Project Card 2 --> */}
          <motion.div
            className={`${cardClassName} w-[90%] md:w-full`}
            variants={projectCardVariants}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                alt="Ghibli Films Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imageGhibli}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={techTagClassName}>React</span>
                <span className={techTagClassName}>TypeScript</span>
                <span className={techTagClassName}>Fetch API</span>
              </div>
              <h4 className={projectTitleClassName}>Studio Ghibli Films</h4>
              <p className={projectDescriptionClassName}>
                Aplicação desenvolvida para consumir a API pública do Studio
                Ghibli, listando os 10 primeiros filmes em ordem alfabética e
                exibindo seus detalhes em uma página interna.
              </p>
              <div className="flex gap-4">
                <a
                  className={liveLinkClassName}
                  href="https://ghibli-films-gold.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </a>
                <a
                  className={githubLinkClassName}
                  href="https://github.com/MadeiraVitor/ghibli-films"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="code"
                  >
                    code
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          {/* <!-- Project Card 3 --> */}
          <motion.div
            className={`${cardClassName} w-[90%] md:w-full`}
            variants={projectCardVariants}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                alt="Pokedex Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imagePokedex}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={techTagClassName}>React</span>
                <span className={techTagClassName}>TypeScript</span>
                <span className={techTagClassName}>Fetch API</span>
              </div>
              <h4 className={projectTitleClassName}>Pokédex</h4>
              <p className={projectDescriptionClassName}>
                Aplicação desenvolvida como Single Page Application (SPA) para
                listar Pokémons utilizando a PokeAPI, com sistema de tema
                claro/escuro e página de detalhes dinâmica.
              </p>
              <div className="flex gap-4">
                <a
                  className={liveLinkClassName}
                  href="https://pokedex-project-hazel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </a>
                <a
                  className={githubLinkClassName}
                  href="https://github.com/MadeiraVitor/pokedex-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="code"
                  >
                    code
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          {/* <!-- Project Card 4 --> */}
          <motion.div
            className={`${cardClassName} w-[92%] md:w-full mr-2.5 md:mr-0`}
            variants={projectCardVariants}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                alt="To-Do App Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imageTodo}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={techTagClassName}>React</span>
                <span className={techTagClassName}>TypeScript</span>
                <span className={techTagClassName}>Context API</span>
              </div>
              <h4 className={projectTitleClassName}>To-Do App</h4>
              <p className={projectDescriptionClassName}>
                Aplicação de gerenciamento de tarefas desenvolvida com foco em
                interatividade, manipulação de estado e experiência do usuário,
                incluindo sistema de filtros e alternância entre tema claro e
                escuro.
              </p>
              <div className="flex gap-4">
                <a
                  className={liveLinkClassName}
                  href="https://todolist-three-dusky.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </a>
                <a
                  className={githubLinkClassName}
                  href="https://github.com/MadeiraVitor/todolist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="code"
                  >
                    code
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
