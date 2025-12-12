import { Shield, Leaf, Award, Clock, MessageCircle, Globe, CheckCircle } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Personal propio, capacitado y asegurado",
    description: "Con ARL Axa Colpatria para tu tranquilidad",
  },
  {
    icon: Leaf,
    title: "Productos 100% biodegradables",
    description: "Cuidamos tu propiedad y el medio ambiente",
  },
  {
    icon: Award,
    title: "Experiencia real en alojamientos turísticos",
    description: "Entendemos las necesidades del sector",
  },
  {
    icon: Clock,
    title: "Puntualidad garantizada",
    description: "Procesos confiables y tiempos de entrega cumplidos",
  },
  {
    icon: MessageCircle,
    title: "Atención rápida por WhatsApp",
    description: "Respuestas en menos de 1 hora",
  },
  {
    icon: Globe,
    title: "Apoyo total a distancia",
    description: "Para propietarios fuera del país",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-blanco-hielo" id="por-que-elegirnos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra text-balance">
              ¿Por qué nos eligen?
            </h2>
            <div className="w-24 h-1 bg-verde-lima mx-auto mb-6"></div>
            <p className="text-xl text-azul-profundo font-semibold">
              Porque ofrecemos tranquilidad y resultados impecables
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-verde-lima/10 p-4 rounded-full mb-4">
                  <reason.icon className="h-8 w-8 text-verde-lima" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gris-pizarra">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-azul-profundo text-white rounded-xl p-8 md:p-12 text-center">
            <CheckCircle className="h-12 w-12 text-verde-lima mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Un servicio basado en <span className="text-verde-lima">confianza</span>, claridad y{" "}
              <span className="text-verde-lima">cero complicaciones</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
