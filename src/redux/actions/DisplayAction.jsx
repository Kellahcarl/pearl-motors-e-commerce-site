import { ADD_TO_CART ,REMOVE_FROM_CART, GET_DESCRIPTION} from '../types'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }

}
export const getCarDescription = (id) => {
    return {
        type: GET_DESCRIPTION,
        payload: id
    }

}