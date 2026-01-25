import { Banner01Planta } from '../../../../assets';

const Plant = () => {
  return (
    <section className='py-8 px-24'>
      <h1 className='text-2xl font-bold text-center'>Plantas</h1>

      <div className='flex justify-center gap-28 mt-16'>
        <img src={Banner01Planta} alt='Planta' className='w-115' />
        <img src={Banner01Planta} alt='Planta' className='w-115' />
      </div>
    </section>
  );
};

export { Plant };
