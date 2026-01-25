import { About, Banner, Benefities, Carrossel, Map, Nav, Plant } from './component';

const Details = () => {
  return (
    <>
      <div className='w-screen flex flex-col gap-8'>
        <Banner />
        <Nav />
        <About />
        <Carrossel />
        <Plant />
        <Benefities />
        <Map />
      </div>
    </>
  );
};

export { Details };
