export const Projects = () => {
    return (
        <section className="py-32 md:px-6 bg-black relative overflow-hidden" id="projetos">
            <div
                className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent">
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-6">Meus <span
                            className="text-primary">Projetos</span></h3>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="flex gap-2.5 md:grid grid-cols-1 md:grid-cols-2 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                    {/* <!-- Project Card 1 --> */}
                    <div
                        className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[92%] md:w-full snap-center ml-2.5 md:ml-0">
                        <div className="aspect-video overflow-hidden">
                            <img alt="Dashboard Project"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGL3gydvJ3bcY6b2lcgNwNmtv7YLoYAuQF-_p5kCUuBgY6hWQfwgdeUsfnEyAOygXhNKFrgMtVnHAGF0bPITBdjIhObZlgTsyGBAUN-FiZmJIbqImgBGHR-qWlj-VZVhJNiMTddQ8wX_L2-olwA5hSG2Eo_rQ9EPP2c0obEH10wzsb1n15Fc0fgIoPLDzX6vUrvYMlJKrSmI7kDXDlwWVEtb0u2M-8CW_APRDiOe1mdU5CdkpSOxup3qba42_sCdtwP8ru4s8AvFE1" />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">React</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">TypeScript</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Tailwind</span>
                            </div>
                            <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">Luminous Finance</h4>
                            <p className="text-on-surface-variant mb-8">
                                Dashboard financeiro completo com integração de gráficos em tempo real e sistema de
                                gerenciamento de ativos.
                            </p>
                            <div className="flex gap-4">
                                <a className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                    href="#">
                                    Live Demo <span className="material-symbols-outlined text-sm"
                                        data-icon="open_in_new">open_in_new</span>
                                </a>
                                <a className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
                                    href="#">
                                    GitHub <span className="material-symbols-outlined text-sm" data-icon="code">code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Project Card 2 --> */}
                    <div
                        className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[90%] md:w-full snap-center">
                        <div className="aspect-video overflow-hidden">
                            <img alt="E-commerce Project"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-fB3RhZi-WGoFqDKGgsRK5_vOqOCnubyKq49VD3FAG9BMBWYOmUnPmVt8ODoh1ymwNTMOSRrm3Mapkjh4ucvld39kukjWBHu9HCt4blwm80ViOn630bcC9f2FVc9VWSNIa41Zd9pgvOZ1AgI2eEvc3Fd5OR07Y0QPk7FXF_KyGiyB_B7TLZd5NpgHTJjIZmtPQEb_5LTB41U-ga35j4IliQp10tsbHyqNDELryiOLpISjH4t75M6J5EUf9_OK-HHho1dnYG2SiAep" />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Vite</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Framer
                                    Motion</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Redux</span>
                            </div>
                            <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">Nexus Store</h4>
                            <p className="text-on-surface-variant mb-8">
                                E-commerce de moda tecnológica com transições fluidas, carrinho persistente e sistema de
                                filtros avançado.
                            </p>
                            <div className="flex gap-4">
                                <a className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                    href="#">
                                    Live Demo <span className="material-symbols-outlined text-sm"
                                        data-icon="open_in_new">open_in_new</span>
                                </a>
                                <a className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
                                    href="#">
                                    GitHub <span className="material-symbols-outlined text-sm" data-icon="code">code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Project Card 3 --> */}
                    <div
                        className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[90%] md:w-full snap-center">
                        <div className="aspect-video overflow-hidden">
                            <img alt="EcoTrack Project"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmcgt1drVZPIkyrpwAXFkYy3aUOf9wdm7xMX7s-8s2ZJSonxi0oaW6LPCiMBTASiLV3QzG3_W-n2o_r_vPTYA49Y3ZKKRMM89UITJHv19TfmSBBbSn8F3zdyPZz2pzIx6f3eZROcW49ArSWccf6_F5lnjA57Io3-euluFVg1vxvPJy-z0dyc7lKaOoY5m_0l-cLmLR2zM_udyWUw_XDNDlZuHe3K2CWhnxYZ9_A6A0LUqYHboQx3S5U9lzVjuk-al9jeNZMyktjiKw" />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">React</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Node.js</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">PostgreSQL</span>
                            </div>
                            <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">EcoTrack</h4>
                            <p className="text-on-surface-variant mb-8">
                                Plataforma de monitoramento de sustentabilidade para empresas com análise de pegada de
                                carbono e relatórios automatizados.
                            </p>
                            <div className="flex gap-4">
                                <a className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                    href="#">
                                    Live Demo <span className="material-symbols-outlined text-sm"
                                        data-icon="open_in_new">open_in_new</span>
                                </a>
                                <a className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
                                    href="#">
                                    GitHub <span className="material-symbols-outlined text-sm" data-icon="code">code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Project Card 4 --> */}
                    <div
                        className="group relative bg-zinc-500/40 rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl shrink-0 w-[92%] md:w-full snap-center mr-2.5 md:mr-0">
                        <div className="aspect-video overflow-hidden">
                            <img alt="CloudVibe Project"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd9i4tbe-l2t9XiGwDwAGzrK9PSrOjSn7bv2l9QnwcZCxy5ZIlaQ12mtTe65cXy3dKZhQB-uiFFkzofmGZRxzXb0ylP4eeGJimIjjG1IfXMuzG_OaBxe6XIh74T8WMfdfZ_72LL2yTivpGsjaGFaf2Vu5rmAythP1N6hvx0FSnOxBifTxbK2CdDjXoXNkyEJcxvAc6R3i-RK_oMqmhqLyV8YVFIa7OGZuFlz4VIv279z6eMb53pv-vqbO0CPbg7ZnnMavGxm_nvNWk" />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Next.js</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Tailwind
                                    CSS</span>
                                <span
                                    className="px-3 py-1 bg-black/50 text-primary text-xs font-bold rounded-full border border-primary/20">Supabase</span>
                            </div>
                            <h4 className="text-2xl font-headline font-bold text-on-surface mb-3">CloudVibe</h4>
                            <p className="text-on-surface-variant mb-8">
                                Serviço de streaming de música moderno com foco em artistas independentes, áudio de alta
                                fidelidade e playlists dinâmicas.
                            </p>
                            <div className="flex gap-4">
                                <a className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                    href="#">
                                    Live Demo <span className="material-symbols-outlined text-sm"
                                        data-icon="open_in_new">open_in_new</span>
                                </a>
                                <a className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
                                    href="#">
                                    GitHub <span className="material-symbols-outlined text-sm" data-icon="code">code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}