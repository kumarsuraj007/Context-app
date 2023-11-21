import React, { useContext } from "react";
import { Context } from '../context/context'

function Cart() {
  const { items } = useContext(Context);

  // Initialize total price variable
  let totalPrice = 0;

  // Calculate total price
  items.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
        </div>
      ))}
      {/* Display total price */}
      <h3>Total Price: {totalPrice}</h3>
    </div>
  );
}

export default Cart;
