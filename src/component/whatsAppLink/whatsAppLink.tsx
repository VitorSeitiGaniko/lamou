import { WhatsAppNav } from '../../assets';

interface WhatsAppLinkProps {
  link: string;
}

const WhatsAppLink = ({ link }: WhatsAppLinkProps) => {
  return (
    <a href={link} target='blank'>
      <i className='fixed bottom-8 right-2 lg:bottom-16 lg:right-8 z-30 cursor-pointer'>
        <img src={WhatsAppNav} alt='WhatsApp' className='w-14' />
      </i>
    </a>
  );
};

export { WhatsAppLink };
