import { Facebook, Instagram, LogoGanikoInside, WhatsApp } from '../../assets';

const Footer = () => {
  return (
    <footer className='bottom-0 w-screen h-133 py-8 lg:py-0 lg:h-48 flex flex-col lg:flex-row bg-[#1C243F] items-center justify-between lg:justify-evenly text-white'>
      <div>
        <h2 className='text-xl lg:text-2xl'>Nossas redes sociais</h2>
        <div className='flex gap-6 mt-4'>
          <a href={'https://www.facebook.com/lamouempreendimentos/'} target='blank'>
            <img src={Facebook} alt='' />
          </a>
          <a href={'https://www.instagram.com/construtora.mg/'} target='blank'>
            <img src={Instagram} alt='' />
          </a>
          <a href={'https://wa.me/11920808659'} target='blank'>
            <img src={WhatsApp} alt='' />
          </a>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center'>
        <span className='lg:text-xl italic'>Desenvolvido por</span>
        <img src={LogoGanikoInside} className='w-80' alt='' />
      </div>

      <div className=''>
        <ul className='text-xl text-center lg:text-2xl'>
          <li>(11) 92080-8659</li>
          <li>vendas@lamou.com.br</li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
