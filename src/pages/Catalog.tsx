import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AircraftCard } from "../components/AircraftCard";
import { aircraftData } from "../data/aircraft";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "Todas",
  "Jatos Executivos",
  "Segunda Guerra Mundial",
  "Monomotores",
  "Bimotores",
  "Clássicos Históricos",
];

const manufacturers = [
  "Todos",
  "Gulfstream Aerospace",
  "Bombardier Aerospace",
  "North American Aviation",
  "Supermarine",
  "Cessna Aircraft Company",
  "Cirrus Aircraft",
  "Beechcraft",
  "Douglas Aircraft Company",
];

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("categoria") || "Todas"
  );
  const [selectedManufacturer, setSelectedManufacturer] = useState("Todos");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [yearRange, setYearRange] = useState({ min: "", max: "" });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const filteredAircraft = aircraftData.filter((aircraft) => {
    const matchesSearch =
      searchTerm === "" ||
      aircraft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aircraft.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todas" || aircraft.category === selectedCategory;

    const matchesManufacturer =
      selectedManufacturer === "Todos" ||
      aircraft.manufacturer === selectedManufacturer;

    const matchesPriceMin =
      priceRange.min === "" || aircraft.price >= parseFloat(priceRange.min);
    const matchesPriceMax =
      priceRange.max === "" || aircraft.price <= parseFloat(priceRange.max);

    const matchesYearMin =
      yearRange.min === "" || aircraft.year >= parseInt(yearRange.min);
    const matchesYearMax =
      yearRange.max === "" || aircraft.year <= parseInt(yearRange.max);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesManufacturer &&
      matchesPriceMin &&
      matchesPriceMax &&
      matchesYearMin &&
      matchesYearMax
    );
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0A1A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white mb-6">Catálogo Premium</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Navegue por nossa coleção exclusiva de aeronaves selecionadas
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome ou fabricante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 focus:outline-none focus:border-[#0A1A2F]"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[#0A1A2F]">Filtros</h4>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden text-gray-500"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-[#0A1A2F]">Categoria</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="w-4 h-4 accent-[#0A1A2F]"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[#0A1A2F]">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-[#0A1A2F]">Fabricante</h4>
                <select
                  value={selectedManufacturer}
                  onChange={(e) => setSelectedManufacturer(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0A1A2F] text-sm"
                >
                  {manufacturers.map((manufacturer) => (
                    <option key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="mb-4 text-[#0A1A2F]">Ano</h4>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Ano mínimo"
                    value={yearRange.min}
                    onChange={(e) =>
                      setYearRange({ ...yearRange, min: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0A1A2F] text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Ano máximo"
                    value={yearRange.max}
                    onChange={(e) =>
                      setYearRange({ ...yearRange, max: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0A1A2F] text-sm"
                  />
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-[#0A1A2F]">Preço (BRL)</h4>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Preço mínimo"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, min: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0A1A2F] text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Preço máximo"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, max: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0A1A2F] text-sm"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                {filteredAircraft.length} aeronave
                {filteredAircraft.length !== 1 ? "s" : ""} encontrada
                {filteredAircraft.length !== 1 ? "s" : ""}
              </p>
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 text-[#0A1A2F] border border-[#0A1A2F] px-4 py-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
              </button>
            </div>

            {filteredAircraft.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">
                  Nenhuma aeronave encontrada com os filtros selecionados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
