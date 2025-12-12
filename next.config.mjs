/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración clave para Cloudflare Pages (Exportación Estática)
  output: 'export', 
  
  // Configuraciones que ya tenías:
  typescript: {
    // Advertencia: esto ignora errores de TypeScript durante el build. Úsalo con precaución.
    ignoreBuildErrors: true,
  },
  images: {
    // Deshabilita la optimización de imágenes. Necesario si no usas Next.js server.
    unoptimized: true, 
  },
  
  // Opcional: Recomendado para que la carpeta de salida sea "build" en lugar de "out"
  // distDir: 'build', 
}

export default nextConfig