import React from "react";

const CartItem = ({ item, onUptadeCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="cart-buttons">
        <input
          type="text"
          value={item.quantity}
          onChange={(e) => onUptadeCart(item, parseInt(e.target.value))}
        />
        <button>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
