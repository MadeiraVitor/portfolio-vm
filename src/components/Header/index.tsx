export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-outline-variant/30 transition-colors duration-300">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a className="flex items-center gap-2 group cursor-pointer" href="#inicio" aria-label="Ir para o topo">
          <span className="w-10 h-10 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary-container transition-all duration-300">
            <span className="font-headline font-black text-xl tracking-tighter text-primary group-hover:text-on-primary-container">
              VM
            </span>
          </span>
        </a>

        <nav aria-label="Navegacao principal">
          <ul className="hidden md:flex items-center space-gap-8 gap-8">
            <li>
              <a
                className="text-slate-400 hover:text-[#6af2de] transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200"
                href="#sobre"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-[#6af2de] transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200"
                href="#habilidades"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-[#6af2de] transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200"
                href="#projetos"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-[#6af2de] transition-colors font-['Manrope'] font-bold tracking-tight text-sm hover:scale-105 duration-200"
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button className="text-[#6af2de] hover:scale-105 transition-transform duration-200 cursor-pointer" aria-label="Alternar tema">
          <span className="material-symbols-outlined" data-icon="light_mode">
            light_mode
          </span>
        </button>
      </div>
    </header>
  );
};
