import {connect} from 'react-redux'
import Filter from '../components/Filter'
import { sortFilterProducts } from '../Services/actions/productActions'

const mapStateToProps = (state) =>({
    Data: state.ProductsReducer.products
})
const mapDispatchToProps =dispatch =>({
    sortFilterProductsHandle: item => dispatch(sortFilterProducts(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
