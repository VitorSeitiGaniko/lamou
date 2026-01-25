import { useState } from 'react';

const Nav = () => {
  const [link, setLink] = useState('sobre');

  function handleClick(newLink: string) {
    setLink(newLink);
  }

  return (
    <section className='px-24'>
      <nav>
        <ul className='flex gap-10 *:text-2xl *:cursor-pointer'>
          <li
            className={`py-2 ${link === 'sobre' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('sobre')}
          >
            Sobre o imóvel
          </li>
          <li
            className={`py-2 ${link === 'imagens' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('imagens')}
          >
            Imagens
          </li>
          <li
            className={`py-2 ${link === 'planta' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('planta')}
          >
            Planta
          </li>
          <li
            className={`py-2 ${link === 'beneficios' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('beneficios')}
          >
            Benefícios
          </li>
          <li
            className={`py-2 ${link === 'localizacao' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('localizacao')}
          >
            Localização
          </li>
        </ul>
      </nav>
    </section>
  );
};

export { Nav };
