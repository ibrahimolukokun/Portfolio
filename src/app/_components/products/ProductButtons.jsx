"use client";

import { useState, useEffect } from "react";

import CartData from "@data/cart.json";

const ProductButtons = () => {
  const [cartTotal, setCartTotal] = useState(CartData.total);
  const [quantity, setQuantity] = useState(1);
  const minQuantity = 1;
  const maxQuantity = 10;

  useEffect(() => {
    const cartNumberEl = document.querySelector('.mil-cart-number');
    if ( cartNumberEl !== null ) {
      cartNumberEl.innerHTML = cartTotal;
    }
  }, [cartTotal]);

  const addToCart = (e) => {
    e.preventDefault();
    setCartTotal(cartTotal + quantity);
    e.currentTarget.classList.add('mil-added');
    
    const cartNumberEl = document.querySelector('.mil-cart-number');
    if ( cartNumberEl !== null ) {
      cartNumberEl.classList.add('mil-added');
    }
    setTimeout(() => {
      if ( cartNumberEl !== null ) {
        cartNumberEl.classList.remove('mil-added');
      }
    }, 600);
  }

  return (
    <>
      <div className="mil-jcs mil-mb60">
          <form className="mil-quantity-frame mil-up">
              <button type="button" className="mil-minus" onClick={() => setQuantity(quantity>minQuantity ? quantity-1 : quantity)}>-</button>
              <input type="text" id="quantity" name="quantity" className="mil-input" value={quantity} min={minQuantity} max={maxQuantity} readOnly />
              <button type="button" className="mil-plus" onClick={() => setQuantity(quantity<maxQuantity ? quantity+1 : quantity)}>+</button>
          </form>
          <span className="mil-up"><button className="mil-btn mil-c-gone" onClick={(e) => addToCart(e) }>Add to cart</button></span>
      </div>
    </>
  );
};
export default ProductButtons;