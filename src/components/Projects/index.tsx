import imageSyntaxwear from "../../assets/images/syntaxwear.png";
import imageGhibli from "../../assets/images/ghibli.png";
import imagePokedex from "../../assets/images/pokedex.png";
import imageTodo from "../../assets/images/todo.png";

export const Projects = () => {
  return (
    <section
      className="py-20 md:py-32 md:px-6 bg-black relative overflow-hidden"
      id="projetos"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-6">
            Meus <span className="text-primary">Projetos</span>
          </h3>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="flex gap-2.5 md:grid grid-cols-1 md:grid-cols-2 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {/* <!-- Project Card 1 --> */}
          <div className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[92%] md:w-full snap-center ml-2.5 md:ml-0">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Syntaxwear Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imageSyntaxwear}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  React
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  Tailwind
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">
                Ecommerce SyntaxWear
              </h4>
              <p className="text-on-surface-variant mb-8">
                Aplicação de uma loja virtual de calçados desenvolvida com foco
                em navegação moderna, experiência de compra e organização de
                componentes reutilizáveis.
              </p>
              <div className="flex gap-4">
                <a
                  className="flex items-center gap-1 font-bold hover:text-primary transition-all"
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
                  className="flex items-center gap-1  hover:text-primary transition-colors"
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
          </div>
          {/* <!-- Project Card 2 --> */}
          <div className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[90%] md:w-full snap-center">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Ghibli Films Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imageGhibli}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  React
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  Fetch API
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">
                Studio Ghibli Films
              </h4>
              <p className="text-on-surface-variant mb-8">
                Aplicação desenvolvida para consumir a API pública do Studio
                Ghibli, listando os 10 primeiros filmes em ordem alfabética e
                exibindo seus detalhes em uma página interna.
              </p>
              <div className="flex gap-4">
                <a
                  className="flex items-center gap-1 font-bold hover:text-primary transition-all"
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
                  className="flex items-center gap-1  hover:text-primary transition-colors"
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
          </div>
          {/* <!-- Project Card 3 --> */}
          <div className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[90%] md:w-full snap-center">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Pokedex Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imagePokedex}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  React
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  Fetch API
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">
                Pokédex
              </h4>
              <p className="text-on-surface-variant mb-8">
                Aplicação desenvolvida como Single Page Application (SPA) para
                listar Pokémons utilizando a PokeAPI, com sistema de tema
                claro/escuro e página de detalhes dinâmica.
              </p>
              <div className="flex gap-4">
                <a
                  className="flex items-center gap-1 font-bold hover:text-primary transition-all"
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
                  className="flex items-center gap-1  hover:text-primary transition-colors"
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
          </div>
          {/* <!-- Project Card 4 --> */}
          <div className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[92%] md:w-full snap-center mr-2.5 md:mr-0">
            <div className="aspect-video overflow-hidden">
              <img
                alt="To-Do App Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={imageTodo}
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  React
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">
                  Context API
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">
                To-Do App
              </h4>
              <p className="text-on-surface-variant mb-8">
                Aplicação de gerenciamento de tarefas desenvolvida com foco em
                interatividade, manipulação de estado e experiência do usuário,
                incluindo sistema de filtros e alternância entre tema claro e
                escuro.
              </p>
              <div className="flex gap-4">
                <a
                  className="flex items-center gap-1 font-bold hover:text-primary transition-all"
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
                  className="flex items-center gap-1  hover:text-primary transition-colors"
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
          </div>
        </div>
      </div>
    </section>
  );
};
