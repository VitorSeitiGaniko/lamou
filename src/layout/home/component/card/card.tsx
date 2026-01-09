interface CardProps {
  image?: string;
  name: string;
  address: string;
  area?: string;
  rooms: number;
  bathrooms: number;
  bedrooms: number;
  parkingSpaces: number;
  status: string;
}

const Card = ({
  image,
  name,
  address,
  area,
  rooms,
  bathrooms,
  bedrooms,
  parkingSpaces,
  status,
}: CardProps) => {
  return (
    <div className='w-105 bg-white rounded-lg shadow-[4px_4px_24px_rgba(0,0,0,0.25)] overflow-hidden'>
      <div className='relative h-72'>
        <img src={image} alt={name} className='h-full w-full object-cover' />
        <div
          className={`absolute top-2.5 -right-18 px-28 rotate-16 text-white font-bold py-2 ${
            status === 'ready' ? 'bg-[#FF0606]/80' : 'bg-[#039800]/80'
          }`}
        >
          <span>{status === 'ready' ? '100% entregue' : 'Unidades disponíveis'}</span>
        </div>
      </div>

      <div className='flex flex-col items-center mt-3'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='mt-2'>
          <span>{address}</span>
        </p>
        <p className='mt-1'>
          <span>{area}</span>
        </p>
      </div>

      <hr className='border-t border-black my-4 w-[80%] mx-auto' />

      <div className='grid grid-cols-2 gap-2 px-9'>
        <span>Comodos</span>
        <span className='text-right'>{rooms}</span>
        <span>Banheiros</span>
        <span className='text-right'>{bathrooms}</span>
        <span>Quartos</span>
        <span className='text-right'>{bedrooms}</span>
        <span>Vagas</span>
        <span className='text-right'>{parkingSpaces}</span>
      </div>

      <div className='mb-8 mt-8 flex justify-center'>
        <button className='bg-[#1C243F] text-white px-16 py-2 rounded-[64px] cursor-pointer hover:bg-[#0B0E1A]'>
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export { Card };
