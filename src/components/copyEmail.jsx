import { useState } from 'react';

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copiar el correo al portapapeles
    navigator.clipboard.writeText("alexandro71000@gmail.com");
    // Mostrar el mensaje de "Copiado!"
    setCopied(true);

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <span className="dark:text-secondary-dark text-secondary-light hover:text-primary-light hover:dark:text-primary-dark transition duration-300 flex text-lg gap-2 cursor-pointer no-underline"
        onClick={handleCopy}>alexandro71000@gmail.com<i className="fa-regular fa-copy text-xl"></i>
      </span>
      <div className={`absolute top-[30px] left-0 dark:bg-bgsecondary-dark bg-bgsecondary-light dark:text-tertiary-dark text-tertiary-light text-sm py-1 px-2 rounded shadow transition-opacity duration-300 
      ${copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>¡Copiado!
      </div>
    </div>
  );
};

export default CopyEmail;
