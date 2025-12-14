import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../components/ArticleLayout';

const LegalidadPage = () => {
    return (
        <ArticleLayout
            title="¿Es legal compartir comisiones inmobiliarias en Chile?"
            description="Análisis legal sobre el corretaje colaborativo en Chile. Descubre por qué compartir comisiones es una práctica lícita y segura bajo el Código Civil."
            publishDate="14 de Diciembre, 2025"
            readingTime="6 min de lectura"
            category="Marco Legal"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                Es la pregunta más común que recibimos: "Si no soy corredor certificado, ¿puedo recibir dinero por referir una propiedad?". La respuesta corta es <strong>SÍ</strong>. La respuesta larga te la explicamos aquí, basándonos estrictamente en la <strong>normativa chilena vigente</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Mito de la Exclusividad Legal</h2>
            <p className="mb-4">
                En Chile, existe la creencia errónea de que el corretaje de propiedades es una profesión "cerrada" o colegiada obligatoriamente. <strong>Esto es falso.</strong>
            </p>
            <p className="mb-4">
                El corretaje de propiedades se rige por el principio de <strong>Libertad Contractual</strong> establecido en el <strong>Código Civil Chileno</strong>. No existe una ley que otorgue el monopolio de la intermediación a un gremio específico. Las partes (tú y nosotros) son libres de acordar un mandato de gestión y estipular una remuneración (comisión) por los servicios prestados.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="italic text-gray-700">
                    "La colaboración no es solo legal, es el estándar moderno amparado por la libertad de contratación entre privados."
                </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">No somos una Inmobiliaria Tradicional</h2>
            <p className="mb-4">
                Es vital entender la diferencia: no operamos bajo el modelo antiguo de "captar y esperar". Somos una <strong>Red de Colaboración</strong> gestionada por mandato.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                    <strong>Corredor Tradicional:</strong> Actúa a menudo solo, guardando la propiedad "bajo llave" esperando encontrar él mismo al comprador para no compartir la comisión.
                </li>
                <li>
                    <strong>Nuestra Red:</strong> Funciona mediante un <strong>Mandato de Gestión Colaborativa</strong>. Legalmente, nos autorizas a distribuir la oferta de tu inmueble a través de cientos de socios.
                </li>
            </ul>
            <p className="mb-4">
                Recibir una remuneración por referir o conectar puntas es perfectamente lícito. No estás ejerciendo ilegalmente funciones reservadas (como las de un notario); estás realizando una gestión comercial válida.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Blindaje Jurídico: El Contrato de Referimiento</h2>
            <p className="mb-4">
                Para eliminar cualquier informalidad, no trabajamos "de palabra". Cada comisión compartida se respalda legalmente.
            </p>
            <p className="mb-4">
                Utilizamos un <strong>Contrato de Prestación de Servicios</strong> o Mandato Civil que estipula:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2 font-medium text-gray-700">
                <li>El monto exacto de la comisión (en UF o %).</li>
                <li>El hito que gatilla el pago (firma de escritura o inscripción en el Conservador de Bienes Raíces).</li>
                <li>Las responsabilidades claras de cada parte.</li>
            </ol>
            <p className="mb-6">
                Esto transforma una promesa en una <strong>obligación legalmente exigible</strong>. Es transparencia para el SII y seguridad para tu bolsillo.
            </p>

            <p className="mt-8 text-gray-600">
                ¿Te interesa saber más sobre el modelo de negocio? Revisa <Link to="/gestion-inmobiliaria-colaborativa" className="text-blue-600 hover:underline">nuestra propuesta de valor colaborativa</Link>.
            </p>

        </ArticleLayout>
    );
};

export default LegalidadPage;
