import { Banner01, Banner01Planta } from '../../../../assets';

const Slide = () => {
  return (
    <div className='flex h-[calc(100vh-132px)]'>
      <div className='w-2/3 relative'>
        <img src={Banner01} alt='' />
        <div className='absolute bottom-0 w-full bg-[#000000]/40 flex items-center justify-between py-6 px-5'>
          <div className='text-white'>
            <h2>Condominio Residencial Vista Alegre III</h2>
            <span>Vista Alegre - Embu das Artes</span>
          </div>

          <button className='bg-[#35160B] text-white rounded-4xl py-3 px-11'>Saiba mais</button>
        </div>
      </div>

      <div className='bg-[#8A684B]/60 px-20 py-16 w-1/3'>
        <img src={Banner01Planta} alt='' />
      </div>
    </div>
  );
};

export { Slide };
