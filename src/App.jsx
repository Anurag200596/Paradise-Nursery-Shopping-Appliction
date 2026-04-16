import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="background-image landing-page">
          <div className="content">
            <h1>paradise nursery</h1>
            <p>where greenery meets serenity</p>
            <AboutUs />
            <button className="get-started-btn" onClick={() => setShowProductList(true)}>
              get started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;