import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutButton = ({ cartItems, onCheckout }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    const ok = onCheckout();
    if (ok) {
      toast.success("Compra finalizada com sucesso!");

      navigate("/thank-you", { state: { cartItems } });
    } else {
      toast.error("Seu carrinho está vazio!");
    }
  };
  return <button onClick={handleCheckout}>Finalizar Compra</button>;
};

export default CheckoutButton;
