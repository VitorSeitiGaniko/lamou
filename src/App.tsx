import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header, WhatsAppLink } from './component';
import { AboutUsPage, DetailsPage, HomePage, ListingPage, MaterialUI } from './page';

function App() {
  return (
    <>
      <BrowserRouter basename='/lamou'>
        <Header />
        <WhatsAppLink />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/material' element={<MaterialUI />} />
          <Route path='/aboutUs' element={<AboutUsPage />} />
          <Route path='/listing/:id' element={<ListingPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
