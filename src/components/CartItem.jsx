const CartItem = ({ item, onUptadeCart, OnRemoveFromCart }) => {
  const handleQtyChange = (e) => {
    const qty = parseInt(e.target.value);

    if (qty <= 0) {
      OnRemoveFromCart(item);
    } else {
      onUptadeCart(item, qty);
    }
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="cart-buttons">
        <input
          type="number"
          min="0"
          value={item.quantity}
          onChange={handleQtyChange}
        />
        <button onClick={(e) => OnRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
