import { ResidencialPaisagem } from '../../../../assets';

const Card = () => {
  return (
    <div className='w-105 bg-white rounded-lg shadow-[4px_4px_24px_rgba(0,0,0,0.25)]'>
      <div>
        <img src={ResidencialPaisagem} alt='Residencial Paisagem' />
      </div>

      <div>
        <h3>Residencial Paisagem</h3>
        <p>
          <span>Av. Das Cruzadas, 170 - Cotia - SP</span>
        </p>
      </div>

      <div className='grid grid-cols-2 gap-4 '>
        <span>Comodos</span>
        <span>05</span>
        <span>Banheiros</span>
        <span>02</span>
        <span>Quartos</span>
        <span>02</span>
        <span>Vagas</span>
        <span>01</span>
      </div>

      <div>
        <button>Saiba mais</button>
      </div>
    </div>
  );
};

export { Card };
