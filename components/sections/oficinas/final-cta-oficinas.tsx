"use client"

import { MessageCircle } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function FinalCTAOficinas() {
  const whatsappNumber = "573001234567"

  const handleWhatsAppClick = () => {
    const message = "Hola! Quiero cotizar un servicio de limpieza para mi oficina."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-azul-profundo to-azul-cyan relative overflow-hidden">
      {/* Efectos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-verde-lima rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
            ¿Listo para mantener tu oficina impecable?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">Santa Marta, Colombia</p>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Confía tu espacio corporativo a manos expertas. Cotiza hoy y mejora la imagen de tu empresa.
          </p>

          <AnimatedButton onClick={handleWhatsAppClick} icon={MessageCircle} variant="primary">
            Cotizar por WhatsApp
          </AnimatedButton>

          <p className="text-sm text-white/70 mt-6">Tiempos de respuesta menores a 1 hora.</p>
        </div>
      </div>
    </section>
  )
}
