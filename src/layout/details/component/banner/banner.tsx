import { Banner01 } from '../../../../assets';

const Banner = () => {
  return (
    <section className='relative h-screen overflow-hidden '>
      <img
        src={Banner01}
        alt='Banner'
        className='w-full h-auto opacity-62 object-cover object-[center_bottom]'
      />

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4'>
        <h1 className='text-black font-bold text-4xl'>Condominio Residencial Vista Alegre III</h1>
        <p className='text-black text-xl'>
          Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência
          de ter tudo por perto.
        </p>

        <div className='flex justify-between'>
          <div className='bg-black/60 glass-effect px-12 py-3 rounded-[42px]'>
            <span className='text-2xl'>Jardim Vista Alegre</span>
          </div>

          <div className='bg-[#FF0606]/60 glass-effect px-12 py-3 rounded-[42px]'>
            <span className='text-2xl'>100% entregue</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
