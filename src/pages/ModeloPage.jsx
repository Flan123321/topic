import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

const ComparisonTable = () => {
    return (
        <div className="my-10 overflow-hidden border border-gray-200 rounded-xl shadow-sm font-sans text-sm sm:text-base">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Criterio
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Corredor Tradicional
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50">
                            Nuestra Red
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Alcance de Difusión</td>
                        <td className="px-6 py-4 text-center text-gray-500">Limitado (Agenda personal)</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">Exponencial (50+ Socios)</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Incentivo Compartido</td>
                        <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </span>
                            <span className="block text-xs mt-1">(Prefieren el 100%)</span>
                        </td>
                        <td className="px-6 py-4 text-center bg-blue-50">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                            <span className="block text-xs mt-1 font-bold text-green-600">Siempre (Modelo 50/50)</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Velocidad de Venta</td>
                        <td className="px-6 py-4 text-center text-gray-500">Lenta (Meses/Años)</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">Rápida (Semanas)</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Tecnología de Matching</td>
                        <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </span>
                        </td>
                        <td className="px-6 py-4 text-center bg-blue-50">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const ModeloPage = () => {
    return (
        <ArticleLayout
            title="Corredor vs. Red de Colaboradores: Por qué el trabajo en equipo cierra ventas en tiempo récord"
            description="¿Lobo solitario o manada organizada? Descubre por qué nuestro modelo colaborativo supera al corretaje tradicional en velocidad, alcance y resultados."
            publishDate="19 de Diciembre, 2025"
            readingTime="6 min de lectura"
            category="Modelo de Negocio"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                La imagen del corredor de propiedades "lobo solitario", con su maletín y su teléfono, es romántica pero obsoleta. En un mercado digital e hiperconectado, tratar de vender una propiedad solo es como intentar ganar un partido de fútbol sin pasar la pelota.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">La Matemática Simple de la Velocidad</h2>
            <p className="mb-4">
                Muchos corredores tradicionales se niegan a compartir su comisión. Piensan: <em>"¿Por qué voy a darle la mitad a otro si puedo ganarlo todo yo?"</em>.
            </p>
            <p className="mb-4">
                El problema es que el 100% de cero es <strong>cero</strong>.
            </p>
            <div className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6">
                <p className="font-medium text-blue-900">
                    Preferimos ganar el 50% de una venta rápida hoy, que esperar 12 meses para quizás ganar el 100% de una venta que se enfría.
                </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Efecto Red: 1 vs 50</h2>
            <p className="mb-4">
                Imagina el alcance. Un corredor promedio maneja una cartera de quizás 10 o 20 clientes activos. Si tu casa no le gusta a ninguno de esos 20, la venta se detiene.
            </p>
            <p className="mb-4">
                Nuestra red opera diferente. Al ingresar tu propiedad, no la toma <em>una</em> persona. La toman 50 socios simultáneamente. Si cada uno tiene 10 clientes, de golpe tu propiedad está frente a <strong>500 compradores potenciales</strong> directos.
            </p>

            {/* Tabla Comparativa */}
            <ComparisonTable />

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">¿Por qué esto te beneficia a ti?</h2>
            <p className="mb-4">
                Ya seas propietario o un futuro colaborador, este modelo elimina el ego de la ecuación. Aquí no importa "quién" vende, importa "que" se venda.
            </p>
            <p className="mb-4">
                La colaboración sistémica reduce la ansiedad, acelera los trámites y garantiza que siempre haya alguien disponible para mostrar la propiedad. No dependemos de la agenda de un solo individuo.
            </p>

            <p className="mt-8 text-gray-600 font-medium">
                ¿Te hace sentido? Únete a la evolución del corretaje.
            </p>

        </ArticleLayout>
    );
};

export default ModeloPage;
