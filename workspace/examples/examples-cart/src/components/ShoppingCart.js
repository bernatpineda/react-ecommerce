/* import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingAction';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products,cart} = state;
  console.log(state);

  const addToCart = (id) => {
    //console.log(id);
    dispatch({type:TYPES.ADD_TO_CART,payload:id});
  };
  

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
    } else{
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
    }
  };

  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };


   */

import { CartContext } from "../context/CartContext";
import CartProvider from "../context/CartProvider";
import Product from "../context/product";

    
const ShoppingCart = () => {



  return (
    <div>
        <h2>ShoppingCart</h2>

        <h3>Products</h3>
        <Product/>
        <article className="box grid-responsive">
        {/* <CartProvider/> */}
          {/* <CartContext/> */}
         {/*  {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart}/> 
          ))} */}
        </article>
        <h3>Cart</h3>
        <article className="box">
          {/* <button onClick={clearCart}>Clean Cart</button> */}
          {/* {cart.map((item,index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart}/>
          ))} */}
          
        </article>
    </div>
  );
};

export default ShoppingCart