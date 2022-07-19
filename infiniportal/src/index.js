import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);


