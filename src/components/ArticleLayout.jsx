import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

const ArticleLayout = ({ title, description, publishDate, readingTime, category, children }) => {
    return (
        <>
            <SEO
                title={title}
                description={description}
                href={window.location.pathname} // Auto-detect current path
                type="article"
            />

            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
                {/* Navigation / Header Placeholder (Optional) */}

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content Column (70%) */}
                        <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-gray-100">

                            {/* Breadcrumbs */}
                            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                                <ol className="list-none p-0 inline-flex">
                                    <li className="flex items-center">
                                        <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
                                        <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                                    </li>
                                    <li className="flex items-center">
                                        <Link to="/gestion-inmobiliaria-colaborativa" className="hover:text-blue-600 transition-colors">Gestión Colaborativa</Link>
                                        <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                                    </li>
                                    <li>
                                        <span className="text-gray-800 font-medium truncate" aria-current="page">{title}</span>
                                    </li>
                                </ol>
                            </nav>

                            {/* Header */}
                            <header className="mb-10 border-b border-gray-100 pb-10">
                                {category && (
                                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                                        {category}
                                    </span>
                                )}
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                                    {title}
                                </h1>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        {publishDate || 'Actualizado recientemente'}
                                    </span>
                                    <span className="mx-3">•</span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        {readingTime || '5 min de lectura'}
                                    </span>
                                </div>
                            </header>

                            {/* Content */}
                            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
                                {children}
                            </div>

                        </article>

                        {/* Sidebar Column (30%) */}
                        <aside className="lg:col-span-4 space-y-8">

                            {/* Sticky CTA Card */}
                            <div className="sticky top-8 bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    ¿Quieres vender tu propiedad o ganar dinero refiriendo?
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm">
                                    Únete a la red colaborativa más grande de Chile. Vende rápido o genera comisiones sin ser corredor.
                                </p>

                                <div className="space-y-3">
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md transform hover:-translate-y-0.5 flex justify-center items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                        Vender Propiedad
                                    </button>

                                    <button className="w-full bg-white hover:bg-gray-50 text-blue-700 font-bold py-3 px-4 rounded-lg border-2 border-blue-600 transition-all flex justify-center items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        Ser Colaborador
                                    </button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-xs text-gray-400">
                                        Gestión 100% Legal y Transparente.
                                    </p>
                                </div>
                            </div>

                        </aside>

                    </div>
                </main>
            </div>
        </>
    );
};

export default ArticleLayout;
