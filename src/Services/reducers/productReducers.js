import { ADD_PRODUCTS, REMOVE_PRODUCTS, SORT_FILTER } from '../constants'
import data from '../../Data.json'

const initialState = {
    products: data.products,
    cartItems: localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [],
}

function ProductsReducer(state = initialState, action) {
    let item
    switch(action.type){ 
        case ADD_PRODUCTS:
            const cartItems = state.cartItems.slice()
            let alreadyInCart = false
            cartItems.forEach(item=>{
                if(item._id === action.payload._id){
                  item.count ++
                  alreadyInCart = true
                }
              })
              if(!alreadyInCart){
                cartItems.push({...action.payload, count: 1}) 
              }
              localStorage.setItem("item", JSON.stringify(cartItems))
            return { ...state, cartItems:cartItems }
        case REMOVE_PRODUCTS:
            const cart_Items = state.cartItems.slice()
            localStorage.setItem("item", JSON.stringify(cart_Items.filter((x)=> x._id !== action.payload)))
            return {...state, cartItems:cart_Items.filter((x)=> x._id !== action.payload)}
        case SORT_FILTER:
            item = state.products.slice().sort((a, b)=>(
                action.payload.sort === 'lowest'?
                ((a.price < b.price)? 1:-1):
                action.payload.sort === 'highest'?
                ((a.price > b.price)? 1:-1):
                ((a._id < b._id)? 1:-1)
              ))
            return {...state, products:item}
        default:
            return state
    }
}
export default ProductsReducer;