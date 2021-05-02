import React, {useState} from 'react'

const Filter = (props) => {
    const {Data, sortFilterProductsHandle} = props
    const [state, setState] = useState({
        count: Data.length,
        size: '',
        sort:''
    })
    const sortFilter = (e) =>{
        setState({
            ...state,
            sort: e.target.value
        })
        sortFilterProductsHandle(state)
    }
    return (
        <div className="filter">
            <div className="filter-result"> {state.count} Products</div>
            <div className="filter-sort">
                Order
                <select value={state.sort} onChange={sortFilter}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
