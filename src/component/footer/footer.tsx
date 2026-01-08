import { Facebook, Instagram, LogoGanikoInside, WhatsApp } from '../../assets';

const Footer = () => {
  return (
    <footer className='bottom-0 w-screen h-48 flex bg-[#1C243F] items-center justify-evenly text-white'>
      <div>
        <h2>Nossas redes sociais</h2>
        <div className='flex gap-6 mt-4'>
          <img src={Facebook} alt='' />
          <img src={Instagram} alt='' />
          <img src={WhatsApp} alt='' />
        </div>
      </div>

      <div className='flex items-center'>
        <span>Desenvolvido por</span>
        <img src={LogoGanikoInside} className='w-80' alt='' />
      </div>

      <div className=''>
        <ul>
          <li>Seg à Sex: 11 4146-9775</li>
          <li>Sáb e Dom: 11 93249-9852</li>
          <li>vendas@lamou.com.br</li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
