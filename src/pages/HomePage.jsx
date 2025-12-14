import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Scale, Rocket, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
            <Helmet>
                <title>Red Inmobiliaria Colaborativa | Vende tu propiedad rápido en Chile</title>
                <meta name="description" content="Únete a la primera red colaborativa de gestión inmobiliaria. Comisiones compartidas, tecnología Big Data y venta acelerada de propiedades." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100">
                            Nueva Era Inmobiliaria 2024
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                            La Revolución del <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                Mercado Colaborativo
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
                    >
                        Olvídate de vender solo. Únete a la red que conecta a
                        <span className="font-semibold text-slate-800"> +500 corredores </span>
                        con tecnología de punta para cerrar negocios en tiempo récord.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/gestion-inmobiliaria-colaborativa"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 hover:-translate-y-1 focus:outline-none ring-offset-2 focus:ring-2 ring-indigo-500"
                        >
                            Descubrir Modelo
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/blog/transparencia-gestion"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 focus:outline-none"
                        >
                            Ver Transparencia
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Pillars */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Tres Pilares. Una Sola Misión.
                        </h2>
                        <p className="text-lg text-slate-500">
                            Eliminamos la fricción de la venta inmobiliaria tradicional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Scale className="w-7 h-7" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                                Certeza Legal
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Cada propiedad pasa por un estudio de títulos riguroso. Sin sorpresas, sin letra chica.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Contratos Validados
                                </li>
                                <li className="flex items-center text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Due Diligence 360°
                                </li>
                            </ul>
                            <Link to="/blog/legalidad-comisiones-chile" className="text-indigo-600 font-semibold text-sm hover:underline">
                                Leer más &rarr;
                            </Link>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                                Marketing de Impacto
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                No subimos fotos borrosas. Creamos producciones cinematográficas que enamoran a primera vista.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Fotografía Drone 4K
                                </li>
                                <li className="flex items-center text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Storytelling Emocional
                                </li>
                            </ul>
                            <Link to="/blog/marketing-impacto" className="text-indigo-600 font-semibold text-sm hover:underline">
                                Ver ejemplos &rarr;
                            </Link>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Cpu className="w-7 h-7" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                                Tecnología Big Data
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Cruzamos datos de cientos de fuentes para encontrar al comprador ideal antes de publicar.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Matching Algorítmico
                                </li>
                                <li className="flex items-center text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Valorización con IA
                                </li>
                            </ul>
                            <Link to="/blog/tecnologia-venta-propiedades" className="text-indigo-600 font-semibold text-sm hover:underline">
                                Conocer tecnología &rarr;
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
