import {connect} from 'react-redux'
import Products from '../components/Products'
import { appProducts } from '../Services/actions/productActions'

const mapStateToProps = (state) =>({
    Data: state.ProductsReducer.products
})
const mapDispatchToProps =dispatch =>({
    addProductsHandle: item => dispatch(appProducts(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Products)

