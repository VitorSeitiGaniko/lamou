import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from './components/slide';
import styles from './carrossel.module.css';

interface CarrosselProps {
  images: string[];
}

const Carrossel = ({ images }: CarrosselProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <section id='images' className='py-8'>
      <h1 className='text-2xl font-bold text-center mb-8'>Explore cada detalhe do seu futuro lar</h1>
      <div className={styles['carrossel-container']}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)}>
              <Slide image={image} />
            </div>
          ))}
        </Slider>

        {isModalOpen && (
          <div className={styles['modal']} onClick={closeModal}>
            <img src={currentImage} alt='Expanded' className={styles['modal-image']} />
          </div>
        )}
      </div>
    </section>
  );
};

export { Carrossel };
