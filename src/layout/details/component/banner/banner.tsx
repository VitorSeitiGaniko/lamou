interface BannerProps {
  image: string;
  name: string;
  description: string;
  localization: string;
  status: string;
}

const Banner = ({ image, name, description, localization, status }: BannerProps) => {
  return (
    <section className='flex h-[calc(100vh-144px)] lg:h-[calc(100vh-132px)] overflow-x-hidden'>
      <div className='hidden lg:block relative w-full'>
        <img
          src={image}
          alt='Banner'
          className='w-full h-full opacity-90 object-cover object-[center_bottom]'
        />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4'>
          <div className='bg-white/60 glass-effect px-12 py-3 rounded-[42px] w-fit mx-auto'>
            <h1 className='text-black font-bold text-4xl w-fit'>{name}</h1>
          </div>
          <p className='text-black font-medium text-xl'>{description}</p>

          <div className='flex justify-between mt-16'>
            <div className='bg-black/60 glass-effect px-12 py-3 rounded-[42px]'>
              <span className='text-2xl'>{localization}</span>
            </div>

            <div className='bg-[#FF0606]/60 glass-effect px-12 py-3 rounded-[42px]'>
              <span className='text-2xl'>{status}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:hidden relative h-full'>
        <img src={image} className='w-full h-full object-cover object-[25%_75%] opacity-90' alt='' />

        <div className='absolute top-5 text-center text-white px-8'>
          <div className='bg-white/60 glass-effect px-12 py-3 rounded-[42px] w-fit mx-auto'>
            <h1 className='text-black font-bold text-xl lg:text-4xl w-fit'>{name}</h1>
          </div>
          <p className='text-black font-medium text-base mt-2 lg:text-xl'>{description}</p>
        </div>

        <div className='absolute bottom-5 text-white px-8 w-full'>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='bg-black/60 glass-effect px-12 py-3 rounded-[42px]'>
              <span className='text-base lg:text-2xl'>{localization}</span>
            </div>

            <div className='bg-[#FF0606]/60 glass-effect px-12 py-3 rounded-[42px]'>
              <span className='text-base lg:text-2xl'>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
