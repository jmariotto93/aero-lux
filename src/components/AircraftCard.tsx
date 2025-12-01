import { Link } from "react-router-dom";
import { Aircraft } from "../types";
import { Button } from "./Button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AircraftCardProps {
  aircraft: Aircraft;
}

export function AircraftCard({ aircraft }: AircraftCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-gray-100 mb-6 aspect-[4/3]">
        <ImageWithFallback
          src={aircraft.image}
          alt={aircraft.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[#0A1A2F] mb-1">{aircraft.name}</h3>
            <p className="text-sm text-gray-500">
              {aircraft.category} · {aircraft.year}
            </p>
          </div>
        </div>
        <p className="text-[#0A1A2F]">{formatPrice(aircraft.price)}</p>
        <Link to={`/aeronave/${aircraft.id}`}>
          <Button variant="secondary" className="w-full">
            Ver Mais
          </Button>
        </Link>
      </div>
    </div>
  );
}
