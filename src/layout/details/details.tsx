import { About, Banner, Benefities, Map } from './component';

const Details = () => {
  return (
    <>
      <div className='w-screen flex flex-col gap-8'>
        <Banner />
        <About />
        <Benefities />
        <Map />
      </div>
    </>
  );
};

export { Details };
