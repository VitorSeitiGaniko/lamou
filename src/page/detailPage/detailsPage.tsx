import { useParams } from 'react-router-dom';
import { Details } from '../../layout';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  scrollTo(0, 0);

  return (
    <div className='w-screen mt-24 pb-12'>
      <Details id={id!} />
    </div>
  );
};

export { DetailsPage };
