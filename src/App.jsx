import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        {/* <Routes>
          <Route path="/" component={<HomePage />} />
          <Route path="/about" component={<AboutPage />} />
          <Route path="/contact" component={<ContactPage />} />
        </Routes> */}
        <div>
          < HomePage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
