interface CardProps {
  icon: string;
  image: string;
  title: string;
  description: string;
  reverse: boolean;
  isMobile: boolean;
}

function Card({ icon, image, title, description, reverse, isMobile }: CardProps) {
  return (
    <div
      className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} bg-[#80421D]/44 rounded-2xl h-[320px] lg:w-[1024px]`}
    >
      {isMobile ? (
        <>
          <div className='h-[320px]'>
            <img src={image} alt={title} className='h-full w-full object-cover rounded-t-2xl' />
          </div>
          <div className='flex flex-col h-[320px] p-8'>
            <i>
              <img src={icon} alt='' />
            </i>
            <h2 className='mt-5 text-[#572D14] uppercase'>{title}</h2>
            <p className='mt-4 text-[#572D14]'>{description}</p>
          </div>
        </>
      ) : (
        <>
          {reverse ? (
            <>
              <div className='h-[320px]'>
                <img
                  src={image}
                  alt={title}
                  className='h-full w-full object-cover rounded-t-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl'
                />
              </div>
              <div className='flex flex-col h-[320px] p-8'>
                <i>
                  <img src={icon} alt='' />
                </i>
                <h2 className='mt-5 text-[#572D14] uppercase'>{title}</h2>
                <p className='mt-4 text-[#572D14]'>{description}</p>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-col h-[320px] p-8'>
                <i>
                  <img src={icon} alt='' />
                </i>
                <h2 className='mt-5 text-[#572D14] uppercase'>{title}</h2>
                <p className='mt-4 text-[#572D14]'>{description}</p>
              </div>
              <div className='h-[320px]'>
                <img
                  src={image}
                  alt={title}
                  className='h-full w-full object-cover rounded-br-2xl rounded-tr-2xl'
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export { Card };
