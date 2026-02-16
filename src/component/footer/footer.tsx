import { Facebook, Instagram, LogoGanikoInside, WhatsApp } from '../../assets';

const Footer = () => {
  return (
    <footer className='bottom-0 w-screen h-133 py-8 lg:py-0 lg:h-48 flex flex-col lg:flex-row bg-[#1C243F] items-center justify-between lg:justify-evenly text-white'>
      <div>
        <h2 className='text-xl lg:text-2xl'>Nossas redes sociais</h2>
        <div className='flex gap-6 mt-4'>
          <img src={Facebook} alt='' />
          <img src={Instagram} alt='' />
          <img src={WhatsApp} alt='' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center'>
        <span className='lg:text-xl italic'>Desenvolvido por</span>
        <img src={LogoGanikoInside} className='w-80' alt='' />
      </div>

      <div className=''>
        <ul className='text-xl text-center lg:text-2xl'>
          <li>Seg à Sex: 11 4146-9775</li>
          <li>Sáb e Dom: 11 93249-9852</li>
          <li>vendas@lamou.com.br</li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
