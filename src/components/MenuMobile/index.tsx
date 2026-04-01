import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaCode, FaEnvelope, FaFolderOpen, FaUser } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";

export const MenuMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  return (
    <>
      <button
        className="cursor-pointer flex items-center"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <IoMenu
          className={`text-3xl md:hidden ${
            isDarkTheme ? "text-primary" : "text-[#006D62]"
          }`}
          aria-label="Abrir menu"
        />
      </button>

      <div
        className={`${
          menuIsOpen
            ? isDarkTheme
              ? "bg-black/70 visible"
              : "bg-[#0f172a]/10 visible"
            : "bg-transparent invisible"
        } fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-600 ease-in-out`}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 bottom-0 transition-all duration-500 ease-in-out w-full ${
            isDarkTheme ? "bg-background" : "bg-[#eceff3]"
          }`}
        >
          <header
            className={`p-10 ${isDarkTheme ? "bg-black" : "bg-[#eceff3]"}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className={`font-headline font-extrabold tracking-[0.18em] uppercase text-xl ${
                    isDarkTheme ? "text-primary" : "text-[#006D62]"
                  }`}
                >
                  Navegação
                </p>
                <span
                  className={`mt-2 block h-0.5 w-8 ${
                    isDarkTheme ? "bg-primary" : "bg-[#006D62]"
                  }`}
                />
              </div>

              <IoMdClose
                className={`cursor-pointer text-2xl transition-colors ${
                  isDarkTheme
                    ? "text-on-surface-variant hover:text-primary"
                    : "text-slate-500 hover:text-[#006D62]"
                }`}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            </div>
          </header>

          <nav aria-label="Navegação mobile principal">
            <ul
              className={`min-h-screen w-full p-10 flex flex-col gap-6 ${
                isDarkTheme ? "bg-black" : "bg-[#eceff3]"
              }`}
            >
              <li>
                <a
                  href="#sobre"
                  onClick={() => setMenuIsOpen(false)}
                  className={`flex items-center gap-6 border-l-4 border-transparent py-4 px-5 transition-colors ${
                    isDarkTheme
                      ? "border-transparent text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary"
                      : "text-slate-400 hover:text-[#006D62] hover:bg-[#b1eee4] hover:border-[#006D62]"
                  }`}
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
                  className={`flex items-center gap-6 border-l-4 border-transparent py-4 px-5 transition-colors ${
                    isDarkTheme
                      ? "text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary"
                      : "text-slate-400 hover:text-[#006D62] hover:bg-[#b1eee4] hover:border-[#006D62]"
                  }`}
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
                  className={`flex items-center gap-6 border-l-4 border-transparent py-4 px-5 transition-colors ${
                    isDarkTheme
                      ? "text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary"
                      : "text-slate-400 hover:text-[#006D62] hover:bg-[#b1eee4] hover:border-[#006D62]"
                  }`}
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
                  className={`flex items-center gap-6 border-l-4 border-transparent py-4 px-5 transition-colors ${
                    isDarkTheme
                      ? "text-on-surface-variant hover:text-primary hover:bg-primary/15 hover:border-primary"
                      : "text-slate-400 hover:text-[#006D62] hover:bg-[#b1eee4] hover:border-[#006D62]"
                  }`}
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
