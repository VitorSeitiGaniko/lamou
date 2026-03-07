import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header, WhatsAppLink } from './component';
import { DetailsPage, HomePage, MaterialUI } from './page';

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
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
