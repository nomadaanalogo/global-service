"use client"

import type React from "react"
import type { LucideIcon } from "lucide-react"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  icon?: LucideIcon
  variant?: "primary" | "secondary"
  className?: string
}

function AnimatedButton({
  children,
  onClick,
  href,
  icon: Icon,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  const isPrimary = variant === "primary"

  const gradientClasses = isPrimary
    ? "bg-gradient-to-r from-verde-lima via-azul-cyan to-verde-bosque"
    : "bg-gradient-to-r from-azul-cyan via-azul-profundo to-verde-lima"

  const buttonClasses = `group relative inline-flex items-center justify-center text-base md:text-lg rounded-xl px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
    isPrimary
      ? "bg-white text-azul-profundo hover:bg-white/95 hover:shadow-verde-lima/30"
      : "bg-white text-azul-cyan hover:bg-white/95 hover:shadow-azul-cyan/30"
  }`

  const content = (
    <>
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}

      <svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        height={10}
        width={10}
        fill="none"
        className="mt-0.5 ml-2 -mr-1 stroke-current stroke-2"
      >
        <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100" />
        <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]" />
      </svg>
    </>
  )

  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      <div
        className={`absolute inset-0 duration-1000 opacity-60 transition-all rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200 ${gradientClasses}`}
      />

      {href ? (
        <a href={href} className={buttonClasses}>
          {content}
        </a>
      ) : (
        <button onClick={onClick} className={buttonClasses}>
          {content}
        </button>
      )}
    </div>
  )
}

export { AnimatedButton }
export default AnimatedButton
