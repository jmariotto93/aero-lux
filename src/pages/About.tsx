import { Award, Users, Globe, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0A1A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white mb-6">Sobre a AeroLux</h1>
          <p className="text-white/80 text-xl max-w-3xl">
            Excelência em aviação premium desde o primeiro voo
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-6">
            <h2 className="text-[#0A1A2F]">Nossa História</h2>
            <p className="text-gray-700 leading-relaxed">
              A AeroLux é especializada na venda de aeronaves premium — desde
              raros modelos históricos da Segunda Guerra Mundial até os mais
              avançados jatos executivos modernos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Oferecemos curadoria criteriosa, atendimento personalizado e a
              experiência mais luxuosa do mercado aeronáutico. Cada aeronave em
              nosso catálogo é selecionada com rigor técnico e histórico,
              garantindo não apenas performance excepcional, mas também valor de
              investimento a longo prazo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa missão é conectar colecionadores, empresários e entusiastas
              da aviação com as aeronaves mais exclusivas e bem preservadas do
              mundo.
            </p>
          </div>

          <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1585347890782-6e1ddd365053?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AeroLux"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#0A1A2F] mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam nossa excelência no mercado de aviação de
              luxo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-full border-2 border-[#0A1A2F] flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#0A1A2F]" />
              </div>
              <h4 className="text-[#0A1A2F] mb-3">Excelência</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Padrões impecáveis em cada aeronave selecionada
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-full border-2 border-[#0A1A2F] flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#0A1A2F]" />
              </div>
              <h4 className="text-[#0A1A2F] mb-3">Confiança</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transparência total em documentação e histórico
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-full border-2 border-[#0A1A2F] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#0A1A2F]" />
              </div>
              <h4 className="text-[#0A1A2F] mb-3">Exclusividade</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Atendimento personalizado para cada cliente
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-full border-2 border-[#0A1A2F] flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-[#0A1A2F]" />
              </div>
              <h4 className="text-[#0A1A2F] mb-3">Alcance Global</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Conexões com os melhores fornecedores mundiais
              </p>
            </div>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1568554318454-cf08687394d2?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Aeronave histórica"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-[#0A1A2F]">Compromisso com a História</h2>
            <p className="text-gray-700 leading-relaxed">
              Preservamos não apenas aeronaves, mas também as histórias que elas
              carregam. Cada modelo clássico em nossa coleção passa por
              verificação rigorosa de autenticidade e documentação histórica.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trabalhamos com restauradores renomados e especialistas em aviação
              histórica para garantir que cada peça mantenha sua integridade
              original enquanto atende aos mais altos padrões de segurança.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
