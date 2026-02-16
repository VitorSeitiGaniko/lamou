const Benefities = () => {
  return (
    <section className='py-8 px-5 lg:px-24'>
      <h2 className='text-center text-2xl font-bold'>Benefícios</h2>

      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mt-10'>
        <div className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
          <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>
            Churrasqueira
          </span>
        </div>

        <div className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
          <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>
            Playground
          </span>
        </div>

        <div className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
          <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>
            Fitness
          </span>
        </div>

        <div className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
          <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>Jardim</span>
        </div>

        <div className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
          <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>
            Piscina
          </span>
        </div>

        <div className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
          <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>
            Salão de festas
          </span>
        </div>
      </div>
    </section>
  );
};

export { Benefities };
