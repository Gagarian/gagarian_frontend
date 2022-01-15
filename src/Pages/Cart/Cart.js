import React from "react";
import { useSelector } from "react-redux";
import Main from "../../Layouts/Main"
import {useNavigate} from 'react-router-dom';
import CheckOutCard  from "../../Components/CheckOutCard";
const Cart = () => {
//   const cartItems = useSelector((state) => selectCartItems(state));
//   const cartCount = useSelector((state) => selectCartItemsCount(state));
//   const subtotal = useSelector((state) => selectSubtotal(state));

  const navigate = useNavigate();
//   const formatedSubtotal = subtotal.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

  return (
      <Main>
    <div className="checkout">
      <div className="checkout__cart">

        <div className="checkout__cart__title">
          <span>Shopping Cart</span>
          <span>Price</span>
        </div>

        
            <div>
              <CheckOutCard />
              <div className="checkout__cart__card" />
            </div>
          
         
          {/* <div className="checkout__cart__message">
            <p>Your Amazon Cart is empty.</p>
            <span>
              Check your Saved for later items below or{" "}
                <span>continue shopping</span>
            </span>
          </div> */}
        
       
          <div className="checkout__cart__subtotal">
            <span>Subtotal(15items): </span>
            <span>$43</span>
          </div>
        
      </div>

      <div className="checkout__subtotal">
        <div className="checkout__subtotal__title">
          <span>Subtotal(15items): </span>
          <span>$43</span>
        </div>
        <div>
          <btn block className="checkout__subtotal__button" onClick={() => navigate('/purchase')}>
            Proceed to checkout
          </btn>
        </div>
      </div>
    </div>
    </Main>
  );
};

export default Cart;