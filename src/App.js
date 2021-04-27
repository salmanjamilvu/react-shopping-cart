import React,{useState} from 'react'
import data from './Data.json'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'

function App() {
  const [state, setstate] = useState({
    products: data.products,
    cartItems: [],
    size: "",
    sort: ""
  })

  const addToCart = (product) =>{
    const cartItems = state.cartItems.slice()
    let alreadyInCart = false
    cartItems.forEach(item=>{
      if(item._id === product._id){
        item.count ++
        alreadyInCart = true
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product, count: 1}) 
    }
    setstate({
      ...state,
      cartItems: cartItems
    })
  }

  const removeFromCart = (item) =>{
    const cartItems = state.cartItems.slice()
    setstate({
      ...state,
      cartItems: cartItems.filter((x)=> x._id !== item)
    })
    console.log(item)
  }

  const sortProducts = (sort) =>{
    setstate({
      ...state,
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
        ...state,
        size: "",
        products: data.products
      })  
    }else{
      setstate({
        ...state,
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
            <Products
              addToCart={addToCart}
              products={state.products}
            />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={state.cartItems}
              removeFromCart={removeFromCart}
            />
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
