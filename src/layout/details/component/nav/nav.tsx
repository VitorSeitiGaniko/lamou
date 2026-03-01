import { useState } from 'react';

const Nav = () => {
  const [link, setLink] = useState('sobre');

  function handleClick(newLink: string) {
    setLink(newLink);
  }

  return (
    <section className='px-24 hidden lg:block'>
      <nav>
        <ul className='flex gap-10 *:text-2xl *:cursor-pointer'>
          <li
            className={`py-2 ${link === 'sobre' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('sobre')}
          >
            <a href='#about'>Sobre o imóvel</a>
          </li>
          <li
            className={`py-2 ${link === 'imagens' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('imagens')}
          >
            <a href='#images'>Imagens</a>
          </li>
          <li
            className={`py-2 ${link === 'planta' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('planta')}
          >
            <a href='#plant'>Planta</a>
          </li>
          <li
            className={`py-2 ${link === 'beneficios' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('beneficios')}
          >
            <a href='#benefities'>Benefícios</a>
          </li>
          <li
            className={`py-2 ${link === 'localizacao' ? 'font-bold border-b-4' : ''}`}
            onClick={() => handleClick('localizacao')}
          >
            <a href='#location'>Localização</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export { Nav };
