"use client"

import { Sparkles, Sofa, Blinds, Bug, Wind, Building } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

const additionalServices = [
  { icon: Sparkles, label: "Limpieza profunda" },
  { icon: Sofa, label: "Desinfección de muebles" },
  { icon: Blinds, label: "Limpieza de persianas" },
  { icon: Bug, label: "Control de plagas" },
  { icon: Wind, label: "Aromatización y kits eco" },
  { icon: Building, label: "Limpieza de oficinas" },
]

export default function AdditionalServices() {
  const whatsappNumber = "573162239720"
  const message = "¡Hola! Quiero consultar disponibilidad para servicios adicionales."

  const handleCTA = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gris-pizarra">Servicios adicionales</h2>
            <div className="w-24 h-1 bg-azul-cyan mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementa tu servicio con soluciones especializadas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-blanco-hielo hover:bg-azul-cyan/10 transition-colors border border-transparent hover:border-azul-cyan"
              >
                <service.icon className="h-10 w-10 text-azul-profundo" />
                <span className="text-center font-medium text-sm md:text-base">{service.label}</span>
              </div>
            ))}
          </div>

          {/* CTA #2 */}
          <div className="text-center">
            <AnimatedButton onClick={handleCTA} variant="secondary">
              Consultar disponibilidad por WhatsApp
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
