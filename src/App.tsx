import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Home } from './views/Home';
import { Product } from './views/Product';
import { Menu } from './views/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/product/:name" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
