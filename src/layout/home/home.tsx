import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { Card, Slide } from './component';
import { readyProperties, underConstructionProperties } from '../../model';

const settings = {
  dots: true, // Mostra os pontos de navegação
  infinite: true, // Loop infinito
  speed: 500, // Velocidade da transição
  slidesToShow: 1, // Quantos slides aparecem por vez
  slidesToScroll: 1, // Quantos slides avançam por vez
  arrows: true,
  responsive: [
    {
      breakpoint: 768, // Para telas menores que 768px
      settings: {
        arrows: false, // Oculta as setas
      },
    },
  ],
};

const Home = () => {
  const [category, setCategory] = useState<'pronto' | 'construcao'>('pronto');

  return (
    <div>
      <div className='w-screen'>
        <Slider {...settings}>
          <>
            <Slide />
          </>
        </Slider>
      </div>

      <section className='flex flex-col justify-center items-center mt-11'>
        <h2 className='text-[#1C243F] font-bold text-2xl lg:text-4xl'>Conheça nossos imóveis</h2>

        <div className='border-2 border-[#1C243F] rounded-[100px] lg:w-2/4 mt-6 lg:mt-9'>
          <button
            className={`rounded-[100px] py-4 px-3 lg:px-0 lg:w-1/2 text-xl cursor-pointer ${
              category === 'pronto' ? 'bg-[#1C243F] text-white font-bold' : 'bg-white text-[#1C243F]'
            }`}
            onClick={() => setCategory('pronto')}
          >
            Prontos para morar
          </button>
          <button
            className={`rounded-[100px] py-4 px-3 lg:px-0 lg:w-1/2 text-xl cursor-pointer ${
              category === 'construcao' ? 'bg-[#1C243F] text-white font-bold' : 'bg-white text-[#1C243F]'
            }`}
            onClick={() => setCategory('construcao')}
          >
            Em construção
          </button>
        </div>

        <div className='flex flex-col px-4 lg:px-0 gap-8 lg:grid lg:grid-cols-3 lg:gap-12 mt-9'>
          {category === 'pronto' && (
            <>
              {readyProperties.map((property, index) => (
                <Card
                  key={property.name + index}
                  image={property.image}
                  name={property.name}
                  address={property.address}
                  area={property.area}
                  rooms={property.rooms}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                  parkingSpaces={property.parkingSpaces}
                  status={property.status}
                />
              ))}
            </>
          )}

          {category === 'construcao' && (
            <>
              {underConstructionProperties.map((property, index) => (
                <Card
                  key={property.name + index}
                  image={property.image}
                  name={property.name}
                  address={property.address}
                  area={property.area}
                  rooms={property.rooms}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                  parkingSpaces={property.parkingSpaces}
                  status={property.status}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export { Home };
