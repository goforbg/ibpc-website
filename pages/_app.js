import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {


  return (
    <>
    <div className="relative">

      <Header />
      <Component {...pageProps} />
      <Footer/>
      
      </div>
    </>
  );
}

export default MyApp;
