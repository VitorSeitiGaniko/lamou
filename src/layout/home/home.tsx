import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { Card, Slide } from './component';

const settings = {
  dots: true, // Mostra os pontos de navegação
  infinite: true, // Loop infinito
  speed: 500, // Velocidade da transição
  slidesToShow: 1, // Quantos slides aparecem por vez
  slidesToScroll: 1, // Quantos slides avançam por vez
  arrows: true,
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

          <>
            <Slide />
          </>
        </Slider>
      </div>

      <section className='flex flex-col justify-center items-center mt-11'>
        <h2 className='text-[#1C243F]'>Conheça nossos imóveis</h2>

        <div className='border-2 border-[#1C243F] rounded-[100px] w-2/4'>
          <button
            className={`rounded-[100px] py-6 w-1/2 text-2xl ${
              category === 'pronto' ? 'bg-[#1C243F] text-white' : 'bg-white text-[#1C243F]'
            }`}
            onClick={() => setCategory('pronto')}
          >
            Prontos para morar
          </button>
          <button
            className={`rounded-[100px] py-6 w-1/2 text-2xl ${
              category === 'construcao' ? 'bg-[#1C243F] text-white' : 'bg-white text-[#1C243F]'
            }`}
            onClick={() => setCategory('construcao')}
          >
            Em construção
          </button>
        </div>

        <div className='grid grid-cols-3 gap-12 mt-11'>
          <Card />
        </div>
      </section>
    </div>
  );
};

export { Home };
