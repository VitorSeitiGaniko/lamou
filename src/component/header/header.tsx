import { Logo } from '../../assets';

const Header = () => {
  return (
    <header className='fixed top-0 w-screen h-24 flex bg-[#1C243F] items-center justify-between px-16 z-20'>
      <div>
        <img src={Logo} />
      </div>

      <nav>
        <ul className='uppercase text-white flex gap-9 *:hover:cursor-pointer'>
          <li>home</li>
          <li>sobre nós</li>
          <li>pronto para morar</li>
          <li>em construção</li>
        </ul>
      </nav>

      <div className='flex gap-3'>
        <button className='py-2 px-4 border rounded-4xl text-[#1C243F] uppercase bg-white cursor-pointer hover:bg-[#EBEBEB]'>
          fale com corretor
        </button>
        <button className='py-2 px-4 border rounded-4xl text-[#1C243F] uppercase cursor-pointer bg-white hover:bg-[#EBEBEB]'>
          fale conosco
        </button>
      </div>
    </header>
  );
};

export { Header };
