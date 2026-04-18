import { useParams } from 'react-router-dom';
import { Listing } from '../../layout';

const ListingPage = () => {
  const { id } = useParams<{ id: string }>();
  scrollTo(0, 0);

  return (
    <div className='w-screen mt-24 pb-12'>
      <Listing id={id!} />
    </div>
  );
};

export { ListingPage };
