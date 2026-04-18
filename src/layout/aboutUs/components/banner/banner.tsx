import { AboutUsBanner } from '../../../../assets';

function Banner() {
  return (
    <div className='relative w-full'>
      <img src={AboutUsBanner} alt='Banner' className='w-full' />
    </div>
  );
}

export { Banner };
