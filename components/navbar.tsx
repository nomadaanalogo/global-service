"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Mail, MapPin, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + 100

        setIsVisible(scrollPosition < heroBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-azul-cyan/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Aumentado el tamaño */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-horizontal.png"
              alt="Global Service"
              width={220}
              height={55}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Links - Agregado estilo de link activo con línea inferior y color azul profundo */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm font-semibold transition-all pb-1 relative ${
                  isActive("/")
                    ? "text-azul-profundo after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-azul-profundo"
                    : "text-gris-pizarra hover:text-azul-cyan"
                }`}
              >
                Alojamientos turísticos
              </Link>
              <Link
                href="/limpiezaoficinassantamarta"
                className={`text-sm font-semibold transition-all pb-1 relative ${
                  isActive("/limpiezaoficinassantamarta")
                    ? "text-azul-profundo after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-azul-profundo"
                    : "text-gris-pizarra hover:text-azul-cyan"
                }`}
              >
                Oficinas
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 pl-6 border-l border-azul-cyan/30">
              <a
                href="tel:+573162239720"
                className="flex items-center gap-1.5 text-gris-pizarra hover:text-verde-lima transition-colors group"
                title="Llamar"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">+57 316 223 9720</span>
              </a>
              <a
                href="mailto:globalservicend@gmail.com"
                className="flex items-center gap-1.5 text-gris-pizarra hover:text-azul-cyan transition-colors group"
                title="Enviar correo"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium hidden xl:inline">globalservicend@gmail.com</span>
              </a>
              <div className="flex items-center gap-1.5 text-gris-pizarra" title="Santa Marta, Colombia">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-medium">Santa Marta</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gris-pizarra hover:text-azul-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-azul-cyan/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors py-2 ${
                  isActive("/")
                    ? "text-azul-profundo border-b-2 border-azul-profundo"
                    : "text-gris-pizarra hover:text-azul-cyan"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Alojamientos turísticos
              </Link>
              <Link
                href="/limpiezaoficinassantamarta"
                className={`text-sm font-semibold transition-colors py-2 ${
                  isActive("/limpiezaoficinassantamarta")
                    ? "text-azul-profundo border-b-2 border-azul-profundo"
                    : "text-gris-pizarra hover:text-azul-cyan"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Oficinas
              </Link>

              <div className="flex flex-col gap-3 pt-4 border-t border-azul-cyan/20">
                <a
                  href="tel:+573162239720"
                  className="flex items-center gap-2 text-gris-pizarra hover:text-verde-lima transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+57 316 223 9720</span>
                </a>
                <a
                  href="mailto:globalservicend@gmail.com"
                  className="flex items-center gap-2 text-gris-pizarra hover:text-azul-cyan transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">globalservicend@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-gris-pizarra">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Santa Marta, Colombia</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
