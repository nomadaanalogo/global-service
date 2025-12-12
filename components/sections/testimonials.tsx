import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María Rodríguez",
    location: "Propietaria en Miami",
    rating: 5,
    text: "Desde que trabajo con Global Service puedo estar tranquila desde el exterior. El reporte con fotos es invaluable y mis huéspedes siempre comentan sobre la limpieza impecable.",
  },
  {
    name: "Carlos Mendoza",
    location: "Administrador de 8 propiedades",
    rating: 5,
    text: "La puntualidad y profesionalismo de Global Service es excepcional. Han sido clave para mantener mis calificaciones por encima de 4.8 estrellas en todas mis propiedades.",
  },
  {
    name: "Laura Gómez",
    location: "Dueña de apartamento turístico",
    rating: 5,
    text: "El equipo es confiable, responsable y tienen gran atención al detalle. La comunicación por WhatsApp es rápida y siempre resuelven cualquier situación de inmediato.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-azul-profundo text-white" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-verde-lima mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 md:p-8">
                <Quote className="h-8 w-8 text-verde-lima mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-verde-lima text-verde-lima" />
                  ))}
                </div>

                <p className="text-white/90 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
