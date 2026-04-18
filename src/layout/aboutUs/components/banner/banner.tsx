import { AboutUsBanner } from '../../../../assets';

function Banner() {
  return (
    <div className='flex w-full'>
      <img src={AboutUsBanner} alt='Banner' className='w-full' />
    </div>
  );
}

export { Banner };
