import {connect} from 'react-redux'
import Cart from '../components/Cart'
import { appProducts, removeProducts } from '../Services/actions/productActions'

const mapStateToProps = (state) =>({
    Data: state.ProductsReducer.cartItems
})
const mapDispatchToProps =dispatch =>({
    addProductsHandle: item => dispatch(appProducts(item)),
    removeProductsHandle: item => dispatch(removeProducts(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
