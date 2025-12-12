import Hero from "@/components/sections/hero"
import AboutUs from "@/components/sections/about-us"
import MainServices from "@/components/sections/main-services"
import AdditionalServices from "@/components/sections/additional-services"
import Testimonials from "@/components/sections/testimonials"
import WhyChooseUs from "@/components/sections/why-choose-us"
import FAQ from "@/components/sections/faq"
import FinalCTA from "@/components/sections/final-cta"
import WhatsAppButton from "@/components/whatsapp-button"
import CheckInCheckOut from "@/components/sections/checkin-checkout"
import Gallery from "@/components/sections/gallery"
import Footer from "@/components/footer"

export default function Home() {
  // Schema.org JSON-LD para negocios locales y servicios
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://globalservice.com/#business",
        name: "Global Service",
        description: "Servicio profesional de limpieza para apartamentos turísticos, Airbnb, booking. En Santa Marta",
        url: "https://globalservice.com",
        telephone: "+573162239720",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santa Marta",
          addressRegion: "Magdalena",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 11.2408,
          longitude: -74.2099,
        },
        areaServed: {
          "@type": "City",
          name: "Santa Marta",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "50",
        },
      },
      {
        "@type": "Service",
        "@id": "https://globalservice.com/#service-apartamentos",
        name: "Limpieza de Apartamentos Turísticos",
        description:
          "Servicio especializado de limpieza entre reservas para apartamentos turísticos, Airbnb, Booking y VRBO en Santa Marta",
        provider: {
          "@id": "https://globalservice.com/#business",
        },
        areaServed: {
          "@type": "City",
          name: "Santa Marta",
        },
        serviceType: "Limpieza entre reservas",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Limpieza",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza entre reservas",
                description: "Habitaciones, baños, cocina y áreas sociales impecables para cada huésped",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lavandería profesional",
                description: "Lavado y entrega organizada de ropa de cama y toallas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Reporte con fotos",
                description: "Registro fotográfico después de cada servicio con evidencias",
              },
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://globalservice.com/#service-oficinas",
        name: "Limpieza de Oficinas en Santa Marta",
        description: "Servicio profesional de limpieza y mantenimiento para oficinas comerciales en Santa Marta",
        provider: {
          "@id": "https://globalservice.com/#business",
        },
        areaServed: {
          "@type": "City",
          name: "Santa Marta",
        },
        serviceType: "Limpieza de oficinas",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo coordinan si estoy fuera del país?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Coordinamos todo por WhatsApp y enviamos reportes con fotos después de cada servicio. Brindamos apoyo total a distancia para propietarios fuera del país.",
            },
          },
          {
            "@type": "Question",
            name: "¿Trabajan domingos y festivos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, trabajamos todos los días incluyendo domingos y festivos para adaptarnos a las necesidades de los alojamientos turísticos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Ofrecen servicio de limpieza para Airbnb en Santa Marta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, nos especializamos en limpieza entre reservas para propiedades de Airbnb, Booking, VRBO y otros alojamientos turísticos en Santa Marta.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué exclusiones tienen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Por favor, revisa nuestras políticas en la sección de FAQ para obtener información sobre exclusiones.",
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <Hero />
        <AboutUs />
        <CheckInCheckOut />
        <WhatsAppButton />
        <MainServices />
        <AdditionalServices />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
