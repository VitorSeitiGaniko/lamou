import {
  Apartment,
  FullScreen,
  Kitchen,
  LocationMarker,
  Parking,
  Shower,
  Tv,
  Workspace,
} from '../../../../assets';

interface Tag {
  area: string;
  bathroom: string;
  bedrooms: string;
  garage: string;
  kitchen: string;
  living_room: string;
  lote: string;
  orientation: string;
  rooms: string;
  type: string;
}
interface AboutProps {
  text: string[];
  tags: Tag;
}

const About = ({ text, tags }: AboutProps) => {
  return (
    <>
      <section id='about' className='hidden py-8 px-24 lg:flex flex-col gap-8'>
        <h1 className='text-2xl font-bold'>Sobre o Empreendimento</h1>
        <div className='flex justify-between'>
          <div className='w-4/5'>
            {text.map((paragraph, index) => (
              <p key={index} className='my-2'>
                {paragraph}
              </p>
            ))}
          </div>

          <button className='bg-[#1C243F] h-2/4 text-white text-xl px-4 py-2 rounded-[64px] cursor-pointer hover:bg-[#0B0E1A] hover:font-semibold'>
            Fale com um corretor
          </button>
        </div>

        <div className='flex gap-30'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-4 items-center'>
              <img src={Apartment} alt='Apartment' />
              <p className='text-black tex-xl'>
                <span>Tipo:</span>
                <span className='font-bold ml-1'>{tags.type}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={Workspace} alt='Workspace' />
              <p className='text-black tex-xl'>
                <span>Quartos:</span>
                <span className='font-bold ml-1'>{tags.bedrooms}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={FullScreen} alt='FullScreen' />
              <p className='text-black tex-xl'>
                <span>Tamanho do lote:</span>
                <span className='font-bold ml-1'>{tags.lote}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={LocationMarker} alt='LocationMarker' />
              <p className='text-black tex-xl'>
                <span>Orientação:</span>
                <span className='font-bold ml-1'>{tags.orientation}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={Kitchen} alt='Kitchen' />
              <p className='text-black tex-xl'>
                <span>Cozinhas:</span>
                <span className='font-bold ml-1'>{tags.kitchen}</span>
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex gap-4 items-center'>
              <img src={Parking} alt='Parking' />
              <p className='text-black tex-xl'>
                <span>Vagas:</span>
                <span className='font-bold ml-1'>{tags.garage}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={Shower} alt='Shower' />
              <p className='text-black tex-xl'>
                <span>Banheiros:</span>
                <span className='font-bold ml-1'>{tags.bathroom}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={FullScreen} alt='FullScreen' />
              <p className='text-black tex-xl'>
                <span>Tamanho da área:</span>
                <span className='font-bold ml-1'>{tags.area}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={Tv} alt='Tv' />
              <p className='text-black tex-xl'>
                <span>Salas:</span>
                <span className='font-bold ml-1'>{tags.living_room}</span>
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <img src={Apartment} alt='Apartment' />
              <p className='text-black tex-xl'>
                <span>Cômodos:</span>
                <span className='font-bold ml-1'>{tags.rooms}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-8 px-5 flex-col gap-8 lg:hidden'>
        <h1 className='text-2xl font-bold'>Sobre o Empreendimento</h1>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className='flex flex-col gap-5'>
          <div className='flex gap-4 items-center'>
            <img src={Apartment} alt='Apartment' />
            <p className='text-black tex-xl'>
              <span>Tipo:</span>
              <span className='font-bold ml-1'>{tags.type}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={Workspace} alt='Workspace' />
            <p className='text-black tex-xl'>
              <span>Quartos:</span>
              <span className='font-bold ml-1'>{tags.bedrooms}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={FullScreen} alt='FullScreen' />
            <p className='text-black tex-xl'>
              <span>Tamanho do lote:</span>
              <span className='font-bold ml-1'>{tags.lote}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={LocationMarker} alt='LocationMarker' />
            <p className='text-black tex-xl'>
              <span>Orientação:</span>
              <span className='font-bold ml-1'>{tags.orientation}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={Kitchen} alt='Kitchen' />
            <p className='text-black tex-xl'>
              <span>Cozinhas:</span>
              <span className='font-bold ml-1'>{tags.kitchen}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={Parking} alt='Parking' />
            <p className='text-black tex-xl'>
              <span>Vagas:</span>
              <span className='font-bold ml-1'>{tags.garage}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={Shower} alt='Shower' />
            <p className='text-black tex-xl'>
              <span>Banheiros:</span>
              <span className='font-bold ml-1'>{tags.bathroom}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={FullScreen} alt='FullScreen' />
            <p className='text-black tex-xl'>
              <span>Tamanho da área:</span>
              <span className='font-bold ml-1'>{tags.area}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={Tv} alt='Tv' />
            <p className='text-black tex-xl'>
              <span>Salas:</span>
              <span className='font-bold ml-1'>{tags.living_room}</span>
            </p>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={Apartment} alt='Apartment' />
            <p className='text-black tex-xl'>
              <span>Cômodos:</span>
              <span className='font-bold ml-1'>{tags.rooms}</span>
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button className='bg-[#1C243F] h-2/4 text-white text-xl px-4 py-2 rounded-[64px] cursor-pointer hover:bg-[#0B0E1A] hover:font-semibold'>
            Fale com um corretor
          </button>
        </div>
      </section>
    </>
  );
};

export { About };
