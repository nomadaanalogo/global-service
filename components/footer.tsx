import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo-icon.png" alt="Global Service Logo" width={80} height={80} className="mb-4" />
            <p className="text-sm text-center md:text-left text-gray-600">
              Servicio profesional de limpieza para alojamientos turísticos y oficinas en Santa Marta.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-deep-blue">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime shrink-0" />
                <a href="tel:+573162239720" className="text-gray-700 hover:text-cyan transition-colors">
                  +57 316 2239720
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime shrink-0" />
                <a
                  href="mailto:globalservicend@gmail.com"
                  className="text-gray-700 hover:text-cyan transition-colors break-all"
                >
                  globalservicend@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime shrink-0 mt-1" />
                <span className="text-gray-600">Santa Marta, Magdalena, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-deep-blue">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/globalservice_limpieza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-lime hover:scale-110 transition-all duration-300 text-gray-700"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@globalservice_limpieza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-lime hover:scale-110 transition-all duration-300 text-gray-700"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 pt-6">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">© {new Date().getFullYear()} Global Service. Todos los derechos reservados.</p>
            <p>
              Desarrollado por{" "}
              <a
                href="https://www.nmdstudio.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-blue hover:text-cyan transition-colors font-semibold"
              >
                nmd studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
