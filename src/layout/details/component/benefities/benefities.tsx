interface BenefitiesProps {
  benefities: string[];
}

const Benefities = ({ benefities }: BenefitiesProps) => {
  return (
    <section id='benefities' className='py-8 px-5 lg:px-24'>
      <h2 className='text-center text-2xl font-bold'>Benefícios</h2>

      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mt-10'>
        {benefities.map((benefit, index) => (
          <div key={index} className='rounded-2xl bg-[#1C243F] py-4 lg:py-6 w-44 lg:w-66.25'>
            <span className='mx-auto block text-center font-bold text-base lg:text-2xl text-white'>
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Benefities };
