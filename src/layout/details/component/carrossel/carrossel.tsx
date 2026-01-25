import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from './components/slide';
import styles from './carrossel.module.css'; // Importa o CSS Module
import { Banner01 } from '../../../../assets';

const Carrossel = () => {
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
    <section className='py-8'>
      <h1 className='text-2xl font-bold text-center mb-8'>Explore cada detalhe do seu futuro lar</h1>
      <div className={styles['carrossel-container']}>
        <Slider {...settings}>
          <div onClick={() => handleImageClick(Banner01)}>
            <Slide image={Banner01} />
          </div>
          <div onClick={() => handleImageClick(Banner01)}>
            <Slide image={Banner01} />
          </div>
          <div onClick={() => handleImageClick(Banner01)}>
            <Slide image={Banner01} />
          </div>
          <div onClick={() => handleImageClick(Banner01)}>
            <Slide image={Banner01} />
          </div>
          <div onClick={() => handleImageClick(Banner01)}>
            <Slide image={Banner01} />
          </div>
          <div onClick={() => handleImageClick(Banner01)}>
            <Slide image={Banner01} />
          </div>
        </Slider>

        {/* Modal */}
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
