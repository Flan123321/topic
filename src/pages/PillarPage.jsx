import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Coins, Scale, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react';

const PillarPage = () => {
    return (
        <>
            <SEO
                title="Gestión Inmobiliaria Colaborativa: El Modelo 2024"
                description="Descubre cómo la red colaborativa acelera la venta de propiedades en Chile. Más velocidad, transparencia y comisiones compartidas."
                href="/gestion-inmobiliaria-colaborativa"
                type="article"
            />

            <div className="bg-slate-50 min-h-screen font-sansselection:bg-indigo-500 selection:text-white pb-20">

                {/* Hero Section */}
                <header className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-white opacity-70"></div>

                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                                El Futuro del Corretaje
                            </span>
                            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                                Gestión Inmobiliaria <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Colaborativa</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Olvida el modelo de "vendedor solitario". Descubre el poder de una red conectada que multiplica por 10x la velocidad de venta.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex justify-center gap-4 flex-wrap"
                        >
                            <Link to="/vender" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1">
                                Vender mi Propiedad
                            </Link>
                            <Link to="/unirme" className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold rounded-lg transition-all">
                                Unirme al Equipo
                            </Link>
                        </motion.div>
                    </div>
                </header>

                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

                    {/* The Problem vs Solution Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-slate-100"
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                                    El Viejo Modelo (Lento)
                                </h2>
                                <p className="text-slate-600 mb-6">
                                    Entregas tu propiedad a un solo corredor. Él pone un letrero, publica en Yapo y espera sentado. Si tienes suerte, alguien llama en 6 meses.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-slate-500 text-sm">
                                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 text-xs">✕</span>
                                        Exclusividad que amarra
                                    </li>
                                    <li className="flex items-center text-slate-500 text-sm">
                                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 text-xs">✕</span>
                                        Alcance limitado
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                                <h2 className="font-display text-2xl font-bold text-indigo-900 mb-4 relative z-10">
                                    Nuestro Modelo (Red)
                                </h2>
                                <p className="text-indigo-800 mb-6 relative z-10">
                                    Tu propiedad entra a un ecosistema de +500 agentes conectados. Todos compiten por venderla porque <strong>compartimos la comisión</strong>.
                                </p>
                                <ul className="space-y-3 relative z-10">
                                    <li className="flex items-center text-indigo-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-indigo-500" />
                                        Velocidad x10
                                    </li>
                                    <li className="flex items-center text-indigo-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-indigo-500" />
                                        Incentivo real de venta
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Benefits Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* Owner Benefits */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Para Propietarios</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600 text-sm"><strong>Masificación:</strong> No dependes de un solo aviso. Tu casa circula en grupos de inversión y redes privadas.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600 text-sm"><strong>Filtro Real:</strong> Solo llevamos visitas con crédito pre-aprobado. Cero turismo inmobiliario.</span>
                                </li>
                            </ul>
                            <Link to="/blog/peligro-exclusividad-inmobiliaria" className="inline-flex items-center mt-6 text-indigo-600 font-semibold text-sm hover:underline">
                                Por qué no firmar exclusividad <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Affiliate Benefits */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Para Colaboradores</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600 text-sm"><strong>Ingresos en UF:</strong> Gana comisiones compartidas (canje) o por referir propiedades.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600 text-sm"><strong>Sin Burocracia:</strong> Nosotros ponemos la marca, la tecnología y el área legal. Tú traes el negocio.</span>
                                </li>
                            </ul>
                            <Link to="/blog/ingresos-extra" className="inline-flex items-center mt-6 text-indigo-600 font-semibold text-sm hover:underline">
                                Ver modelo de comisiones <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Trust / Legal Block */}
                    <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white mb-20 relative overflow-hidden">
                        <div className="relative z-10">
                            <Scale className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                            <h2 className="font-display text-3xl font-bold mb-6">Marco Legal Blindado</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                                No trabajamos "de palabra". Todo se respalda con Mandatos Civiles y revisión de títulos. Protegemos tu patrimonio y aseguramos el pago de comisiones.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                    <ShieldCheck className="w-5 h-5 text-green-400" />
                                    <span>Inscripción en Conservador</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                    <ShieldCheck className="w-5 h-5 text-green-400" />
                                    <span>Contratos Notariales</span>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link to="/blog/legalidad-comisiones-chile" className="text-white border-b border-indigo-500 hover:text-indigo-400 transition-colors pb-1">
                                    Leer análisis legal completo
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center">
                        <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                            ¿Listo para operar con tecnología y velocidad?
                        </h3>
                        <div className="inline-flex rounded-md shadow-sm">
                            <Link to="/unirme" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                Contactar Ahora
                            </Link>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
};

export default PillarPage;
