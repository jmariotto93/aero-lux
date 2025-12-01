import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { useCart } from "../contexts/CartContext";
import { CheckCircle, Plane } from "lucide-react";

export function Checkout() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-[#0A1A2F] flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-[#0A1A2F]" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full">
              <Plane className="w-8 h-8 text-[#0A1A2F]" />
            </div>
          </div>
        </div>

        <h1 className="text-[#0A1A2F] mb-6">Obrigado por comprar conosco!</h1>

        <p className="text-xl text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed">
          Sua aquisição está sendo processada. A equipe AeroLux entrará em
          contato com você em breve.
        </p>

        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Você receberá um e-mail de confirmação com todos os detalhes da sua
          compra e os próximos passos para a entrega da sua aeronave.
        </p>

        <div className="space-y-4 flex flex-col items-center">
          <Button onClick={() => navigate("/catalogo")} className="w-64">
            Voltar às Compras
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/")}
            className="w-64"
          >
            Ir para Home
          </Button>
        </div>
      </div>
    </div>
  );
}
