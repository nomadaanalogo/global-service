"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    url: "/images/gallery/sala-moderna.jpg",
    alt: "Limpieza profesional de sala y comedor para Airbnb en Santa Marta - Apartamento turístico impecable",
  },
  {
    url: "/images/gallery/habitacion-tropical.jpg",
    alt: "Habitación lista para check-in Airbnb Santa Marta - Servicio de limpieza entre reservas Booking",
  },
  {
    url: "/images/gallery/sala-comedor-tv.webp",
    alt: "Aseo profundo apartamento turístico Santa Marta - Limpieza check-out para alojamientos Airbnb",
  },
  {
    url: "/images/gallery/bano-limpio.webp",
    alt: "Limpieza de baños apartamentos turísticos Santa Marta - Servicio profesional Airbnb y Booking",
  },
  {
    url: "/images/gallery/estudio-vigas.webp",
    alt: "Limpieza apartaestudios renta turística Santa Marta - Servicio entre reservas Airbnb",
  },
  {
    url: "/images/gallery/cocina-amarilla.webp",
    alt: "Limpieza de cocinas alojamientos Airbnb Santa Marta - Apartamento turístico listo para huéspedes Booking",
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 md:py-24 bg-blanco-hielo overflow-hidden" id="galeria">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gris-pizarra">
            Nuestro trabajo en imágenes
          </h2>
          <div className="w-24 h-1 bg-verde-lima mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada espacio que limpiamos refleja nuestro compromiso con la excelencia
          </p>
        </div>

        {/* Desktop: Creative Grid Layout */}
        <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 max-w-7xl mx-auto h-[600px]">
          {/* Large main image */}
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-xl">
            <img
              src={images[0].url || "/placeholder.svg"}
              alt={images[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Top right */}
          <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-lg">
            <img
              src={images[1].url || "/placeholder.svg"}
              alt={images[1].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Middle right small */}
          <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-lg">
            <img
              src={images[2].url || "/placeholder.svg"}
              alt={images[2].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Middle right small 2 */}
          <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-lg">
            <img
              src={images[3].url || "/placeholder.svg"}
              alt={images[3].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Bottom left */}
          <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-lg">
            <img
              src={images[4].url || "/placeholder.svg"}
              alt={images[4].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Bottom center large */}
          <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-lg">
            <img
              src={images[5].url || "/placeholder.svg"}
              alt={images[5].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden rounded-[2.5rem_0_2.5rem_0] shadow-xl aspect-[4/3]">
            <img
              src={images[currentIndex].url || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6 text-azul-profundo" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6 text-azul-profundo" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-verde-lima" : "w-2 bg-azul-cyan/30"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
