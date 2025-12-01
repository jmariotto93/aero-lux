import { Link } from "react-router-dom";
import { Plane, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1A2F] text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-6 h-6" />
              <span className="text-xl">AeroLux</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excelência em aviação premium. História, performance e
              exclusividade.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-white">Navegação</h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/catalogo"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Catálogo
              </Link>
              <Link
                to="/sobre"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Sobre Nós
              </Link>
              <Link
                to="/contato"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contato
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-white">Suporte</h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Políticas
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-white">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 AeroLux. Aviação de excelência desde o primeiro voo.
          </p>
        </div>
      </div>
    </footer>
  );
}
