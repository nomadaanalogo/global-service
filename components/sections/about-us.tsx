"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import Image from "next/image"
import { Award, Users, Target } from "lucide-react"

export default function AboutUs() {
  const whatsappNumber = "573162239720" // Actualizado número de WhatsApp real
  const message = "¡Hola! Quiero cotizar un servicio de limpieza."

  const handleCTA = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const cards = [
    {
      title: "Desde 2018",
      image: "/images/profesional-limpieza.jpg", // Actualizada la imagen de la primera card con la foto de la profesional de limpieza
      description:
        "En Global Service elevamos la calidad de los espacios. Somos un equipo samario especializado en limpieza profesional para alojamientos turísticos y oficinas.",
      icon: Award,
    },
    {
      title: "+50 Propietarios",
      image: "/images/limpieza-2.jpg",
      description:
        "Más de 50 propietarios en Colombia y el exterior confían en nosotros por nuestro personal capacitado, maquinaria profesional y procesos estandarizados.",
      icon: Users,
    },
    {
      title: "Excelencia Garantizada",
      image: "/images/limpieza-3.jpg",
      description:
        "Comprometidos con la excelencia y el detalle. Procesos estandarizados que aseguran resultados impecables en cada servicio que realizamos.",
      icon: Target,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="nosotros">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra">Sobre Nosotros</h2>
            <div className="w-24 h-1 bg-verde-lima mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {cards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div key={index} className="flip-card h-[380px] perspective-1000">
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
                    {/* Front - Solo imagen y título */}
                    <div className="flip-card-front absolute w-full h-full backface-hidden rounded-tl-none rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none overflow-hidden shadow-xl">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/90 via-azul-profundo/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-bold text-2xl text-white drop-shadow-lg">{card.title}</h3>
                        <p className="text-white/80 text-sm mt-2 drop-shadow">Tap o hover para ver más</p>
                      </div>
                    </div>

                    {/* Back - Texto descriptivo con diseño elegante */}
                    <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-tl-none rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none overflow-hidden shadow-xl bg-white border-4 border-azul-profundo">
                      <div className="relative h-full flex flex-col justify-center p-8 text-left">
                        <IconComponent className="h-12 w-12 text-azul-profundo mb-4" />
                        <h3 className="font-bold text-2xl text-azul-profundo mb-4">{card.title}</h3>
                        <p className="text-gris-pizarra leading-relaxed text-base">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <AnimatedButton onClick={handleCTA} variant="primary">
              Cotizar servicio
            </AnimatedButton>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-inner:hover {
          transform: rotateY(180deg);
        }
        @media (hover: none) {
          .flip-card:active .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </section>
  )
}
