"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { MessageCircle, MapPin, Clock } from "lucide-react"

export default function FinalCTA() {
  const whatsappNumber = "573162239720" // Actualizado número de WhatsApp real
  const message = "¡Hola! Quiero dejar mi apartamento impecable para mis huéspedes."

  const handleCTA = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-azul-profundo to-azul-cyan text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            ¿Listo para dejar tu apartamento <span className="text-verde-lima">impecable</span> para tus huéspedes?
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Confía tu propiedad a manos expertas. Contáctanos hoy
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5 text-verde-lima" />
              <span className="font-medium">Santa Marta, Colombia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-verde-lima" />
              <span className="font-medium">Respuesta en menos de 1 hora</span>
            </div>
          </div>

          {/* CTA #3 */}
          <AnimatedButton onClick={handleCTA} icon={MessageCircle} variant="primary">
            Escríbenos ahora por WhatsApp
          </AnimatedButton>

          <p className="mt-6 text-white/80 text-sm">Disponible 24/7 para atender tus necesidades</p>
        </div>
      </div>
    </section>
  )
}
