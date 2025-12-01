import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/Button";
import { Trash2, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, getTotalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h2 className="text-[#0A1A2F] mb-4">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-8">
            Explore nosso catálogo e adicione aeronaves exclusivas ao seu
            carrinho
          </p>
          <Button onClick={() => navigate("/catalogo")}>
            Explorar Catálogo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0A1A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white mb-4">Carrinho de Compras</h1>
          <p className="text-white/80 text-xl">
            {cart.length} {cart.length === 1 ? "item" : "itens"} selecionado
            {cart.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 p-6 flex gap-6"
              >
                <div className="w-32 h-32 flex-shrink-0 bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#0A1A2F] mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {item.category}
                    </p>
                    <p className="text-sm text-gray-600">Ano: {item.year}</p>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-xl text-[#0A1A2F]">
                      {formatPrice(item.price)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Remover</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 p-8 sticky top-24">
              <h3 className="text-[#0A1A2F] mb-6">Resumo do Pedido</h3>

              <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-[#0A1A2F]">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-8">
                <span className="text-[#0A1A2F]">Total</span>
                <span className="text-2xl text-[#0A1A2F]">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => navigate("/finalizar")}
                  className="w-full"
                >
                  Finalizar Compra
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/catalogo")}
                  className="w-full"
                >
                  Continuar Comprando
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
