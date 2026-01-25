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

const About = () => {
  return (
    <section className='py-8 px-24 flex flex-col gap-6'>
      <h1 className='text-2xl font-bold'>Sobre o Empreendimento</h1>
      <p>
        <span>Conforto, segurança e qualidade de vida em uma das regiões mais tranquilas da cidade</span>
        <span>
          Se você procura sempre o melhor para a sua família, o Residencial Elizabeth é perfeito para você!
          Condomínio com lazer completo e apartamentos de 2 dormitórios com varanda, 47 a 48m², com fácil
          acesso à Rodovia Régis Bittencourt, no melhor de Taboão da Serra.
        </span>
      </p>

      <div>
        <div className='flex gap-4 items-center'>
          <img src={Apartment} alt='Apartment' />
          <p className='text-black tex-xl'>
            <span>Tipo:</span>
            <span className='font-bold ml-1'>Residencial</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={Workspace} alt='Workspace' />
          <p className='text-black tex-xl'>
            <span>Quartos:</span>
            <span className='font-bold ml-1'>2</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={FullScreen} alt='FullScreen' />
          <p className='text-black tex-xl'>
            <span>Tamanho do lote:</span>
            <span className='font-bold ml-1'>28x20x20</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={LocationMarker} alt='LocationMarker' />
          <p className='text-black tex-xl'>
            <span>Orientação:</span>
            <span className='font-bold ml-1'>Oeste</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={Kitchen} alt='Kitchen' />
          <p className='text-black tex-xl'>
            <span>Cozinhas:</span>
            <span className='font-bold ml-1'>1</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={Parking} alt='Parking' />
          <p className='text-black tex-xl'>
            <span>Vagas:</span>
            <span className='font-bold ml-1'>1</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={Shower} alt='Shower' />
          <p className='text-black tex-xl'>
            <span>Banheiros:</span>
            <span className='font-bold ml-1'>1</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={FullScreen} alt='FullScreen' />
          <p className='text-black tex-xl'>
            <span>Tamanho da área:</span>
            <span className='font-bold ml-1'>50m2 e 52m2</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={Tv} alt='Tv' />
          <p className='text-black tex-xl'>
            <span>Salas:</span>
            <span className='font-bold ml-1'>2</span>
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <img src={Apartment} alt='Apartment' />
          <p className='text-black tex-xl'>
            <span>Cômodos:</span>
            <span className='font-bold ml-1'>4</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
