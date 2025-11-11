import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";

const Cart = ({ cartItems, onUpdateCart, OnRemoveFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Não há itens no carrinho.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUptadeCart={onUpdateCart}
              OnRemoveFromCart={OnRemoveFromCart}
            />
          ))}

          <div className="total">
            <p>Total: ${totalPrice}</p>
            <CheckoutButton />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
