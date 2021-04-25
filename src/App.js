import React,{useState} from 'react'
import data from './Data.json'
import Products from './components/products/Products'
import Filter from './components/products/Filter'

function App() {
  const [state, setstate] = useState({
    products: data.products,
    size: "",
    sort: ""
  })
  const sortProducts = (sort) =>{
    setstate({
      sort: sort,
      products: data.products.slice().sort((a, b)=>(
        sort === 'lowest'?
        ((a.price < b.price)? 1:-1):
        sort === 'highest'?
        ((a.price > b.price)? 1:-1):
        ((a._id < b._id)? 1:-1)
      ))
    })
  }
  const filterProducts = (size) =>{
    if( size === ""){
      setstate({
        size: "",
        products: data.products
      })  
    }else{
      setstate({
        size: size,
        products: data.products.filter( product => product.availableSizes.indexOf(size) >=0 )
      })
    }
  }
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={state.products} />
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
