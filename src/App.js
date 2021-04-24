import React from 'react'
import data from './Data.json'
import Products from './components/products/Products'

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={data.products} />
          </div>
          <div className="sidebar">
            Sidebar
          </div>
        </div>
      </main>
      <footer>
        All right is reserved.      
      </footer>
    </div>
  );
}

export default App;
