import { useState } from "react";
import { toast } from "react-toastify";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        toast.info(`Quantidade de ${product.name} atualizada!`);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      toast.success(`${product.name} adicionado ao carrinho!`);
      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateCart = (product, quantity) => {
    toast.info(`Quantidade de ${product.name} atualizada!`);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: +quantity } : item
      )
    );
  };

  const removeFromCart = (product) => {
    toast.error(`${product.name} removido do carrinho!`);

    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  //  Finalizar compra
  const checkout = () => {
    if (cartItems.length === 0) {
      toast.error("Seu carrinho está vazio!");
      return false;
    }

    toast.success("Compra finalizada com sucesso!");
    setCartItems([]);
    return true;
  };

  return {
    cartItems,
    addToCart,
    updateCart,
    removeFromCart,
    checkout,
  };
}
