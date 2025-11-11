const CartItem = ({ item, onUptadeCart, OnRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="cart-buttons">
        <input
          type="number"
          min="0"
          value={item.quantity}
          onChange={(e) => onUptadeCart(item, parseInt(e.target.value))}
        />
        <button onClick={(e) => OnRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
