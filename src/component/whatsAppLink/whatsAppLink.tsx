import { WhatsAppNav } from '../../assets';

const WhatsAppLink = () => {
  return (
    <i className='fixed bottom-8 right-2 lg:bottom-16 lg:right-10 z-30 cursor-pointer'>
      <img src={WhatsAppNav} alt='WhatsApp' className='w-14 lg:w-24' />
    </i>
  );
};

export { WhatsAppLink };
