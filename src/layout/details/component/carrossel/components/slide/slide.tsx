const Slide = ({ image }: { image: string }) => {
  return (
    <div className='cursor-pointer h-75.5 lg:h-auto'>
      <img src={image} alt='' className='h-full object-cover lg:h-auto rounded-4xl' />
    </div>
  );
};

export { Slide };
