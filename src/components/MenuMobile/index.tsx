import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaCode, FaEnvelope, FaFolderOpen, FaUser } from "react-icons/fa";

export const MenuMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer flex items-center"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <IoMenu
          className="text-primary text-3xl md:hidden"
          aria-label="Abrir menu"
        />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-600 ease-in-out`}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 bottom-0 bg-background transition-all duration-500 ease-in-out w-full`}
        >
          <header className="bg-black p-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-primary font-headline font-extrabold tracking-[0.18em] uppercase text-xl">
                  Navegação
                </p>
                <span className="mt-2 block h-0.5 w-8 bg-primary" />
              </div>

              <IoMdClose
                className="cursor-pointer text-2xl text-on-surface-variant hover:text-primary transition-colors"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            </div>
          </header>

          <nav aria-label="Navegação mobile principal">
            <ul className="bg-black min-h-screen w-full p-10 flex flex-col gap-6">
              <li>
                <a
                  href="#sobre"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent py-4 px-5 text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary transition-colors"
                >
                  <FaUser className="text-xl" />
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold">
                    Sobre
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#habilidades"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent py-4 px-5 text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary transition-colors"
                >
                  <FaCode className="text-xl" />
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold">
                    Habilidades
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent py-4 px-5 text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary transition-colors"
                >
                  <FaFolderOpen className="text-xl" />
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold">
                    Projetos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent py-4 px-5 text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold">
                    Contato
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
