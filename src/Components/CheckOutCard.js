import React, { useEffect } from "react";

const CheckOutCard = () => {
  
  return (
    <div className="checkout-card">
      <img src="https://images-fe.ssl-images-amazon.com/images/I/413eVsQoYeL._AC_AA160_.jpg" alt="Amazon" className="checkout-card__img" />
      <div className="checkout-card__body">
        <div className="checkout-card__content">
          <div className="checkout-card__title">
            
              <span>Nikon D3500 KIT + AF-P 18-55 VR + AF-P 70-300 VR Twin Lens Kit, Black</span>
        
          </div>
          <div className="checkout-card__status">
             <span>In stock</span> : <span>Out of stock</span>
          </div>
          <div className="checkout-card__delivery">
            <span>Enable for FREE Delivery </span>
          </div>
          
            <div className="checkout-card__action">
                <div className="checkout-card__action__qty">
                <form >
                    <input className="qtywidth" type="number" min="1"  />
                </form>
                </div>

                <div className="checkout-card__action__delete">
                    <span>|</span>
                    <span> Delete</span>
                </div>
            </div>

        </div>
        <div className="checkout-card__price">
          <span>$43.55</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;