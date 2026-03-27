import NetworkBackground from "../NetworkBackground";
import setupFuturista from "../../assets/images/setup-futurista.png";
import { TypewriterRole } from "../TypewriterRole";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-green-400/10 to-cyan-400/10 blur-2xl" />
        <NetworkBackground />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-60 items-center">
        <div className="z-10 lg:pl-12 flex flex-col items-start text-left">
          <h1 className="text-on-surface font-headline font-black text-6xl md:text-8xl tracking-tighter leading-tight mb-4 whitespace-nowrap">
            Vitor{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Madeira
            </span>
          </h1>
          <div className="space-y-4 mb-10">
            <p className="text-primary text-lg sm:text-xl md:text-3xl font-headline font-bold min-h-[2.2rem] whitespace-nowrap">
              {" "}
              <TypewriterRole />{" "}
              <span className="ml-1 animate-pulse">|</span>{" "}
            </p>
            <p className="text-on-surface-variant text-xl md:text-2xl font-body max-w-lg leading-relaxed">
              Construo interfaces modernas e performáticas com{" "}
              <span className="text-on-surface">React</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="px-8 py-4 bg-linear-to-br from-primary to-primary-container text-on-primary-container font-headline font-bold rounded-full hover:shadow-[0_0_30px_rgba(106,242,222,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              href="https://github.com/MadeiraVitor"
              target="_blank"
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
              className="px-8 py-4 border-3 border-outline-variant/50 text-primary font-headline font-bold rounded-full hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              href="https://www.linkedin.com/in/vitor-madeira/"
              target="_blank"
            >
              LinkedIn
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_outward"
              >
                arrow_outward
              </span>
            </a>
          </div>
        </div>

        <div className="z-10 relative w-100 h-100 rounded-2xl overflow-visible">
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
