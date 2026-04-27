import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Footer, Header, WhatsAppLink } from './component';
import { AboutUsPage, DetailsPage, HomePage, ListingPage, MaterialUI } from './page';

function AppContent() {
  const location = useLocation();
  const phones: Record<string, string> = {
    residencial_vista_alegre_iii: 'https://wa.me/5511985024809',
    studio_vertentes: 'https://wa.me/5511970363810',
    residencial_jasmins: 'https://wa.me/5511984945480',
    residencial_maria_rosa: 'https://wa.me/5511976989640',
  };

  const match = location.pathname.match(/^\/details\/([^/]+)/);
  const detailsId = match ? match[1] : null;

  const whatsappLink = detailsId && phones[detailsId] ? phones[detailsId] : 'https://wa.me/11988998899';

  return (
    <>
      <Header />
      <WhatsAppLink link={whatsappLink} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/material' element={<MaterialUI />} />
        <Route path='/aboutUs' element={<AboutUsPage />} />
        <Route path='/listing/:id' element={<ListingPage />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename='/lamou'>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
