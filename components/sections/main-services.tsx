"use client"

import { Sparkles, Shirt, Package, Gift, Camera, User } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const services = [
  {
    icon: Sparkles,
    title: "Limpieza entre reservas",
    description:
      "Habitaciones, baños, cocina y áreas sociales impecables y listas para el siguiente huésped, siguiendo estándares de alistamiento turístico.",
    color: "text-verde-lima",
  },
  {
    icon: Shirt,
    title: "Lavandería",
    description:
      "Lavado profesional y entrega organizada de ropa de cama y toallas, con excelente presentación para cada estancia.",
    color: "text-azul-cyan",
  },
  {
    icon: Package,
    title: "Productos de aseo",
    description:
      "Suministro de productos biodegradables y de uso diario para mantener el apartamento limpio, fresco y listo para cada estadía.",
    color: "text-verde-lima",
  },
  {
    icon: Gift,
    title: "Amenities para huéspedes",
    description:
      "Entrega de amenities esenciales y de alta rotación, ideales para mejorar la experiencia y calificación del huésped.",
    color: "text-azul-cyan",
  },
  {
    icon: Camera,
    title: "Reporte con fotos",
    description:
      "Registro fotográfico después de cada servicio, con evidencia del estado del apartamento y novedades relevantes para el propietario o administrador.",
    color: "text-verde-lima",
  },
  {
    icon: User,
    title: "Apoyo operativo a la administración",
    description: "Acompañamiento en check-in/check-out y soporte operativo básico con huéspedes.",
    color: "text-azul-cyan",
  },
]

export default function MainServices() {
  return (
    <section className="py-16 md:py-24 bg-blanco-hielo" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra text-balance">
            Tu propiedad, <span className="text-azul-profundo">impecable</span> en cada estadía
          </h2>
          <div className="w-24 h-1 bg-verde-lima mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-l-4 border-l-transparent hover:border-l-azul-cyan transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <service.icon
                      className={`h-8 w-8 ${service.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-lg md:text-xl font-semibold text-gris-pizarra">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed pl-12">{service.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
