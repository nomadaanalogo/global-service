"use client"

import { Sparkles, Droplets, Wind, ShieldCheck, Calendar, Building } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MainServicesOficinas() {
  const services = [
    {
      title: "Limpieza diaria de oficinas",
      description:
        "Aseo regular de escritorios, sillas, equipos de cómputo, pisos y áreas comunes. Mantenimiento constante que garantiza espacios impecables cada día laboral.",
      icon: Sparkles,
      color: "text-verde-lima",
    },
    {
      title: "Limpieza de baños corporativos",
      description:
        "Desinfección profunda y mantenimiento de baños, garantizando higiene total. Reposición de insumos de aseo y aromatización constante.",
      icon: Droplets,
      color: "text-azul-cyan",
    },
    {
      title: "Limpieza de cocinas y áreas de comedor",
      description:
        "Aseo de neveras, microondas, cafeteras y áreas de alimentación. Desinfección de superficies y manejo de residuos orgánicos según protocolos sanitarios.",
      icon: Building,
      color: "text-verde-bosque",
    },
    {
      title: "Desinfección y sanitización",
      description:
        "Protocolos especializados de bioseguridad para prevenir contagios. Desinfección de superficies de alto contacto como manijas, interruptores y equipos compartidos.",
      icon: ShieldCheck,
      color: "text-azul-profundo",
    },
    {
      title: "Limpieza de ventanas y vidrios",
      description:
        "Limpieza de ventanas interiores, puertas de vidrio y mamparas. Mantenimiento regular que permite mayor entrada de luz natural a tu oficina.",
      icon: Wind,
      color: "text-azul-cyan",
    },
    {
      title: "Limpieza profunda periódica",
      description:
        "Mantenimiento intensivo programado de alfombras, tapetes, persianas y áreas de difícil acceso. Ideal para realizar mensual o trimestralmente.",
      icon: Calendar,
      color: "text-verde-lima",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-blanco-hielo" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra text-balance">
            Servicios integrales para tu oficina
          </h2>
          <p className="text-lg md:text-xl text-gris-pizarra/80 max-w-3xl mx-auto leading-relaxed">
            Soluciones completas de limpieza adaptadas a las necesidades de espacios corporativos y comerciales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-azul-cyan/20 rounded-lg overflow-hidden hover:border-azul-cyan/40 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <service.icon
                      className={`h-8 w-8 ${service.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-lg md:text-xl font-semibold text-gris-pizarra">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-gris-pizarra/80 leading-relaxed pl-12">{service.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
