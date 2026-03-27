import fotoPerfil from "../../assets/images/foto-perfil.png";

export const About = () => {
  return (
    <section className="py-32 px-6 bg-black" id="sobre">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/30 rounded-3xl p-8 md:p-16 border border-outline-variant/20 relative overflow-hidden flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-12">
            <span className="text-on-surface">Sobre</span>{" "}
            <span className="text-primary">Mim</span>
          </h2>
          <div className="relative w-48 h-64 md:w-56 md:h-72 mb-10 group">
            <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">
              <img
                alt="Vitor Madeira Profile Photo"
                className="w-full h-full object-cover"
                src={fotoPerfil}
              />
            </div>
          </div>
          <div className="max-w-2xl mb-10">
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Desenvolvedor Front-End com foco em React e TypeScript, atuando na
              construção de interfaces modernas, performáticas e bem
              estruturadas. Utilizo TypeScript para
              aumentar a previsibilidade do código e reduzir erros em tempo de
              desenvolvimento. Tenho como prioridade escrever código limpo,
              organizado e escalável, seguindo boas práticas e versionamento com
              Git. Busco evoluir constantemente em arquitetura de projetos,
              performance e experiência do usuário.
            </p>
          </div>
          <a
            className="px-10 py-4 bg-primary text-on-primary-container font-headline font-black rounded-xl hover:shadow-[0_0_30px_rgba(106,242,222,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            href="/curriculo-vitor-madeira.pdf"
            download
          >
            <span className="material-symbols-outlined" data-icon="download">
              download
            </span>
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
};
