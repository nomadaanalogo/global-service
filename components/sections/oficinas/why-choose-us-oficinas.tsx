import { Shield, Leaf, Clock, Users, MessageCircle, Globe } from "lucide-react"

export default function WhyChooseUsOficinas() {
  const reasons = [
    {
      icon: Users,
      title: "Personal propio y capacitado",
      description: "Equipo entrenado en limpieza corporativa con protocolos profesionales y ARL Axa Colpatria.",
    },
    {
      icon: Leaf,
      title: "Productos biodegradables",
      description: "Insumos ecológicos certificados que cuidan el medio ambiente y la salud de tus colaboradores.",
    },
    {
      icon: Clock,
      title: "Horarios flexibles",
      description:
        "Nos adaptamos a tu operación: limpieza antes, durante o después del horario laboral según tu necesidad.",
    },
    {
      icon: Shield,
      title: "Procesos confiables",
      description: "Protocolos estandarizados de limpieza y supervisión constante para garantizar calidad.",
    },
    {
      icon: MessageCircle,
      title: "Atención rápida",
      description: "Comunicación directa por WhatsApp para coordinar servicios y resolver cualquier inquietud.",
    },
    {
      icon: Globe,
      title: "Experiencia corporativa",
      description: "Más de 6 años atendiendo empresas en Santa Marta con excelentes referencias.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="por-que-elegirnos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra text-balance">
            ¿Por qué confiar en nosotros?
          </h2>
          <p className="text-lg md:text-xl text-gris-pizarra/80 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos tranquilidad y resultados impecables para tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-blanco-hielo p-6 rounded-lg border-2 border-azul-cyan/20 hover:border-verde-lima/50 hover:shadow-lg transition-all duration-300"
            >
              <reason.icon className="h-12 w-12 text-azul-profundo mb-4" />
              <h3 className="text-xl font-bold text-gris-pizarra mb-3">{reason.title}</h3>
              <p className="text-gris-pizarra/80 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
