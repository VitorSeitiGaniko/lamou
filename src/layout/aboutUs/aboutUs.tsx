import { AboutUsImage, AboutUsImageMobile, Profile, ResidencialElisabeteI04, Target } from '../../assets';
import { Banner } from './components/banner';
import { Card } from './components/card';

const AboutUs = () => {
  return (
    <div className='w-screen flex flex-col'>
      <Banner />
      <section className='lg:w-[968px] text-center mx-auto mt-10 lg:px-0 px-4'>
        <h1 className='text-xl font-bold'>Desde 1982 Inovando e transformando sonhos em realidade</h1>
        <p className='mt-6'>
          Fundada em 26 de Janeiro de 1982, A Construtora Administradora MG vem construindo imóveis e
          realizando os sonhos de todos aqueles que escolhem confiar em seu trabalho
        </p>
      </section>

      <section className='hidden lg:flex items-center flex-col gap-9 mt-10 px-4'>
        <Card
          icon={Target}
          image={ResidencialElisabeteI04}
          title='FILOSOFIA DE ATENDIMENTO'
          description='Mais do que construir imóveis, buscamos construir confiança.
            Acreditamos que um bom atendimento nasce da transparência, da escuta e do compromisso com cada detalhe.
            Da primeira conversa à entrega das chaves, valorizamos uma relação próxima, clara e segura com cada cliente.'
          bgColor='#80421D'
          textColor='#572D14'
          reverse={false}
          isMobile={false}
        />

        <Card
          icon={Profile}
          image={ResidencialElisabeteI04}
          title='DEDICAÇÃO AO CLIENTE'
          description='Cada cliente merece atenção, respeito e acompanhamento de verdade.
            Por isso, priorizamos um atendimento humano, ágil e responsável, oferecendo suporte em cada etapa da jornada.
            Nosso compromisso é fazer com que cada decisão seja tomada com tranquilidade, confiança e segurança.'
          bgColor='#80421D'
          textColor='#572D14'
          reverse={true}
          isMobile={false}
        />
      </section>

      <section className='flex lg:hidden items-center flex-col gap-9 mt-10 px-4'>
        <Card
          icon={Target}
          image={ResidencialElisabeteI04}
          title='FILOSOFIA DE ATENDIMENTO'
          description='Mais do que construir imóveis, buscamos construir confiança.
              Acreditamos que um bom atendimento nasce da transparência, da escuta e do compromisso com cada detalhe.
              Da primeira conversa à entrega das chaves, valorizamos uma relação próxima, clara e segura com cada cliente.'
          bgColor='#80421D'
          textColor='#572D14'
          reverse={false}
          isMobile={true}
        />

        <Card
          icon={Profile}
          image={ResidencialElisabeteI04}
          title='DEDICAÇÃO AO CLIENTE'
          description='Cada cliente merece atenção, respeito e acompanhamento de verdade.
              Por isso, priorizamos um atendimento humano, ágil e responsável, oferecendo suporte em cada etapa da jornada.
              Nosso compromisso é fazer com que cada decisão seja tomada com tranquilidade, confiança e segurança.'
          bgColor='#80421D'
          textColor='#572D14'
          reverse={false}
          isMobile={true}
        />
      </section>

      <section className='hidden lg:flex items-center justify-center my-10 h-[480px]'>
        <img src={AboutUsImage} alt='About Us' className='h-full' />
      </section>

      <section className='flex lg:hidden items-center justify-center my-10 h-[480px]'>
        <img src={AboutUsImageMobile} alt='About Us' className='h-full' />
      </section>
    </div>
  );
};

export { AboutUs };
