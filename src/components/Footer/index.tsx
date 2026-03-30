import { FaCode, FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/30 bg-black">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8">
        {/* <!-- VM Logo --> */}
        <div className="flex justify-center md:justify-start">
          <a
            className="flex items-center gap-2 group cursor-pointer"
            href="#hero"
            aria-label="Ir para o topo"
          >
            <span className="w-10 h-10 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary-container transition-all duration-300">
              <span className="font-headline font-black text-xl tracking-tighter text-primary group-hover:text-on-primary-container">
                VM
              </span>
            </span>
          </a>
        </div>
        {/* <!-- Credits --> */}
        <div className="text-center">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Portfólio Profissional desenvolvido por <br/>
            <span className="text-primary font-bold"> Vitor Madeira</span>
          </p>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-outline mt-2">
            © 2026 Todos os direitos reservados
          </p>
        </div>
        {/* <!-- Navigation Icons --> */}
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center gap-1 py-1 px-3 border-3 border-outline-variant/30 rounded-full bg-transparent">
            <a
              className="p-3 hover:text-primary hover:bg-primary/10 rounded-full text-outline transition-all duration-300 group"
              href="#hero"
            >
              <FaHome className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              className="p-3 hover:text-primary hover:bg-primary/10 rounded-full text-outline transition-all duration-300 group"
              href="#sobre"
            >
              <FaUser className="block text-md group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              className="p-3 hover:text-primary hover:bg-primary/10 rounded-full text-outline transition-all duration-300 group"
              href="#habilidades"
            >
              <FaCode className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              className="p-3 hover:text-primary hover:bg-primary/10 rounded-full text-outline transition-all duration-300 group"
              href="#projetos"
            >
              <FaFolderOpen className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              className="p-3 hover:text-primary hover:bg-primary/10 rounded-full text-outline transition-all duration-300 group"
              href="#contato"
            >
              <FaEnvelope className="block text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
