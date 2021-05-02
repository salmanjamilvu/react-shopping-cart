import { ADD_PRODUCTS, REMOVE_PRODUCTS, SORT_FILTER} from '../constants'

export const appProducts = (item) => {
    return{
        type: ADD_PRODUCTS,
        payload: item
    }
}
export const sortFilterProducts = (item) => {
    return{
        type: SORT_FILTER,
        payload: item
    }
}

export const removeProducts = (item) => {
    return{
        type: REMOVE_PRODUCTS,
        payload: item
    }
}