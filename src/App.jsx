import React, { useEffect } from "react";
import Click from "./components/handleClick";
import CopyEmail from "./components/copyEmail";

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
      
      <div className="font-Poppins p-5 bg-dynamic-light flex flex-col gap-20 sm:px-20 md:px-40 lg:p-20 lg:flex-row lg:gap-0 xl:px-40 2xl:px-56 3xl:px-80">
        {/* me */}
        <div className="flex flex-col gap-3 lg:fixed lg:w-1/4">
          <p className="text-primary text-5xl">Alexandro Lucero</p>
          <h1 className="text-primary text-xl">Front End Developer</h1>
          <p className="text-secondary text-lg">Diseño responsive, pixel-perfect, atención al detalle.</p>
          {/* contact */}
          <div className="flex gap-3 text-2xl items-center flex-wrap md:text-3xl lg:mb-10">
            <a href="https://github.com/Alexrulu" target="_blank"><i className="fa-brands fa-github text-secondary hover:text-primary transition duration-300"></i></a>
            <a href="https://www.linkedin.com/in/alexandro-lucero-16602b2a4/" target="_blank"><i className="fa-brands fa-linkedin text-secondary hover:text-primary transition duration-300"></i></a>
            <a href="https://www.instagram.com/alexrulu/" target="_blank"><i className="fa-brands fa-instagram text-secondary hover:text-primary transition duration-300"></i></a>
            <CopyEmail />
          </div>
          <Click />
        </div>

        <div className="flex flex-col gap-20 lg:w-3/5 lg:ml-auto lg:gap-40 xl ">

          {/* my proyects */}
          <div className="flex flex-col gap-3" id="myProyects">
            <p className="text-primary text-lg">MIS PROYECTOS</p>
            <div className="flex flex-col gap-6">
              <p className="text-secondary">Noviembre 2024 (2 meses)</p>
              <a href="https://alexandrolucerokeytodreamsb2-production.up.railway.app/" target="_blank">
                <img src="/images/keytodream.png" alt="keytodream" className="rounded-xl lg:opacity-50 hover:opacity-100 transition duration-300 shadow-custom" />
              </a>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-tertiary bg-bgsecondary py-1 px-2 rounded-xl shadow-custom">HTML</span>
                <span className="text-tertiary bg-bgsecondary py-1 px-2 rounded-xl shadow-custom">CSS</span>
                <span className="text-tertiary bg-bgsecondary py-1 px-2 rounded-xl shadow-custom">JavaScript</span>
                <span className="text-tertiary bg-bgsecondary py-1 px-2 rounded-xl shadow-custom">Expressjs</span>
                <a href="https://github.com/Alexrulu/alexandroLucero_KeyToDreamSB2" target="_blank" className="no-underline text-secondary hover:text-primary transition duration-300 text-lg"><i className="fa-brands fa-github"></i> Repositorio</a>
              </div>
              <p className="text-secondary text-lg">
                KEY TO DREAM, es un proyecto ficticio para el curso de fullstack, la web tiene un diseño minimalista,   animaciones, y además le realicé el backend (login, register, publicar propiedades, favoritos, etc) es   completamente funcional.</p>
            </div>
          </div>
        
          {/* about */}
          <div className="flex flex-col gap-5" id="aboutMe">
            <p className="text-primary text-xl">SOBRE MI</p>
            <p className="text-secondary text-lg">
              Me encuentro cursando el segundo año de la Tecnicatura en Programación en la Universidad Nacional de   General Sarmiento (Actualmente en vacaciones) y finalizando un curso sincrónico de Full Stack Developer en FORMAR.
            </p>
            <p className="text-secondary text-lg">
              Cuento con un gran entusiasmo por contribuir con mis conocimientos y habilidades, al mismo tiempo que   estoy abierto a seguir aprendiendo y creciendo. Estoy seguro de que juntos podemos lograr excelentes resultados.
            </p>
          </div>

          {/* my skills */}
          <div className="flex flex-col gap-5" id="mySkills">
            <p className="text-primary text-xl">MIS HABILIDADES</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">HTML</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">CSS</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">JavaScript</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">Tailwind</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">React</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">Express</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">Git - Github</span>
              <span className="bg-bgsecondary text-tertiary py-1 px-2 rounded-xl shadow-custom">Miro</span>
            </div>
          </div>

          {/* footer */}
          <p className="text-secondary">Esta web fue echa con React.js, Tailwind Css, y desplegado en Vercel.</p>

        </div>
      </div>
    </>
  );
}

export default App;
