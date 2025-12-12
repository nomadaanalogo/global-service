import type React from "react"
import type { Metadata } from "next"
import { Poppins, Mulish } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import "./globals.css"

// Configurando fuentes Poppins para títulos y Mulish para cuerpo
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
})

export const metadata: Metadata = {
  title: "Servicio de limpieza profesional | alojamientos turísticos Airbnb Booking Santa Marta | Global Service",
  description:
    "Limpieza experta para apartamentos Airbnb Booking en Santa Marta. Lavandería, reportes con fotos y productos biodegradables. ¡Agenda por WhatsApp 24/7 hoy mismo!",
  keywords: [
    "limpieza apartamentos turisticos santa marta",
    "empresa de aseo santa marta",
    "empresa de limpieza santa marta",
    "servicio de limpieza en santa marta",
    "empresa de aseo cerca de mi",
    "limpieza airbnb santa marta",
    "limpieza entre reservas santa marta",
    "servicio limpieza oficinas santa marta",
    "lavanderia profesional santa marta",
    "limpieza alojamientos turisticos santa marta",
    "aseo apartamentos renta santa marta",
    "limpieza check in check out santa marta",
    "servicio limpieza propiedades vacacionales",
    "limpieza booking santa marta",
    "limpieza vrbo santa marta",
    "mantenimiento apartamentos turisticos",
    "limpieza profunda santa marta",
    "servicio limpieza hostal santa marta",
    "limpieza hotel boutique santa marta",
    "reporte fotografico limpieza",
    "productos biodegradables limpieza",
    "global service santa marta",
  ],
  authors: [{ name: "Global Service Santa Marta" }],
  creator: "Global Service",
  publisher: "Global Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://globalservice.com"),
  openGraph: {
    title: "Limpieza Profesional para Apartamentos Turísticos y Oficinas en Santa Marta",
    description:
      "Servicio especializado de limpieza entre reservas, lavandería profesional y reportes con fotos. Más de 50 propietarios en Colombia y el exterior confían en nosotros desde 2018.",
    url: "https://globalservice.com",
    siteName: "Global Service Santa Marta",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Service - Limpieza Profesional Santa Marta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpieza Profesional Apartamentos Turísticos Santa Marta",
    description: "Servicio experto de limpieza entre reservas, lavandería y reportes con fotos. WhatsApp 24/7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
  },
  alternates: {
    canonical: "https://globalservice.com",
  },
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${mulish.variable} font-body antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
