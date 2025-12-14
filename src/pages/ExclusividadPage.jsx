import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../components/ArticleLayout';

const ExclusividadPage = () => {
    return (
        <ArticleLayout
            title="Exclusividad Inmobiliaria en Chile: ¿Te conviene o te amarra?"
            description="¿Firmar exclusividad con un corredor? Descubre por qué entregar tu propiedad a un solo agente puede ser el error que frene tu venta por meses."
            publishDate="15 de Diciembre, 2025"
            readingTime="7 min de lectura"
            category="Consejos para Vender"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                Cuando decides vender tu propiedad, la primera petición de casi cualquier corredor tradicional será: <em>"Fírmame la exclusividad"</em>. Suena a compromiso, a dedicación VIP. Pero, ¿es realmente lo mejor para ti o es solo un seguro para ellos?
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">La Metáfora de la Calle Sin Salida</h2>
            <p className="mb-4">
                Imagina que quieres vender tu auto y decides estacionarlo en <strong>una calle sin salida</strong> donde solo vive una persona. Esa es la exclusividad. Dependes 100% de que esa única persona (tu corredor) traiga al comprador.
            </p>
            <p className="mb-4">
                Nuestro modelo colaborativo es como poner tu auto en una <strong>autopista digital de alto tráfico</strong>. Al no cerrarte a un solo gestor, permites que más de 50 colaboradores ofrezcan tu propiedad simultáneamente a sus propias redes. Es viralidad versus estancamiento.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Conflicto de Interés Oculto</h2>
            <p className="mb-4">
                Aquí está el secreto que pocos te dicen: <strong>Muchos corredores prefieren no vender tu casa rápido.</strong>
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                <h3 className="font-bold text-red-700 mb-2">¿Por qué? Por la comisión completa.</h3>
                <p className="text-gray-700">
                    Si un corredor tiene la exclusividad, sabe que nadie más puede venderla. Si otro colega le trae un comprador listo, a menudo lo rechaza o lo dilata porque no quiere compartir el 50% de la comisión (el "canje"). Prefiere esperar 6 meses para encontrar él mismo al comprador y ganarse el 100%.
                </p>
            </div>
            <p className="mb-4">
                Mientras él juega con el tiempo para maximizar <em>su</em> ganancia, tu propiedad se quema en los portales y tú sigues pagando contribuciones y gastos comunes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">El Cuello de Botella Humano</h2>
            <p className="mb-4">
                Un corredor tradicional es una sola persona. Tiene días malos, se enferma, sale de vacaciones o simplemente tiene el teléfono apagado.
            </p>
            <p className="mb-4">
                Si firmas exclusividad, la visibilidad de tu activo depende de la agenda de un solo individuo. Si él no contesta el correo el fin de semana, perdiste la venta. En nuestra red, la gestión está distribuida. La dependencia del "hombre orquesta" desaparece.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">La Solución: Libertad y Colaboración</h2>
            <p className="mb-4">
                No te pedimos que te "cases" con nosotros en un contrato que te amarre de manos. Te pedimos que nos autorices a gestionar la venta bajo un modelo de <strong>resultados</strong>.
            </p>
            <p className="mb-4">
                ¿Quieres entender mejor cómo operamos legalmente? Lee sobre la <Link to="/blog/legalidad-comisiones-chile" className="text-blue-600 hover:underline">legalidad de nuestro modelo colaborativo</Link>. O si estás listo para vender sin amarras, hablemos.
            </p>

        </ArticleLayout>
    );
};

export default ExclusividadPage;
