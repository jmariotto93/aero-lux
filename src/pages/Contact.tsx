import { useState } from "react";
import { Button } from "../components/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0A1A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white mb-6">Contato</h1>
          <p className="text-white/80 text-xl max-w-3xl">
            Entre em contato conosco para informações sobre nossas aeronaves
            premium
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-[#0A1A2F] mb-8">Fale Conosco</h2>
              <p className="text-gray-700 leading-relaxed mb-12">
                Nossa equipe especializada está pronta para atendê-lo e
                responder todas as suas dúvidas sobre nossas aeronaves. Entre em
                contato através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#0A1A2F] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0A1A2F]" />
                </div>
                <div>
                  <h4 className="text-[#0A1A2F] mb-2">E-mail</h4>
                  <a
                    href="mailto:josemarioto@gmail.com"
                    className="text-gray-600 hover:text-[#0A1A2F] transition-colors"
                  >
                    josemarioto@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#0A1A2F] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0A1A2F]" />
                </div>
                <div>
                  <h4 className="text-[#0A1A2F] mb-2">Telefone</h4>
                  <a
                    href="tel:+5512991140812"
                    className="text-gray-600 hover:text-[#0A1A2F] transition-colors"
                  >
                    +55 12 991140812
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#0A1A2F] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0A1A2F]" />
                </div>
                <div>
                  <h4 className="text-[#0A1A2F] mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h - 18h</p>
                  <p className="text-gray-600">Sábado: 9h - 14h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 lg:p-12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#0A1A2F] flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#0A1A2F] mb-3">Mensagem Enviada!</h3>
                <p className="text-gray-600">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0A1A2F]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0A1A2F]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0A1A2F]"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0A1A2F] resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
