import React,{useEffect,useState} from 'react'
import '../styles/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement} from '../redux/actions/QuantityAction'
import {removeFromCart} from '../redux/actions/DisplayAction'
import { Link } from "react-router-dom";

function Cart() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [cartTotal, setCartTotal] = useState(0)
    const [discount, setDiscount] = useState(0)

    const calculateCartTotal = ()=>{
    const total = state.cart?.reduce((acc,value)=> acc +(value.carPrice * value.quantity), 0)
        setCartTotal(total)
        calculateDiscount()
    }

    const calculateDiscount = ()=>{
    const totalCars = state.cart?.reduce((acc,value)=> acc +value.quantity, 0)
        if(totalCars>=5){
        setDiscount(Math.floor(0.05*cartTotal))
        }else{
        setDiscount(0)
        }
    }

    useEffect(() => {
        calculateCartTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.cart])


    return (
        <div className="page-container">
      <h3 className="cart-heading">Your Cart</h3>
      {state.cart.length === 0 ? (
        <div className="empty-cart">
          <h5>YOUR CART IS EMPTY</h5>
        </div>
        ) : (
        <div className="cart-list">
            <div className="cartItems">
                <div className="cart-item">
                <table>
                    <tr>
                    <th>Car Make</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>GRAND-TOTAL</th>
                    <th>Remove-item</th>
                    </tr>
                    {state?.cart.map(item => (
                    <tr key={item.carId} > {/*className="calculationDiv"*/}
                        <td>
                        <h4>{item.carMake}</h4>
                        </td>
                        <td>
                            <button onClick={() => dispatch(increment(item.carId))}>  +</button>
                                {item.quantity}
                            <button onClick={() => dispatch(decrement(item.carId))}>  -</button>
                        </td>
                        <td>
                        <h4 className="cart-item-price">Ksh {item.carPrice}</h4>
                        </td>
                        
                        <td>
                        <h4 className="cart-item-total">
                            {item.quantity * item.carPrice}
                        </h4>
                        </td>
                        <td>
                        <i className="removeItem"
                            onClick={() => dispatch(removeFromCart(item.carId))}
                            className="fa fa-trash"
                        ></i>
                        </td>
                    </tr>
                    ))}
                </table>
                </div>
            </div>
            
            <div>
                
                <div className="cart-total-container">
                    <h4 className="cart-total-item">
                        <span>Cart Price</span> <span>Ksh {cartTotal}</span>
                    </h4>
                    <h4 className="cart-total-item">
                        <span>Discount</span> <span>Ksh {discount}</span>
                    </h4>
                    <h4 className="cart-total-item">
                        <span>Total Price</span> <span>Ksh {cartTotal-discount}</span>
                    </h4>
                </div>
                
            </div>
        </div> 
        )}
        <div className="cart-btns">
          <Link className="continue-btn" to="/">
            Continue Shopping
          </Link>
          <Link className="checkout-btn" to="#">Checkout</Link>
        </div>
      </div> 
    )
    
}

export default Cart;