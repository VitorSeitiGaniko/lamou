const Map = () => {
  return (
    <section>
      <h1 className='text-center text-2xl font-bold'>Localização</h1>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.46806776712!2d-46.82478458867383!3d-23.623402763786604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54cd9a10bea1%3A0x2a23bd13fa33105!2sRua%20Alberto%20Correia%20Francfort%2C%2044%20-%20Jardim%20Vista%20Alegre%2C%20Embu%20das%20Artes%20-%20SP%2C%2006807-461!5e0!3m2!1spt-BR!2sbr!4v1769308725423!5m2!1spt-BR!2sbr'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='w-screen h-105 mt-10'
      ></iframe>
    </section>
  );
};

export { Map };
