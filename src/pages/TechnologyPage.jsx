import React, { useEffect, useState } from 'react';
import ArticleLayout from '../components/ArticleLayout';

// Componente Visual: Widget de Matching con Big Data
const BuyerMatchWidget = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simular animación de carga
        const timer = setTimeout(() => setProgress(94), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="my-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 font-sans">
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <h3 className="text-sm font-semibold text-green-400 tracking-wider uppercase">Sistema de Matching Activo</h3>
                    </div>
                    <span className="text-slate-400 text-xs font-mono">ID: PROP-8921-X</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-400 text-sm mb-1">Propiedad Analizada</p>
                        <p className="text-white text-lg font-medium">Parcela 5.000m² - Sector Sur</p>

                        <div className="mt-6">
                            <p className="text-slate-400 text-sm mb-1">Compradores Potenciales Detectados</p>
                            <div className="flex items-end">
                                <span className="text-4xl font-bold text-white">1,420</span>
                                <span className="text-green-500 ml-2 mb-1 text-sm font-medium">▲ 12% vs sem. pasada</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-white font-medium">Match Score</span>
                            <span className="text-3xl font-bold text-blue-400">{progress}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-blue-500 h-4 rounded-full transition-all duration-1000 ease-out relative"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 text-right">Algoritmo de afinidad completado</p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950 px-6 py-3 border-t border-slate-700 flex justify-between items-center">
                <div className="flex -space-x-2">
                    {/* Simulación de avatares de compradores */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center text-xs text-white font-bold">
                            {String.fromCharCode(64 + i)}
                        </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-slate-800 border-2 border-slate-800 flex items-center justify-center text-xs text-white">
                        +1k
                    </div>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    Ver reporte completo →
                </button>
            </div>
        </div>
    );
};

const TechnologyPage = () => {
    return (
        <ArticleLayout
            title="Digitalización de la Venta: Cómo usamos Big Data para encontrar al comprador ideal"
            description="¿Subir fotos a un portal y esperar? Eso es el pasado. Descubre cómo nuestra tecnología de Matching algorítmico acelera la venta de tu propiedad reduciendo el tiempo de espera."
            publishDate="16 de Diciembre, 2025"
            readingTime="5 min de lectura"
            category="Innovación PropTech"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                El mercado inmobiliario está lleno de promesas vacías, pero si hay algo que no miente, son los datos. Mientras el corretaje tradicional sigue operando con técnicas de los años 90 (el clásico "Post & Pray" o "Publicar y Rezar"), nosotros hemos convertido la venta en una ciencia exacta.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Error de "Publicar y Rezar"</h2>
            <p className="mb-4">
                La mayoría de los agentes suben tu propiedad a un portal web y se sientan a esperar que suene el teléfono. Es una estrategia pasiva y lenta. En un mercado saturado, tu casa se convierte en una aguja en un pajar.
            </p>
            <p className="mb-4">
                Nosotros no esperamos. Nosotros salimos a cazar.
            </p>

            {/* Widget Insertado */}
            <BuyerMatchWidget />

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nuestra Tecnología: Algoritmos de "Matching"</h2>
            <p className="mb-4">
                Imagina que tu propiedad tiene una "huella digital": ubicación, precio, m², orientación, tipo de suelo. Por otro lado, tenemos una base de datos viva de miles de compradores reales, cada uno con sus preferencias de búsqueda analizadas.
            </p>
            <p className="mb-4">
                No le mostramos tu terreno a cualquiera. Usamos <strong>Big Data</strong> para cruzar la información.
            </p>
            <div className="bg-white border text-gray-600 p-6 rounded-lg shadow-sm mb-6">
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span><strong>Filtrado Demográfico:</strong> ¿Tu casa es ideal para familias jóvenes? El sistema la prioriza en ese segmento.</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span><strong>Intención de Compra:</strong> Detectamos quién está solo "vitrineando" y quién tiene crédito pre-aprobado.</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span><strong>Alertas Automáticas:</strong> Apenas publicamos, el sistema notifica a los 50 mejores candidatos al instante.</span>
                    </li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Velocidad es Dinero</h2>
            <p className="mb-4">
                La automatización elimina los tiempos muertos. No dependemos de que un humano recuerde llamar a un interesado. El sistema mantiene el seguimiento (follow-up) activo hasta conseguir una visita o una oferta.
            </p>
            <p className="mb-4">
                Esta eficiencia tecnológica reduce dramáticamente los días en mercado (DOM). Menos tiempo en venta significa mejor precio final, ya que la propiedad no se "quema".
            </p>

            <p className="mt-8 text-gray-600 font-medium">
                ¿Quieres ver tu propiedad gestionada con esta tecnología? <span className="text-blue-600 cursor-pointer">Agenda una demostración hoy.</span>
            </p>

        </ArticleLayout>
    );
};

export default TechnologyPage;
