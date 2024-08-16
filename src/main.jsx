import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import App from './App.jsx';
import Navbar from './components/navbar.jsx';
import './styles/index.css';
import './i18n.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={"/Vite-Portfolio/"}>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
