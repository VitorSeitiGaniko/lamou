import { WhatsAppNav } from '../../assets';

const WhatsAppLink = () => {
  return (
    <i className='fixed bottom-8 right-2 lg:bottom-16 lg:right-8 z-30 cursor-pointer'>
      <img src={WhatsAppNav} alt='WhatsApp' className='w-14' />
    </i>
  );
};

export { WhatsAppLink };
