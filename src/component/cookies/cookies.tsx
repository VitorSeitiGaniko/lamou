import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Cookies = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!accepted) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className='
        fixed
        bottom-9
        right-2.5
        w-[96%]
        lg:w-[36%]
        bg-[#1C243F]/98
        text-white
        p-6
        lg:p-8
        flex
        flex-col
        justify-between
        items-start
        gap-4
        z-[1000]
        rounded-lg
    '
    >
      <p>
        <span>Utilizamos cookies e tecnologias semelhantes de acordo com a nossa</span>
        <NavLink to={'/terms'}>
          <span className='font-bold underline mx-1'>Política de Privacidade e Termo de uso</span>
        </NavLink>
        <span>e, ao continuar navegando, você concorda com ambos.</span>
      </p>
      <button
        onClick={handleAccept}
        className='px-8 py-2 bg-white text-[#1C243F] rounded-[64px] cursor-pointer'
      >
        Aceitar
      </button>
    </div>
  );
};

export { Cookies };
