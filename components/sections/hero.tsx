"use client"

import { Clock, Shirt, Camera, MessageCircle } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function Hero() {
  const whatsappNumber = "573162239720"

  const handleWhatsAppClick = () => {
    const message = "Hola! Quiero cotizar un servicio de limpieza."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section
      id="hero"
      className="relative h-auto min-h-[600px] md:min-h-[700px] bg-blanco-hielo overflow-hidden pt-16 md:pt-20"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-santa-marta.webp"
          alt="Vista panorámica de la bahía de Santa Marta - Limpieza profesional para alojamientos turísticos Airbnb y Booking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Destellos animados flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-azul-cyan/20 rounded-full blur-3xl animate-float-slow top-10 -left-20" />
        <div className="absolute w-80 h-80 bg-verde-lima/15 rounded-full blur-3xl animate-float-medium top-40 right-20" />
        <div className="absolute w-64 h-64 bg-azul-profundo/10 rounded-full blur-3xl animate-float-fast bottom-20 left-1/3" />

        {/* Destello brillante que se mueve */}
        <div
          className="absolute w-32 h-32 bg-white rounded-full blur-2xl animate-shine opacity-60"
          style={{
            boxShadow: "0 0 60px 30px rgba(140, 198, 63, 0.4), 0 0 100px 50px rgba(0, 174, 239, 0.2)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gris-pizarra text-balance leading-tight lg:text-5xl">
            Expertos en limpieza de alojamientos turísticos en <span className="text-azul-cyan">Santa Marta</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gris-pizarra/90 max-w-4xl mx-auto text-pretty font-bold lg:text-base">
            Asegura tus 5 estrellas en Airbnb o Booking. Entregamos tu espacio impecable y listo para cada check-in.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-azul-cyan flex-shrink-0" />
              <span
                className="text-sm md:text-base font-bold text-gris-pizarra"
                style={{ textShadow: "0 0 20px rgba(0, 174, 239, 0.3)" }}
              >
                Limpieza entre reservas
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Shirt className="h-5 w-5 text-azul-cyan flex-shrink-0" />
              <span
                className="text-sm md:text-base font-bold text-gris-pizarra"
                style={{ textShadow: "0 0 20px rgba(0, 174, 239, 0.3)" }}
              >
                Lavandería profesional
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-azul-cyan flex-shrink-0" />
              <span
                className="text-sm md:text-base font-bold text-gris-pizarra"
                style={{ textShadow: "0 0 20px rgba(0, 174, 239, 0.3)" }}
              >
                Reporte con fotos
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-azul-cyan flex-shrink-0" />
              <span
                className="text-sm md:text-base font-bold text-gris-pizarra"
                style={{ textShadow: "0 0 20px rgba(0, 174, 239, 0.3)" }}
              >
                WhatsApp 24/7
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <AnimatedButton onClick={handleWhatsAppClick} icon={MessageCircle} variant="primary">
              Agendar limpieza por WhatsApp
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
