import { readyProperties, underConstructionProperties } from '../../model';
import { Card } from './components/card';

interface ListingProps {
  id: string;
}

const Listing = ({ id }: ListingProps) => {
  console.log('-----------', id);

  return (
    <section className='px-4 pt-8 flex flex-col justify-center items-center'>
      {id === 'ready' && (
        <div>
          <h1 className='text-center text-2xl font-bold'>Prontos para morar</h1>
          <p className='text-center mt-5'>
            Confira nossa seleção de imóveis prontos para morar. Unidades finalizadas, com excelente padrão de
            construção e prontas para visitação e mudança imediata.
          </p>
        </div>
      )}

      {id === 'underConstruction' && (
        <div>
          <h1 className='text-center text-2xl font-bold'>Em construção</h1>
          <p className='text-center mt-5'>
            Confira nossa seleção de imóveis em construção. Unidades em desenvolvimento, com excelente padrão
            de construção e previsão de entrega em breve.
          </p>
        </div>
      )}

      <div className='flex flex-col lg:px-0 gap-8 lg:grid lg:grid-cols-3 lg:gap-12 mt-9'>
        {id === 'ready' && (
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

        {id === 'underConstruction' && (
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
  );
};

export { Listing };
