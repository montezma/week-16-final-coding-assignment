import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ArtPage from './routes/ArtPage'
import ContactPage from './routes/ContactPage'
import IdeasPage from './routes/IdeasPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/artpage' element={<ArtPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/ideas' element={<IdeasPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

