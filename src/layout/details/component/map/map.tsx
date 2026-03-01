interface MapProps {
  map: string;
}

const Map = ({ map }: MapProps) => {
  return (
    <section id='location'>
      <h1 className='text-center text-2xl font-bold'>Localização</h1>

      <div className='w-screen h-105 mt-10' dangerouslySetInnerHTML={{ __html: map }} />
    </section>
  );
};

export { Map };
