import React from "react";
import { addToCart, getCarDescription } from "../redux/actions/DisplayAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../styles/Display.css";
import { Link } from "react-router-dom";
import {increment,decrement} from '../redux/actions/QuantityAction'
import {removeFromCart} from '../redux/actions/DisplayAction'

function Display() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  //const cartItems = useSelector((state) => state.cart);

  const [showCarDetails, setShowCarDetails] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  
  return (
    <div className="display">
      <div className="search search-detail">
        <input
          id="search"
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        ></input>

        <button>
        <i class="material-icons red-text">close</i>
        </button>
      </div>
      <div className="main-container">
     
       
        {state.cars
          .filter((car) => {
            if (searchItem == "") {
              return car;
            } else if (
              car.carMake.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return car;
            }
          })
          .map((car) => {

            const inCart =state.cart.find( (item) => item.carId === car.carId ? true : false);
            const fetchQuantity = () => {
              if (state.cart.length === 0){
                return 0
              }else {
                return state.cart.find((fetchedCar) => fetchedCar.carId === car.carId).quantity;
              }
            }

            return(
              <div key={car.carId} className="singleCar">
              <p className="carMake">Make: {car.carMake}</p>
              <Link to="description">
                <img
                  src={car.carImage}
                  className="carImage"
                  alt={car.carMake}
                  onClick={() => dispatch(getCarDescription(car.carId))}
                />
              </Link>
              <p>Mileage:{car.carMileage}</p>

              <p>Year of Production: {car.carYear}</p>
              <p>Price Offer: {car.carPrice}</p>
              {inCart ?  <div>
                <button onClick={() => dispatch(increment(car.carId))}>  +</button>
                                  {state.cart.map(item => item.carId === car.carId && item.quantity )}
                <button onClick={() => {
                  if (fetchQuantity() <= 1){ 
                    dispatch(removeFromCart(car.carId))
                  }else{
                    dispatch(decrement(car.carId))
                  } }
                } >  -</button>
                  
                </div> :  <button
                className="addToCartButton"
                onClick={() => dispatch(addToCart(car.carId))}
              >
                ADD TO CART
              </button>}
            </div>
            )           
            
})}
      </div>
    </div>
  );
}

export default Display;

