import { ADD_TO_CART , INCREMENT , DECREMENT, SEARCH_CARS, REMOVE_FROM_CART, GET_DESCRIPTION} from '../types'
import { cars } from '../../cars'


const initialState = {cars, cart: [], selectedItem:[]};

const displayDescription = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:
            const itemInCart = state.cart.find(c => c.carId === action.payload);
            const item = state.cars.find(car => car.carId === action.payload);
            if(itemInCart) return state

            return{
                ...state,
                cart:[...state.cart, {...item, quantity:1}]
            }
            case INCREMENT:
                const items1 = state.cart.map(c => {
                    if (c.carId === action.id) {
                        c.quantity++
                    }
                    return c
                })
                
                return {
                    ...state,
                    cart: [...items1]
                }
            case DECREMENT:
                const items = state.cart.map(c => {
                    if (c.carId === action.id) {
                        c.quantity > 1 && c.quantity--
                    }
                    return c
                })
                return {
                    ...state,
                    cart: [...items]
                }
            case REMOVE_FROM_CART:
                const filteredCart = state.cart.filter(c => c.carId !== action.payload);
                return { ...state, cart: [...filteredCart] }

            case GET_DESCRIPTION:
                    const Sitem = state.cars.find(car => car.carId === action.payload);
                    return{
                        ...state, selectedItem: [Sitem]
                    }
    // case SEARCH_CARS:
    //         return {
    //             ...state,
    //             cars: [...state.todos.filter(({id}) => id !== action.id)]
    //         }    
        default:
            return state

    }
}

export  default displayDescription