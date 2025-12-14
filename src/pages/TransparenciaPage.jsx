import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../components/ArticleLayout';

// Componente Visual: Línea de Tiempo de Actividad
const ActivityTimeline = () => {
    const events = [
        {
            date: '10 Oct',
            time: '09:00 AM',
            title: 'Publicación en Portales Premium',
            description: 'Tu propiedad ya está visible en PortalInmobiliario, Yapo y nuestra Red de Partners.',
            icon: '🚀',
            color: 'bg-green-100 text-green-800'
        },
        {
            date: '12 Oct',
            time: '15:30 PM',
            title: 'Visita Agendada',
            description: 'Cliente Juan P. calificado con crédito pre-aprobado. Visita coordinada para mañana.',
            icon: '📅',
            color: 'bg-blue-100 text-blue-800'
        },
        {
            date: '14 Oct',
            time: '11:00 AM',
            title: 'Oferta Formal Recibida',
            description: '¡Buenas noticias! Hemos recibido una oferta formal por 5.000 UF. Documento adjunto en tu portal.',
            icon: '💰',
            color: 'bg-yellow-100 text-yellow-800'
        }
    ];

    return (
        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm font-sans">
            <h3 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2">
                Vista de tu Panel de Control (Simulación)
            </h3>
            <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                {events.map((event, index) => (
                    <div key={index} className="relative pl-8">
                        {/* Timeline Dot */}
                        <span className={`absolute -left-[9px] top-1 h-5 w-5 rounded-full border-2 border-white ${index === events.length - 1 ? 'animate-pulse bg-green-500' : 'bg-gray-300'}`}></span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${event.color} mb-2 sm:mb-0`}>
                                {event.icon} {event.title}
                            </span>
                            <span className="text-xs text-gray-400 font-mono">
                                {event.date} • {event.time}
                            </span>
                        </div>

                        <p className="text-sm text-gray-600 mt-1">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-center">
                <span className="text-xs text-blue-500 font-medium cursor-pointer hover:underline">
                    + Ver historial completo de 24 eventos
                </span>
            </div>
        </div>
    );
};

const TransparenciaPage = () => {
    return (
        <ArticleLayout
            title="Transparencia Radical: Tu acceso en tiempo real a la gestión de tu propiedad"
            description="¿Cansado de no saber qué pasa con tu venta? Rompemos la 'Caja Negra' del corretaje tradicional. Accede a un reporte en tiempo real de cada llamada, visita y oferta."
            publishDate="18 de Diciembre, 2025"
            readingTime="4 min de lectura"
            category="Gestión y Confianza"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                Hay una queja que se repite constantemente entre los dueños de propiedades: <em>"Firmé con el corredor y nunca más supe de él"</em>. Pasan las semanas, pasan los meses, y el silencio es absoluto. ¿Están trabajando? ¿Alguien llamó?
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Problema de la "Caja Negra"</h2>
            <p className="mb-4">
                En el modelo tradicional, la gestión es una caja negra. Tú entregas las llaves y esperas ciegamente. Si el corredor no te llama, asumes que no hay interesados. Pero a menudo, el problema no es la propiedad, es la falta de gestión activa o de comunicación.
            </p>
            <p className="mb-4">
                La incertidumbre genera desconfianza. Y en una operación de millones de pesos (o miles de UF), no puedes permitirte dudar.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nuestra Promesa: Tu Propiedad en una Caja de Cristal</h2>
            <p className="mb-4">
                Nosotros operamos bajo una filosofía de <strong>Transparencia Radical</strong>. Creemos que tienes derecho a saberlo todo, en tiempo real.
            </p>

            {/* Widget Timeline */}
            <ActivityTimeline />

            <p className="mb-4">
                No ocultamos nada. Si un interesado hace un comentario negativo sobre el precio o el estado de la casa, te lo decimos. Ese <em>feedback</em> es oro puro para ajustar la estrategia y vender más rápido.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">La Filosofía del "Reporte Negativo"</h2>
            <p className="mb-4">
                Nuestra regla es simple: <strong>La ausencia de información también es información.</strong>
            </p>
            <p className="mb-4">
                Si en una semana nadie llamó, no nos escondemos. Te enviamos un reporte semanal indicando "0 Visitas". ¿Por qué? Porque eso nos dice que quizás el precio está fuera de mercado o las fotos no están atrayendo. Juntos, con los datos sobre la mesa, tomamos decisiones. No te dejamos adivinando.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-gray-700">
                    "Preferimos ponernos rojos una vez (diciendo la verdad incómoda) que amarillos cien veces (poniendo excusas)."
                </p>
            </div>

            <p className="mt-8 text-gray-600 font-medium">
                ¿Te gustaría experimentar una venta donde tú tienes el control? <Link to="/gestion-inmobiliaria-colaborativa" className="text-blue-600 hover:underline">Únete a nuestra gestión colaborativa</Link>.
            </p>

        </ArticleLayout>
    );
};

export default TransparenciaPage;
