import { NavLink } from 'react-router-dom';
import { Banner01, Banner01Planta } from '../../../../assets';

const Slide = () => {
  return (
    <div className='flex h-[calc(100vh-144px)] lg:h-[calc(100vh-132px)]'>
      <div className='hidden lg:block w-2/3 relative'>
        <img src={Banner01} alt='' />
        <div className='absolute bottom-0 w-full bg-[#000000]/40 flex items-center justify-between py-6 px-5'>
          <div className='text-white'>
            <h2>Condominio Residencial Vista Alegre III</h2>
            <span>Vista Alegre - Embu das Artes</span>
          </div>

          <NavLink to='/details/residencial_vista_alegre_iii'>
            <button className='bg-[#8A684B] text-white rounded-4xl py-3 px-11 cursor-pointer hover:bg-[#846449] hover:font-semibold'>
              Saiba mais
            </button>
          </NavLink>
        </div>
      </div>

      <div className='hidden lg:block bg-[#8A684B]/60 px-20 py-16 w-1/3'>
        <img src={Banner01Planta} alt='' />
      </div>

      <div className='lg:hidden relative'>
        <img src={Banner01} className='w-full h-full object-cover object-[25%_75%]' alt='' />
        <div className='absolute text-[#35160B] top-6 font-bold text-xl text-center flex flex-col items-center justify-center w-full'>
          <h2>Condominio Residencial Vista Alegre III</h2>
          <span className='text-base'>Vista Alegre - Embu das Artes</span>
        </div>

        <div className='absolute text-[#35160B] bottom-6 flex flex-col items-center justify-center w-full'>
          <NavLink to='/details/residencial_vista_alegre_iii'>
            <button className='bg-[#35160B] text-white rounded-4xl py-2 px-8 cursor-pointer uppercase'>
              Saiba mais
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { Slide };
