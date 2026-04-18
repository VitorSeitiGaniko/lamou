interface CardProps {
  icon: string;
  image: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  reverse: boolean;
  isMobile: boolean;
}

function Card({ icon, image, title, description, bgColor, textColor, reverse, isMobile }: CardProps) {
  return (
    <div
      className='grid grid-cols-1 lg:grid-cols-2 lg:w-[964px] rounded-2xl'
      style={{ backgroundColor: bgColor + '70' }}
    >
      {isMobile ? (
        <>
          <div className=''>
            <img src={image} alt={title} className='h-full w-full object-cover rounded-t-2xl' />
          </div>
          <div className='flex flex-col p-8'>
            <i>
              <img src={icon} alt='' />
            </i>
            <h2 className={`mt-5 uppercase`} style={{ color: textColor }}>
              {title}
            </h2>
            <p className='mt-4' style={{ color: textColor }}>
              {description}
            </p>
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
                  className='h-full w-full object-cover rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl'
                />
              </div>
              <div className='flex flex-col h-[320px] p-8'>
                <i>
                  <img src={icon} alt='' />
                </i>
                <h2 className='mt-5 uppercase' style={{ color: textColor }}>
                  {title}
                </h2>
                <p className='mt-4' style={{ color: textColor }}>
                  {description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-col h-[320px] p-8'>
                <i>
                  <img src={icon} alt='' />
                </i>
                <h2 className='mt-5 uppercase' style={{ color: textColor }}>
                  {title}
                </h2>
                <p className='mt-4' style={{ color: textColor }}>
                  {description}
                </p>
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
