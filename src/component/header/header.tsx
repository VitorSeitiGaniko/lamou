import { useState } from 'react';
import { Close, Logo, Menu } from '../../assets';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='fixed top-0 w-screen h-24 flex bg-[#1C243F] items-center justify-between px-4 lg:px-16 z-20'>
      <div>
        <NavLink to='/'>
          <img src={Logo} />
        </NavLink>
      </div>

      <nav className='hidden lg:block'>
        <ul className='uppercase text-white flex gap-9 *:hover:cursor-pointer *:hover:font-semibold'>
          <li>
            <NavLink to='/'>home</NavLink>
          </li>
          <li>
            <NavLink to='/'>sobre nós</NavLink>
          </li>
          <li>
            <NavLink to='/'>pronto para Morar</NavLink>
          </li>
          <li>
            <NavLink to='/'>em construção</NavLink>
          </li>
        </ul>
      </nav>

      <nav className={`z-40 fixed inset-0 items-center ${showMenu ? 'flex' : 'hidden'}`}>
        <i className='absolute right-8 top-8 z-50' onClick={() => setShowMenu(false)}>
          <img src={Close} alt='Fechar' />
        </i>
        <div className='fixed inset-0 bg-black/60 backdrop-blur-md overflow-y-hidden'></div>
        <ul className='uppercase z-50 absolute divide-y-2 divide-white/10 text-white flex flex-col justify-center w-full *:hover:cursor-pointer *:hover:font-semibold'>
          <li className='py-3 pl-4 lg:py-0 hover:bg-white/10'>
            <NavLink to='/'>home</NavLink>
          </li>
          <li className='py-3 pl-4 lg:py-0 hover:bg-white/10'>
            <NavLink to='/'>sobre nós</NavLink>
          </li>
          <li className='py-3 pl-4 lg:py-0 hover:bg-white/10'>
            <NavLink to='/'>pronto para Morar</NavLink>
          </li>
          <li className='py-3 pl-4 lg:py-0 hover:bg-white/10'>
            <NavLink to='/'>em construção</NavLink>
          </li>
        </ul>
      </nav>

      <div className='hidden lg:flex gap-3'>
        <button className='py-2 px-4 border rounded-4xl text-[#1C243F] uppercase bg-white cursor-pointer hover:bg-[#EBEBEB]'>
          fale com um corretor
        </button>
        <button className='py-2 px-4 border rounded-4xl text-[#1C243F] uppercase cursor-pointer bg-white hover:bg-[#EBEBEB]'>
          fale conosco
        </button>
      </div>

      <div className='lg:hidden'>
        <i onClick={() => setShowMenu(true)}>
          <img src={Menu} className='w-8' alt='Menu' />
        </i>
      </div>
    </header>
  );
};

export { Header };
