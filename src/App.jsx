import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import PillarPage from './pages/PillarPage';
import LegalidadPage from './pages/LegalidadPage';
import ExclusividadPage from './pages/ExclusividadPage';
import TechnologyPage from './pages/TechnologyPage';
import TransparenciaPage from './pages/TransparenciaPage';
import ModeloPage from './pages/ModeloPage';
import IngresosPage from './pages/IngresosPage';
import MarketingPage from './pages/MarketingPage';
import GuiaVentasPage from './pages/GuiaVentasPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = () => (
  <div className="font-sans flex flex-col">
    <Helmet>
      <title>Red Inmobiliaria Colaborativa | Vende tu propiedad rápido en Chile</title>
      <meta name="description" content="Únete a la primera red colaborativa de gestión inmobiliaria. Comisiones compartidas, tecnología Big Data y venta acelerada de propiedades." />
    </Helmet>
    {/* Hero Section */}
    <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        Revolucionando el Mercado <br className="hidden md:block" /> Inmobiliario en Chile
      </h1>

      <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-10">
        Más velocidad, mayor transparencia y comisiones compartidas.
      </p>

      <Link
        to="/gestion-inmobiliaria-colaborativa"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Descubre el Modelo
      </Link>
    </div>

    {/* Pillars Grid */}
    <div className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-slate-400 tracking-wider mb-8">
          Nuestros Pilares Fundamentales
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Legalidad */}
          <div className="p-6 bg-slate-50 rounded-2xl text-center border border-slate-100 hover:border-indigo-100 transition-colors">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-lg font-bold text-slate-900">Legalidad</h3>
            <p className="text-sm text-slate-500 mt-2">Contratos civilmente válidos y certeza jurídica.</p>
          </div>
          {/* Card 2: Marketing */}
          <div className="p-6 bg-slate-50 rounded-2xl text-center border border-slate-100 hover:border-indigo-100 transition-colors">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-slate-900">Marketing</h3>
            <p className="text-sm text-slate-500 mt-2">Producción audiovisual de estándar cinematográfico.</p>
          </div>
          {/* Card 3: Tecnología */}
          <div className="p-6 bg-slate-50 rounded-2xl text-center border border-slate-100 hover:border-indigo-100 transition-colors">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-bold text-slate-900">Tecnología</h3>
            <p className="text-sm text-slate-500 mt-2">Big Data y algoritmos para acelerar el match.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Navbar />
          <div className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Pillar Page */}
              <Route path="/gestion-inmobiliaria-colaborativa" element={<PillarPage />} />

              {/* Cluster A: Legitimidad */}
              <Route path="/blog/legalidad-comisiones-chile" element={<LegalidadPage />} />
              <Route path="/blog/corredor-vs-red" element={<ModeloPage />} />
              <Route path="/blog/ingresos-extra" element={<IngresosPage />} />

              {/* Cluster B: Cliente Final */}
              <Route path="/blog/peligro-exclusividad-inmobiliaria" element={<ExclusividadPage />} />
              <Route path="/blog/marketing-impacto" element={<MarketingPage />} />
              <Route path="/blog/guia-venta-terrenos" element={<GuiaVentasPage />} />

              {/* Cluster C: Tecnología */}
              <Route path="/blog/tecnologia-venta-propiedades" element={<TechnologyPage />} />
              <Route path="/blog/transparencia-gestion" element={<TransparenciaPage />} />

              {/* 404 Route */}
              <Route path="*" element={
                <div className="text-center py-20 font-sans">
                  <h1 className="text-6xl font-extrabold text-slate-900 mb-4">404</h1>
                  <p className="text-xl text-slate-600 mb-8">Página no encontrada</p>
                  <Link to="/" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    Volver al Inicio
                  </Link>
                </div>
              } />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
