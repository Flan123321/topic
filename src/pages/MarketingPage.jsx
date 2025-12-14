import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

// Componente Visual: Escaparate de Medios de Alto Impacto
const MediaShowcase = () => {
    return (
        <div className="my-12 bg-black rounded-2xl overflow-hidden shadow-2xl font-sans">
            <div className="relative h-64 sm:h-80 bg-gray-900 group cursor-pointer overflow-hidden">
                {/* Placeholder de Imagen Cinematográfica */}
                <img
                    src="https://images.unsplash.com/photo-1600596542815-e32870413021?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    alt="Producción Inmobiliaria de Lujo"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105"
                />

                {/* Overlay Texto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <p className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 border border-white/30 px-4 py-1 rounded-full backdrop-blur-md">
                        Calidad Cinematográfica
                    </p>
                    <h3 className="text-3xl sm:text-5xl font-serif text-white text-center mb-8 drop-shadow-lg">
                        La Primera Visita es Digital
                    </h3>

                    {/* Botones Simulados */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors transform hover:-translate-y-1 shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Ver Drone 4K</span>
                        </button>

                        <button className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            <span>Tour Virtual 360°</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid de Formatos */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 border-t border-gray-800 bg-gray-900">
                <div className="p-4 text-center">
                    <span className="block text-2xl mb-1">📸</span>
                    <span className="text-gray-400 text-xs uppercase font-bold">Foto HDR</span>
                </div>
                <div className="p-4 text-center">
                    <span className="block text-2xl mb-1">✍️</span>
                    <span className="text-gray-400 text-xs uppercase font-bold">Storytelling</span>
                </div>
                <div className="p-4 text-center">
                    <span className="block text-2xl mb-1">🎨</span>
                    <span className="text-gray-400 text-xs uppercase font-bold">Staging</span>
                </div>
                <div className="p-4 text-center">
                    <span className="block text-2xl mb-1">🎯</span>
                    <span className="text-gray-400 text-xs uppercase font-bold">Ads Segmentados</span>
                </div>
            </div>
        </div>
    );
};

const MarketingPage = () => {
    return (
        <ArticleLayout
            title="Marketing Inmobiliario de Alto Impacto: Más allá de publicar en portales"
            description="Si tu casa no se ve increíble en el celular, es invisible. Descubre cómo usamos producción visual de alto nivel para defender el valor de tu propiedad."
            publishDate="21 de Diciembre, 2025"
            readingTime="5 min de lectura"
            category="Estrategia Visual"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                Hay una verdad incómoda en el rubro inmobiliario: <strong>Todo entra por la vista</strong>. Sin embargo, si entras a cualquier portal en Chile hoy, verás fotos oscuras, camas con ropa encima, baños con la tapa del inodoro levantada y ángulos que hacen ver las habitaciones diminutas.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Error que te Cuesta Millones</h2>
            <p className="mb-4">
                Una mala presentación no solo hace que tu propiedad reciba menos clics; hace que los interesados asuman que vale menos.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-gray-700 italic">
                "Si el aviso se ve descuidado, el comprador asume que la casa también lo está. Resultado: Ofertas agresivas a la baja."
            </div>
            <p className="mb-4">
                Nosotros no permitimos que tu patrimonio se devalúe por una mala foto. Entendemos que estamos en la era de Instagram y TikTok. La estética es autoridad.
            </p>

            {/* Componente Visual de Alto Impacto */}
            <MediaShowcase />

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">La Psicología de la Primera Visita</h2>
            <p className="mb-4">
                Antes decíamos que la primera visita era física. Hoy, <strong>la primera visita es digital</strong>. Ocurre en la pantalla de un celular, probablemente en la noche, mientras el cliente está en el sofá.
            </p>
            <p className="mb-4">
                Si tu propiedad no "enamora" en esos escasos segundos de atención, el cliente hará <em>scroll</em> y pasará a la siguiente. No importa qué tan buena sea la ubicación o el precio; si la imagen no vende el sueño, la venta no ocurre.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nuestro Estándar de Producción</h2>
            <p className="mb-4">
                ¿Cómo logramos destacar? Inversión.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Fotografía HDR:</strong> Fusionamos exposiciones para que se vea el interior iluminado y el jardín a través de la ventana al mismo tiempo.</li>
                <li><strong>Video Drone 4K:</strong> Fundamental para parcelas y terrenos. Mostramos el entorno, los accesos y la plusvalía del sector a vista de pájaro.</li>
                <li><strong>Tour 360°:</strong> Filtramos curiosos. Quien visita físicamente es porque ya la recorrió virtualmente y le encantó.</li>
                <li><strong>Copywriting Persuasivo:</strong> No listamos características ("3 dorm, 2 baños"). Escribimos historias ("Disfruta el atardecer desde tu terraza privada con orientación norte...").</li>
            </ul>

            <p className="mt-8 text-gray-600 font-medium">
                ¿Quieres que tu propiedad luzca como de revista? <span className="text-blue-600 cursor-pointer font-bold hover:underline">Conversemos sobre la producción audiovisual de tu casa.</span>
            </p>

        </ArticleLayout>
    );
};

export default MarketingPage;
