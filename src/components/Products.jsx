import React from 'react'
import formatCurrency from '../util'
import Fade from 'react-reveal/Fade'

const Products = (props) => {
    const {Data, addProductsHandle} = props
    return (
        <React.Fragment>
            <Fade bottom cascade>
            <ul className="products">
                {Data.map((product)=>(
                <li key={product._id}>
                    <div className="product">
                        <a href={"#" + product._id}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                            <div>
                                {formatCurrency(product.price)}
                            </div>
                            <button className="button primary" onClick={()=>addProductsHandle(product)}> Add To Cart </button>
                        </div>
                    </div>
                </li>
                ))}    
            </ul>
            </Fade>
        </React.Fragment>
    )
}

export default Products
