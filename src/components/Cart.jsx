import React from 'react'
import formatCurrency from '../util'

const Cart = ({cartItems, removeFromCart}) => {
    return (
        <div>
            { cartItems.length === 0 ? (
                <div className="cart cart-header">Cart is Empty</div>
            ):(
                <div className="cart cart-header">You have {cartItems.length} items in cart</div>
            )}
            <div className="cart">
                <ul className="cart-items">
                    {cartItems.map((item)=>(
                        <li key={item._id}>
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className="right">
                                    {formatCurrency(item.price)} x {item.count}
                                    <button className='button' onClick={()=>removeFromCart(item._id)}>remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 &&(
            <div className="cart">
                <div className="total">
                    <div>
                        {formatCurrency(cartItems.reduce((a, b) => a + b.price * b.count, 0))}
                    </div>
                    <button className="button primary">Proceed</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Cart
