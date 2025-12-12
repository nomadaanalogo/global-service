"use client"

import { Check, MessageCircle } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function HeroOficinas() {
  const whatsappNumber = "573001234567"

  const handleWhatsAppClick = () => {
    const message = "Hola! Quiero cotizar un servicio de limpieza para mi oficina."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section
      id="hero"
      className="relative h-auto min-h-[600px] md:min-h-[700px] bg-blanco-hielo overflow-hidden pt-16 md:pt-20"
    >
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gris-pizarra text-balance leading-tight">
            Servicio profesional de limpieza para oficinas en <span className="text-verde-lima">Santa Marta</span>
          </h1>

          <p className="text-base md:text-lg mb-6 font-medium leading-relaxed text-gris-pizarra/80 md:whitespace-nowrap max-w-4xl mx-auto">
            Espacios corporativos impecables que reflejan la profesionalidad de tu empresa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 border border-azul-cyan/30 shadow-sm hover:shadow-md transition-shadow">
              <Check className="h-4 w-4 text-verde-lima flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gris-pizarra">Limpieza diaria</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 border border-azul-cyan/30 shadow-sm hover:shadow-md transition-shadow">
              <Check className="h-4 w-4 text-verde-lima flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gris-pizarra">Personal capacitado</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 border border-azul-cyan/30 shadow-sm hover:shadow-md transition-shadow">
              <Check className="h-4 w-4 text-verde-lima flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gris-pizarra">Productos biodegradables</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 border border-azul-cyan/30 shadow-sm hover:shadow-md transition-shadow">
              <Check className="h-4 w-4 text-verde-lima flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gris-pizarra">Horarios flexibles</span>
            </div>
          </div>

          <div className="flex justify-center">
            <AnimatedButton onClick={handleWhatsAppClick} icon={MessageCircle} variant="primary">
              Cotizar limpieza de oficina
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
