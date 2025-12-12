"use client"

import { Building2, Users, Award } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useState } from "react"

export default function AboutUsOficinas() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const cards = [
    {
      title: "Experiencia desde 2018",
      description:
        "Más de 6 años brindando servicios de limpieza profesional a empresas en Santa Marta. Conocemos las necesidades específicas de espacios corporativos y comerciales.",
      icon: Building2,
    },
    {
      title: "Personal Capacitado",
      description:
        "Equipo profesional con entrenamiento en protocolos de limpieza corporativa, productos biodegradables y atención al cliente empresarial.",
      icon: Users,
    },
    {
      title: "Resultados Impecables",
      description:
        "Oficinas que reflejan la profesionalidad de tu empresa. Garantizamos espacios limpios, ordenados y listos para recibir clientes y colaboradores.",
      icon: Award,
    },
  ]

  const whatsappNumber = "573162239720"

  const handleWhatsAppClick = () => {
    const message = "Hola! Quiero cotizar un servicio de limpieza para mi oficina."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-blanco-hielo via-white to-azul-cyan/5 relative overflow-hidden"
      id="nosotros"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-azul-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-verde-lima/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra text-balance">
            Limpieza profesional para empresas
          </h2>
          <p className="text-lg md:text-xl text-gris-pizarra/80 max-w-3xl mx-auto leading-relaxed">
            Entendemos que tu oficina es el reflejo de tu marca. Por eso garantizamos espacios impecables que transmiten
            profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[420px] perspective-1000 cursor-pointer group"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Frente de la card */}
                <div
                  className="absolute w-full h-full backface-hidden rounded-tl-none rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    backgroundImage: `url(/images/limpieza-${index + 1}.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo via-azul-profundo/60 to-transparent" />
                  <div className="absolute inset-0 bg-azul-cyan/0 group-hover:bg-azul-cyan/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-verde-lima/90 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-sm">Haz clic para ver más</p>
                  </div>
                </div>

                {/* Reverso de la card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border-4 border-azul-profundo/20 rounded-tl-none rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none p-8 flex flex-col items-start justify-center shadow-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-azul-profundo to-azul-cyan rounded-2xl mb-6 shadow-lg">
                    <card.icon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gris-pizarra mb-4 text-left">{card.title}</h3>
                  <p className="text-gris-pizarra/80 leading-relaxed text-left text-base">{card.description}</p>
                  <div className="mt-6 pt-4 border-t-2 border-verde-lima/30 w-full">
                    <p className="text-xs text-azul-cyan font-semibold">GLOBAL SERVICE • SANTA MARTA</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton onClick={handleWhatsAppClick} variant="secondary">
            Cotizar servicio
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
