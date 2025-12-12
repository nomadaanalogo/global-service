import { MessageCircle } from "lucide-react"
import AnimatedButton from "@/components/ui/animated-button"

export default function CheckInCheckOut() {
  return (
    <section className="py-16 md:py-24 bg-azul-profundo relative overflow-hidden">
      {/* Destellos decorativos sutiles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-azul-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-verde-lima/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
            Servicio de limpieza Check-in / Check-out en Santa Marta
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Garantizamos que tu propiedad esté impecable antes de que llegue el próximo huésped. Nuestro servicio de{" "}
            <strong className="text-white/100 font-semibold">limpieza entre reservas</strong> incluye cambio de lencería
            y reportes fotográficos.
          </p>

          <div className="flex justify-center">
            <AnimatedButton
              href="https://wa.me/573162239720?text=Hola,%20quiero%20agendar%20una%20limpieza%20check-in/check-out"
              variant="secondary"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar ahora por WhatsApp
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
