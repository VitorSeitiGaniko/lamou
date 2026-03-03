interface PlantProps {
  plant: string[];
}

const Plant = ({ plant }: PlantProps) => {
  return (
    <>
      {plant && plant.length > 0 && (
        <section id='plant' className='py-8 px-24'>
          <h1 className='text-2xl font-bold text-center'>Plantas</h1>

          <div className='flex flex-col lg:flex-row justify-center gap-28 mt-16'>
            {plant.map((image, index) => (
              <img key={index} src={image} alt={`Planta ${index + 1}`} className='w-115' />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export { Plant };
