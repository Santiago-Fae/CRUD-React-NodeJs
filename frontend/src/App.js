import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './css/style.css';
import './css/app.css';
import './css/card.css';
import './css/form.css';

import Routes from './Routes';
function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
