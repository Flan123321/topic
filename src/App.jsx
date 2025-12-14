import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PillarPage from './pages/PillarPage';
import LegalidadPage from './pages/LegalidadPage';
import ExclusividadPage from './pages/ExclusividadPage';
import TechnologyPage from './pages/TechnologyPage';
import TransparenciaPage from './pages/TransparenciaPage';
import ModeloPage from './pages/ModeloPage';
import IngresosPage from './pages/IngresosPage';
import MarketingPage from './pages/MarketingPage';
import GuiaVentasPage from './pages/GuiaVentasPage';
import HomePage from './pages/HomePage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterClientPage from './pages/auth/RegisterClientPage';
import DashboardPage from './pages/auth/DashboardPage';
import SellPropertyPage from './pages/forms/SellPropertyPage';
import JoinNetworkPage from './pages/forms/JoinNetworkPage';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            {/* Main Content Wrapper */}
            <div className="flex-grow pt-20"> {/* PT-20 for fixed navbar */}
              <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro-cliente" element={<RegisterClientPage />} />
                <Route path="/mi-cuenta" element={<DashboardPage />} />

                {/* Lead Forms */}
                <Route path="/vender" element={<SellPropertyPage />} />
                <Route path="/unirme" element={<JoinNetworkPage />} />

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
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
