import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
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

export const Skills = () => {
  return (
    <section
      className="py-32 px-6 bg-black relative overflow-hidden"
      id="habilidades"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-6">
            Minhas <span className="text-primary">Stacks</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-zinc-900/40 rounded-3xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-8 pb-4 border-b border-outline-variant/20">
              Front-end
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <FaReact className="text-3xl mb-1 text-[#61DAFB]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  React
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiTypescript className="text-3xl mb-1 text-[#3178C6]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  TypeScript
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiJavascript className="text-3xl mb-1 text-[#F7DF1E]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  JavaScript
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiTailwindcss className="text-3xl mb-1 text-[#06B6D4]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
         
          <div className="bg-zinc-900/40 rounded-3xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-8 pb-4 border-b border-outline-variant/20">
              Back-end
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <FaNodeJs className="text-3xl mb-1 text-[#5FA04E]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Node.js
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiPostgresql className="text-3xl mb-1 text-[#4169E1]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  PostgreSQL
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiExpress className="text-3xl mb-1 text-[#FFFFFF]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Express
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiPrisma className="text-3xl mb-1 text-[#2D3748]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Prisma
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Ferramentas & Fluxo Category --> */}
          <div className="bg-zinc-900/40 rounded-3xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-8 pb-4 border-b border-outline-variant/20">
              Ferramentas
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <FaGitAlt className="text-3xl mb-1 text-[#F05032]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Git
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <FaFigma className="text-3xl mb-1 text-[#F24E1E]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Figma
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiVite className="text-3xl mb-1 text-[#646CFF]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Vite
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiDbeaver className="text-3xl mb-1 text-[#A63A2B]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  DBeaver
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-black/40 rounded-2xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <SiDocker className="text-3xl mb-1 text-[#2496ED]" />
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
