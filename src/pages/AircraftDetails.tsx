import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { aircraftData } from "../data/aircraft";
import { Button } from "../components/Button";
import { useCart } from "../contexts/CartContext";
import { ArrowLeft, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AircraftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const aircraft = aircraftData.find((a) => a.id === id);

  if (!aircraft) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#0A1A2F] mb-4">Aeronave não encontrada</h2>
          <Button onClick={() => navigate("/catalogo")}>
            Voltar ao Catálogo
          </Button>
        </div>
      </div>
    );
  }

  const images = aircraft.images || [aircraft.image];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(aircraft);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-24 right-6 bg-[#0A1A2F] text-white px-6 py-4 shadow-lg z-50 flex items-center gap-3 animate-slide-in">
          <Check className="w-5 h-5" />
          <span>Item adicionado ao carrinho</span>
        </div>
      )}

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#0A1A2F] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="aspect-[21/9] bg-gray-100 overflow-hidden mb-6">
          <ImageWithFallback
            src={images[selectedImage]}
            alt={aircraft.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image Gallery */}
        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-32 h-20 overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-[#0A1A2F]"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${aircraft.name} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-[#0A1A2F] mb-2">{aircraft.name}</h1>
                  <p className="text-gray-600">
                    {aircraft.category} · {aircraft.year}
                  </p>
                </div>
              </div>
              <p className="text-3xl text-[#0A1A2F]">
                {formatPrice(aircraft.price)}
              </p>
            </div>

            <div>
              <Button onClick={handleAddToCart} className="w-full lg:w-auto">
                Comprar Agora
              </Button>
            </div>

            {aircraft.history && (
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-[#0A1A2F] mb-4">História</h3>
                <p className="text-gray-700 leading-relaxed">
                  {aircraft.history}
                </p>
              </div>
            )}

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-[#0A1A2F] mb-4">Descrição</h3>
              <p className="text-gray-700 leading-relaxed">
                {aircraft.description}
              </p>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 sticky top-24">
              <h3 className="text-[#0A1A2F] mb-6">Especificações Técnicas</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ano</p>
                  <p className="text-[#0A1A2F]">{aircraft.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Fabricante</p>
                  <p className="text-[#0A1A2F]">{aircraft.manufacturer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Motor</p>
                  <p className="text-[#0A1A2F]">{aircraft.engine}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Velocidade Máxima</p>
                  <p className="text-[#0A1A2F]">{aircraft.maxSpeed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Alcance</p>
                  <p className="text-[#0A1A2F]">{aircraft.range}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Capacidade</p>
                  <p className="text-[#0A1A2F]">{aircraft.capacity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
