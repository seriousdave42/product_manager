import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ProductDetail path="/product/:id" />
        <Update path="product/:id/update" />
      </Router>
    </div>
  );
}

export default App;
