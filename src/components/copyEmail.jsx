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
      <span className="text-secondary hover:text-primary transition duration-300 flex text-lg gap-2 cursor-pointer"
        onClick={handleCopy}>alexandro71000@gmail.com<i className="fa-regular fa-copy text-xl"></i>
      </span>
      <div className={`absolute top-[30px] left-0 bg-bgsecondary text-tertiary text-sm py-1 px-2 rounded shadow transition-opacity duration-300 
      ${copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>¡Copiado!
      </div>
    </div>
  );
};

export default CopyEmail;
