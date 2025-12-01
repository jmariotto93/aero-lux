import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Plane } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export function Header() {
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Plane className="w-8 h-8 text-[#0A1A2F]" />
          <span className="text-2xl tracking-tight text-[#0A1A2F]">AeroLux</span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link
            to="/"
            className={`transition-colors ${
              isActive("/")
                ? "text-[#0A1A2F]"
                : "text-gray-600 hover:text-[#0A1A2F]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/catalogo"
            className={`transition-colors ${
              isActive("/catalogo")
                ? "text-[#0A1A2F]"
                : "text-gray-600 hover:text-[#0A1A2F]"
            }`}
          >
            Catálogo
          </Link>
          <Link
            to="/sobre"
            className={`transition-colors ${
              isActive("/sobre")
                ? "text-[#0A1A2F]"
                : "text-gray-600 hover:text-[#0A1A2F]"
            }`}
          >
            Sobre Nós
          </Link>
          <Link
            to="/contato"
            className={`transition-colors ${
              isActive("/contato")
                ? "text-[#0A1A2F]"
                : "text-gray-600 hover:text-[#0A1A2F]"
            }`}
          >
            Contato
          </Link>
        </nav>

        <Link to="/carrinho" className="relative">
          <ShoppingCart className="w-6 h-6 text-[#0A1A2F]" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#0A1A2F] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
