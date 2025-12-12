import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo coordinan si estoy fuera del país?",
    answer:
      "Manejamos todo por WhatsApp con reportes fotográficos completos. Te mantenemos informado de cada detalle y coordinamos con tus plataformas de reservas directamente.",
  },
  {
    question: "¿Trabajan domingos y festivos?",
    answer:
      "Sí, trabajamos todos los días del año para garantizar que tu propiedad esté lista sin importar cuándo llegue tu siguiente huésped.",
  },
  {
    question: "¿Qué pasa si el huésped sale tarde?",
    answer:
      "Coordinamos horarios flexibles y nos adaptamos a las situaciones de check-out tardío para asegurar que todo esté listo a tiempo.",
  },
  {
    question: "¿Incluyen productos de limpieza?",
    answer:
      "Sí, utilizamos nuestros propios productos biodegradables profesionales. También ofrecemos servicio de suministro de productos de aseo para el apartamento.",
  },
  {
    question: "¿Realizan limpieza profunda?",
    answer:
      "Sí, ofrecemos servicio de limpieza profunda para mantenimientos programados o cuando la propiedad lo requiera.",
  },
  {
    question: "¿Manejan llaves?",
    answer:
      "NO manejamos llaves. Trabajamos con códigos de acceso digital, cajas de seguridad o coordinamos con administraciones del edificio por temas de seguridad y responsabilidad.",
  },
  {
    question: "¿Cómo se reportan daños o pérdidas?",
    answer:
      "Realizamos un reporte fotográfico completo después de cada servicio, documentando el estado del apartamento y cualquier novedad que encuentre el equipo.",
  },
  {
    question: "¿Ofrecen garantía de limpieza?",
    answer:
      "Absolutamente. Si algo no cumple con tus estándares, regresamos sin costo adicional para corregirlo de inmediato.",
  },
  {
    question: "¿Atienden urgencias?",
    answer:
      "Sí, nuestro WhatsApp está disponible 24/7 y atendemos emergencias de limpieza con tiempos de respuesta menores a 1 hora.",
  },
]

const exclusions = [
  "Actividades de limpieza en altura superior a 1,50 mts.",
  "Limpieza de vidrios exteriores (edificios)",
  "Levantamiento de objetos de un peso superior a 20kg",
  "Lavado de persianas, muebles, colchones (disponible como servicio adicional)",
  "Recepción o manejo de dinero",
  "Diligencias o actividades de mensajería, compras varias",
  "Cocinar, planchar",
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra">Preguntas frecuentes</h2>
            <div className="w-24 h-1 bg-azul-cyan mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Resolvemos tus dudas más comunes</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-semibold text-gris-pizarra hover:text-azul-profundo">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem
              value="exclusions"
              className="border-2 border-azul-cyan/20 rounded-2xl px-6 bg-blanco-hielo/50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-azul-cyan flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-gris-pizarra">¿Qué NO incluye el servicio?</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground mb-4">
                  Para tu información, el servicio NO incluye las siguientes actividades:
                </p>
                <ul className="space-y-3">
                  {exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-azul-cyan font-bold text-lg mt-0.5">•</span>
                      <span className="text-gris-pizarra leading-relaxed">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
