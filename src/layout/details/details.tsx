import { details } from '../../model';
import { About, Banner, Benefities, Carrossel, Map, Nav, Plant } from './component';

interface DetailsProps {
  id: string;
}

const Details = ({ id }: DetailsProps) => {
  const propertyDetails = details[id as keyof typeof details];

  return (
    <>
      <div className='w-screen flex flex-col gap-8'>
        <Banner
          image={propertyDetails.banner.image}
          name={propertyDetails.banner.name}
          description={propertyDetails.banner.description}
          localization={propertyDetails.banner.localization}
          status={propertyDetails.banner.status}
        />
        <Nav />
        <About text={propertyDetails.about} tags={propertyDetails.tags} />
        <Carrossel images={propertyDetails.images} />
        <Plant plant={propertyDetails.plant} />
        <Benefities benefities={propertyDetails.benefities} />
        <Map map={propertyDetails.map} />
      </div>
    </>
  );
};

export { Details };
