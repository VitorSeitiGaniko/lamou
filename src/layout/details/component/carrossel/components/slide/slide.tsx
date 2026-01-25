const Slide = ({ image }: { image: string }) => {
  return (
    <div className='cursor-pointer'>
      <img src={image} alt='' className='rounded-4xl' />
    </div>
  );
};

export { Slide };
