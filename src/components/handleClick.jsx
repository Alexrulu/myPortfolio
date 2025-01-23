import React, { useState } from 'react';

const Click = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const getClassNames = (section) => {
    return `text-lg hidden lg:flex items-center py-2 transition duration-300 ${activeSection === section ? 'dark:text-primary-dark text-primary-light' : 'dark:text-secondary-dark text-secondary-light'}`;
  };

  const getClassNamesSpan = (section) => {
    return `block h-[1px] dark:bg-secondary-dark bg-secondary-light mr-3 transition-width duration-300 ${activeSection === section ? 'w-16' : 'w-10'}`;
  }

  return (
    <div>
      <a className={getClassNames('proyectos')} onClick={() => handleClick('proyectos')} href='#myProyects'>
        <span className={getClassNamesSpan('proyectos')} onClick={() => handleClick('proyectos')}></span>MIS PROYECTOS
      </a>
      <a className={getClassNames('sobreMi')} onClick={() => handleClick('sobreMi')} href='#aboutMe'>
        <span className={getClassNamesSpan('sobreMi')} onClick={() => handleClick('sobreMi')}></span>SOBRE MI
      </a>
      <a className={getClassNames('habilidades')} onClick={() => handleClick('habilidades')} href='#mySkills'>
        <span className={getClassNamesSpan('habilidades')} onClick={() => handleClick('habilidades')}></span>MIS HABILIDADES
      </a>
    </div>
  );
};

export default Click;