import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

// Definición manual de rutas dinámicas para el Sitemap
// Debe coincidir EXACTAMENTE con las rutas definidas en src/App.jsx
const dynamicRoutes = [
  // Pillar Page
  '/gestion-inmobiliaria-colaborativa',

  // Cluster A: Legitimidad
  '/blog/legalidad-comisiones-chile',
  '/blog/corredor-vs-red',
  '/blog/ingresos-extra',

  // Cluster B: Cliente Final
  '/blog/peligro-exclusividad-inmobiliaria',
  '/blog/marketing-impacto',
  '/blog/guia-venta-terrenos',

  // Cluster C: Tecnología
  '/blog/tecnologia-venta-propiedades',
  '/blog/transparencia-gestion'
];

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://tuweb.cl', // Cambiar por dominio real en producción
      dynamicRoutes,
      generateRobotsTxt: false
    }),
  ],
  build: {
    outDir: 'dist',
  }
});
