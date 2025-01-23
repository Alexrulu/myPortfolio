import React, { useState, useEffect } from 'react';

const ThemeSwitcher = ({ customClass }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Oscuro por defecto

  useEffect(() => {
    // Asegurar que el tema oscuro esté activo al cargar la página
    document.documentElement.classList.add('dark');
  }, []);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);

    // Alternar entre las clases "dark" y "light" en el <html>
    if (isDarkTheme) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <i
      className={`fa-solid text-3xl cursor-pointer ${
        isDarkTheme
          ? 'fa-moon text-primary-dark [text-shadow:0_0_10px_white]'
          : 'fa-sun text-secondary-light [text-shadow:0_0_10px_white]'
      } ${customClass}`}
      onClick={handleThemeToggle}
    ></i>
  );
};

export default ThemeSwitcher;
