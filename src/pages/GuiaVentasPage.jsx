import React, { useState } from 'react';
import ArticleLayout from '../components/ArticleLayout';

// Componente Visual: Checklist Legal Interactivo
const DocumentsChecklist = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Certificado de Dominio Vigente (CBR)', checked: false },
        { id: 2, text: 'Certificado de Hipotecas y Gravámenes (GP)', checked: false },
        { id: 3, text: 'Escritura de Propiedad (Copia Autorizada)', checked: false },
        { id: 4, text: 'Certificado de Avalúo Fiscal (SII)', checked: false },
        { id: 5, text: 'Certificado de Número (Municipalidad)', checked: false },
        { id: 6, text: 'Recepción Final (Obras Municipales)', checked: false, note: '🚨 Crítico para Venta con Banco' },
        { id: 7, text: 'Certificado de No Expropiación (Municipal + SERVIU)', checked: false },
        { id: 8, text: 'Pago de Contribuciones al día', checked: false },
    ]);

    const toggleItem = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    const calculateProgress = () => {
        const checkedCount = items.filter(i => i.checked).length;
        return Math.round((checkedCount / items.length) * 100);
    };

    const progress = calculateProgress();

    const getProgressMessage = (pct) => {
        if (pct === 0) return "Comienza a armar tu carpeta...";
        if (pct < 50) return "Vas avanzando, ¡sigue así!";
        if (pct < 100) return "¡Ya casi tienes todo listo!";
        return "¡Excelente! Carpeta Legal Completa 🚀";
    };

    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl p-6 shadow-lg font-sans">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Checklist: Carpeta Legal 2025</h3>
                    <p className="text-sm text-gray-500">Marca los documentos que ya tienes.</p>
                </div>
                <div className="text-right">
                    <span className={`inline-block px-4 py-2 rounded-lg font-bold text-sm ${progress === 100 ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                        {progress}% Completado
                    </span>
                </div>
            </div>

            {/* Barra de Progreso */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                    className={`h-3 rounded-full transition-all duration-500 ease-out ${progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-xs text-right text-gray-400 mb-6 font-medium italic">
                {getProgressMessage(progress)}
            </p>

            <div className="space-y-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`flex items-start p-3 rounded-lg cursor-pointer transition-all border select-none ${item.checked ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50 border-transparent'}`}
                    >
                        <div className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded border-2 mr-3 flex items-center justify-center transition-colors ${item.checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                            {item.checked && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                        </div>
                        <div>
                            <span className={`text-sm sm:text-base block ${item.checked ? 'text-gray-800 font-medium' : 'text-gray-700'}`}>
                                {item.text}
                            </span>
                            {item.note && <span className="inline-block mt-1 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">{item.note}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GuiaVentasPage = () => {
    return (
        <ArticleLayout
            title="Guía definitiva para vender terrenos y propiedades: Documentación y Trámites 2025"
            description="Evita el caos burocrático. Te entregamos el mapa exacto de documentos y pasos para vender tu propiedad en Chile sin sorpresas legales."
            publishDate="22 de Diciembre, 2025"
            readingTime="8 min de lectura"
            category="Asesoría Legal"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                Vender una propiedad no es solo encontrar un comprador; es navegar un laberinto legal. Como asesores, hemos visto ventas millonarias caerse el día de la firma porque faltaba un certificado municipal de $5.000 pesos.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Paso 1: La Carpeta de Títulos (El "Antecedente")</h2>
            <p className="mb-4">
                Antes de siquiera sacar las fotos, debes tener tu casa en orden. El abogado del comprador (o del banco) realizará un <strong>Estudio de Títulos</strong> que revisará los últimos 10 años de historia de la propiedad.
            </p>

            {/* Checklist Interactivo */}
            <DocumentsChecklist />

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Proceso de Venta: Tu Hoja de Ruta</h2>
            <p className="mb-4">
                Muchos dueños se confunden con los tiempos. Aquí el esquema real de una venta en Chile:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-8 text-gray-700">
                <li>
                    <strong>Promesa de Compraventa:</strong> Se "amarra" el negocio. El comprador deja una garantía (generalmente 10-20%) y se fijan multas por desistimiento.
                </li>
                <li>
                    <strong>Estudio de Títulos (30-60 días):</strong> El banco o abogados revisan que nadie más sea dueño del terreno, que no haya embargos, ni expropiaciones.
                </li>
                <li>
                    <strong>Firma de Escritura Definitiva:</strong> Se firma ante Notario. Si hay crédito hipotecario, también firma el banco.
                </li>
                <li>
                    <strong>Inscripción en el CBR:</strong> El trámite final. El Conservador de Bienes Raíces inscribe la propiedad a nombre del nuevo dueño. <em>Solo aquí se libera el pago al vendedor.</em>
                </li>
            </ol>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <h3 className="text-lg font-bold text-red-800 mb-2">⚠ Advertencia: El peligro de las ampliaciones no regularizadas</h3>
                <p className="text-red-700 text-sm">
                    ¿Hiciste un quincho, una pieza extra o techaste la logia y no avisaste a la Municipalidad? Eso es una ampliación irregular.
                </p>
                <p className="text-red-700 text-sm mt-2">
                    <strong>El problema:</strong> Si el comprador usa Crédito Hipotecario, el tasador del banco valorará la propiedad POR MENOS (solo los metros originales) o, en el peor caso, el banco rechazará el crédito por "inconsistencia con el plano municipal".
                </p>
                <p className="text-red-700 text-sm mt-2 font-bold hover:underline cursor-pointer">
                    → ¿Tienes dudas? Pregúntanos cómo regularizar (Ley del Mono).
                </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nosotros ordenamos el caos</h2>
            <p className="mb-4">
                Nuestro servicio incluye la <strong>Pre-Revisión Legal</strong>. Antes de salir al mercado, nuestros abogados revisan tu carpeta para detectar estos problemas (herencias pendientes, ampliaciones, prohibiciones) y solucionarlos ANTES de que espanten a un comprador.
            </p>

            <p className="mt-8 text-gray-600 font-medium">
                Vende tranquilo, vende seguro.
            </p>

        </ArticleLayout>
    );
};

export default GuiaVentasPage;
