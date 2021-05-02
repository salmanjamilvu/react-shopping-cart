import React from 'react'
import formatCurrency from '../util'
import Fade from 'react-reveal/Fade'

const Cart = (props) => {
    const {Data, removeProductsHandle} = props
    return (
        <div>
        { Data.length === 0 ? (
            <div className="cart cart-header">Cart is Empty</div>
        ):(
            <div className="cart cart-header">You have {Data.length} items in cart</div>
        )}
        <div className="cart">
            <Fade left cascade>
            <ul className="cart-items">
                {Data.map((item)=>(
                    <li key={item._id}>
                        <div>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div>
                            <div>{item.title}</div>
                            <div className="right">
                                {formatCurrency(item.price)} x {item.count}
                                <button className='button' onClick={()=>removeProductsHandle(item._id)}>remove</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </Fade>
        </div>
        {Data.length !== 0 &&(
            <div className="cart">
                <div className="total">
                    <div>
                        {formatCurrency(Data.reduce((a, b) => a + b.price * b.count, 0))}
                    </div>
                    <button className="button primary">Proceed</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Cart
