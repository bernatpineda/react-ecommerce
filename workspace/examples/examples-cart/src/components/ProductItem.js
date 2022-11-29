/* import React from 'react'
import CartItem from './CartItem';
import ShoppingCart from './ShoppingCart';
import { useContext } from 'react';
const ProductItem = ({data, addToCart}) => {
    let {id,name,price} =data;
  return (
    <div style={{border:"thin solid gray", padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={() => addToCart(id)}>Add</button>
    </div>
  )
 
   /*  const { product, setProduct } = useContext(CartContext);
    return (
      <>
        <CartItem />
        <h2>Welcome back, {product ?.name}</h2>
        <ShoppingCart />
      </>
    );
  
   */
  
/* };

export default ProductItem */ 