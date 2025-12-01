import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { CategoryCard } from "../components/CategoryCard";
import { AircraftCard } from "../components/AircraftCard";
import { aircraftData } from "../data/aircraft";
import { Plane, Zap, Award, History, ChevronsRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImages = [
  "https://images.unsplash.com/photo-1637568049154-c4102030b496?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1696402443627-fcaf13c0fb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1715794631886-13821cb7ebef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713195668792-0a017ee3f520?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682142182464-3be6161b3a42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1658970484712-03e2b79bacec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredAircraft = aircraftData.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-white mb-6">
            Aviões Premium. História, Performance e Exclusividade.
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Compre aeronaves clássicas, históricas e modernas em um só lugar.
          </p>
          <Link to="/catalogo">
            <Button
              variant="primary"
              className="bg-[#0A1A2F] border-0 text-[#0A1A2F] border-white hover:bg-gray-100 hover:text-[#0A1A2F] "
            >
              Explorar Catálogo
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1A2F] mb-4">Categorias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção exclusiva de aeronaves organizadas por
            categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <CategoryCard
            icon={Zap}
            title="Jatos Executivos"
            category="Jatos Executivos"
          />
          <CategoryCard
            icon={Award}
            title="Segunda Guerra Mundial"
            category="Segunda Guerra Mundial"
          />
          <CategoryCard
            icon={Plane}
            title="Monomotores"
            category="Monomotores"
          />
          <CategoryCard
            icon={ChevronsRight}
            title="Bimotores"
            category="Bimotores"
          />
          <CategoryCard
            icon={History}
            title="Clássicos Históricos"
            category="Clássicos Históricos"
          />
        </div>
      </section>

      {/* Featured Aircraft Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1A2F] mb-4">Modelos em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aeronaves selecionadas com exclusividade e performance excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredAircraft.map((aircraft) => (
            <AircraftCard key={aircraft.id} aircraft={aircraft} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/catalogo">
            <Button variant="secondary">Ver Catálogo Completo</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
