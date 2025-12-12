import HeroOficinas from "@/components/sections/oficinas/hero-oficinas"
import AboutUsOficinas from "@/components/sections/oficinas/about-us-oficinas"
import MainServicesOficinas from "@/components/sections/oficinas/main-services-oficinas"
import WhyChooseUsOficinas from "@/components/sections/oficinas/why-choose-us-oficinas"
import FAQ from "@/components/sections/faq"
import FinalCTAOficinas from "@/components/sections/oficinas/final-cta-oficinas"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Limpieza de Oficinas en Santa Marta | Global Service - Empresas y Corporativos",
  description:
    "Servicio profesional de limpieza y mantenimiento para oficinas en Santa Marta. Personal capacitado, productos biodegradables y horarios flexibles. Cotización inmediata por WhatsApp.",
  keywords: [
    "limpieza de oficinas santa marta",
    "aseo de oficinas santa marta",
    "limpieza corporativa santa marta",
    "servicio de limpieza empresas santa marta",
    "mantenimiento oficinas santa marta",
    "limpieza comercial santa marta",
    "aseo empresarial santa marta",
    "limpieza espacios corporativos",
    "servicio de aseo para oficinas",
    "limpieza profesional oficinas",
    "empresa de limpieza santa marta",
    "limpieza diaria oficinas",
    "limpieza profunda oficinas",
  ],
  openGraph: {
    title: "Limpieza de Oficinas en Santa Marta | Global Service",
    description:
      "Mantén tu oficina impecable con nuestro servicio profesional de limpieza. Personal capacitado, horarios flexibles y productos biodegradables.",
    type: "website",
    locale: "es_CO",
    siteName: "Global Service Santa Marta",
  },
}

export default function LimpiezaOficinasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://globalservice.com/limpiezaoficinassantamarta#business",
        name: "Global Service - Limpieza de Oficinas",
        description: "Servicio profesional de limpieza y mantenimiento para oficinas en Santa Marta",
        url: "https://globalservice.com/limpiezaoficinassantamarta",
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "35",
        },
      },
      {
        "@type": "Service",
        "@id": "https://globalservice.com/limpiezaoficinassantamarta#service",
        name: "Limpieza de Oficinas en Santa Marta",
        description:
          "Servicio profesional de limpieza y mantenimiento para oficinas, espacios corporativos y comerciales en Santa Marta",
        provider: {
          "@id": "https://globalservice.com/limpiezaoficinassantamarta#business",
        },
        areaServed: {
          "@type": "City",
          name: "Santa Marta",
        },
        serviceType: "Limpieza de oficinas",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Limpieza Corporativa",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza diaria de oficinas",
                description: "Aseo regular de escritorios, baños, áreas comunes y cocinas corporativas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza profunda",
                description: "Mantenimiento intensivo de alfombras, ventanas y espacios de difícil acceso",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desinfección de áreas de trabajo",
                description: "Protocolos de bioseguridad y sanitización de espacios laborales",
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <HeroOficinas />
        <AboutUsOficinas />
        <WhatsAppButton />
        <MainServicesOficinas />
        <WhyChooseUsOficinas />
        <FAQ />
        <FinalCTAOficinas />
      </main>
      <Footer />
    </>
  )
}
