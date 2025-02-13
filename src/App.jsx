import React, { useEffect } from "react";
import Click from "./components/handleClick";
import CopyEmail from "./components/copyEmail";
import ThemeSwitcher from "./components/themeSwitcher";

function App() {
  // Función para actualizar las coordenadas del mouse
  const handleMouseMove = (e) => {
    const root = document.documentElement;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    // Ajusta las coordenadas del mouse considerando el desplazamiento
    root.style.setProperty("--mouse-x", `${e.clientX + scrollX}px`);
    root.style.setProperty("--mouse-y", `${e.clientY + scrollY}px`);
    root.style.setProperty("--focus-visibility", "visible"); // Asegura que sea visible al mover el mouse
  };

  const handleScroll = () => {
    const root = document.documentElement;
    root.style.setProperty("--focus-visibility", "hidden"); // Oculta el foco durante el scroll
  };

  useEffect(() => {
    // Escuchar el movimiento del mouse y el evento de scroll
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Limpiar eventos al desmontar el componente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      
      <div className="font-Poppins p-5 dark:bg-dynamic-light-dark bg-dynamic-light-light flex flex-col gap-20 sm:px-20 md:px-40 lg:p-20 lg:flex-row lg:gap-0 xl:px-40 2xl:px-56 3xl:px-80">
        {/* me */}
        <div className="flex flex-col gap-3 lg:fixed lg:w-1/4">
          
          <ThemeSwitcher customClass="block lg:hidden ml-auto" />
          <p className="dark:text-primary-dark text-primary-light text-5xl">Alexandro Lucero</p>
          <h1 className="dark:text-primary-dark text-primary-light text-xl">Front End Developer</h1>
          <p className="dark:text-secondary-dark text-secondary-light text-lg">Diseño responsive, pixel-perfect, atención al detalle.</p>
          {/* contact */}
          <div className="flex gap-3 text-2xl items-center flex-wrap md:text-3xl lg:mb-10">
            <a href="https://github.com/Alexrulu" target="_blank"><i className="fa-brands fa-github dark:text-secondary-dark text-secondary-light hover:dark:text-primary-dark hover:text-primary-light transition duration-300"></i></a>
            <a href="https://www.linkedin.com/in/alexandro-lucero-16602b2a4/" target="_blank"><i className="fa-brands fa-linkedin dark:text-secondary-dark text-secondary-light hover:dark:text-primary-dark hover:text-primary-light transition duration-300"></i></a>
            <a href="https://www.instagram.com/alexrulu/" target="_blank"><i className="fa-brands fa-instagram dark:text-secondary-dark text-secondary-light hover:dark:text-primary-dark hover:text-primary-light transition duration-300"></i></a>
            <CopyEmail />
          </div>
          <Click />
          
        </div>

        <div className="flex flex-col gap-20 lg:w-3/5 lg:ml-auto lg:gap-40 xl ">

          {/* my proyects */}
          <div className="flex flex-col relative gap-3" id="myProyects">
            <p className="dark:text-primary-dark text-primary-light text-lg">MIS PROYECTOS</p>
            <ThemeSwitcher customClass="hidden lg:block absolute top-4 right-4" />
            <div className="flex flex-col gap-6">
              <p className="dark:text-secondary-dark text-secondary-light">Noviembre 2024 (2 meses)</p>
              <a href="https://alexandrolucerokeytodreamsb2-production.up.railway.app/" target="_blank">
                <img src="/images/keytodream.png" alt="keytodream" className="rounded-xl lg:opacity-50 hover:opacity-100 transition duration-300 dark:shadow-custom-dark shadow-custom-light" />
              </a>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="dark:text-tertiary-dark text-tertiary-light dark:bg-bgsecondary-dark bg-bgsecondary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">HTML</span>
                <span className="dark:text-tertiary-dark text-tertiary-light dark:bg-bgsecondary-dark bg-bgsecondary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">CSS</span>
                <span className="dark:text-tertiary-dark text-tertiary-light dark:bg-bgsecondary-dark bg-bgsecondary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">JavaScript</span>
                <span className="dark:text-tertiary-dark text-tertiary-light dark:bg-bgsecondary-dark bg-bgsecondary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">Expressjs</span>
                <a href="https://github.com/Alexrulu/alexandroLucero_KeyToDreamSB2" target="_blank" className="no-underline dark:text-secondary-dark text-secondary-light hover:dark:text-primary-dark hover:text-primary-light transition duration-300 text-lg"><i className="fa-brands fa-github"></i> Repositorio</a>
              </div>
              <p className="dark:text-secondary-dark text-secondary-light text-lg">
                KEY TO DREAM, es un proyecto ficticio para el curso de fullstack, la web tiene un diseño minimalista,   animaciones, y además le realicé el backend (login, register, publicar propiedades, favoritos, etc) es   completamente funcional.</p>
            </div>
          </div>
        
          {/* about */}
          <div className="flex flex-col gap-5" id="aboutMe">
            <p className="dark:text-primary-dark text-primary-light text-xl">SOBRE MI</p>
            <p className="dark:text-secondary-dark text-secondary-light text-lg">
              Me encuentro cursando el segundo año de la Tecnicatura en Programación en la Universidad Nacional de   General Sarmiento (Actualmente en vacaciones) y finalizando un curso sincrónico de Full Stack Developer en FORMAR.
            </p>
            <p className="dark:text-secondary-dark text-secondary-light text-lg">
              Cuento con un gran entusiasmo por contribuir con mis conocimientos y habilidades, al mismo tiempo que   estoy abierto a seguir aprendiendo y creciendo. Estoy seguro de que juntos podemos lograr excelentes resultados.
            </p>
          </div>

          {/* my skills */}
          <div className="flex flex-col gap-5" id="mySkills">
            <p className="dark:text-primary-dark text-primary-light text-xl">MIS HABILIDADES</p>
            <div className="flex flex-wrap gap-3">
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">HTML</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">CSS</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">JavaScript</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">Tailwind</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">React</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">Express</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">Git - Github</span>
              <span className="dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light py-1 px-2 rounded-xl dark:shadow-custom-dark shadow-custom-light">Miro</span>
              <span className="py-1 px-2 rounded-xl dark:shadow-custom-dark dark:bg-white/10 dark:text-white/70 bg-black/5 text-black/70 shadow-custom-light">Inglés</span>
              <span className="py-1 px-2 rounded-xl dark:shadow-custom-dark dark:bg-white/10 dark:text-white/70 bg-black/5 text-black/70 shadow-custom-light">Español</span>
              
            </div>
          </div>

          {/* footer */}
          <p className="dark:text-secondary-dark text-secondary-light">Esta web fue echa con React.js, Tailwind Css, y desplegado en Vercel.</p>

        </div>
      </div>
    </>
  );
}

export default App;
