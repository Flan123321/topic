import React, { useState } from 'react';
import ArticleLayout from '../components/ArticleLayout';

// Componente Visual: Simulador de Comisiones
const CommissionSimulator = () => {
    const [propertyValue, setPropertyValue] = useState(5000); // UF
    const ufValue = 38000; // Valor UF referencial

    // Lógica de cálculo (ejemplo simplificado: 1% de comisión para el referidor)
    // Nota: La comisión total suele ser 2% + IVA por lado, aquí simulamos lo que gana el PARTNER (aprox 20-30% de la gestión o un % fijo).
    // Para el ejemplo "generar ingresos", usaremos un 0.5% del valor total de la propiedad como "Comisión por Referido" conservadora.
    const commissionRate = 0.005;

    const estimatedCommissionUF = Math.round(propertyValue * commissionRate);
    const estimatedCommissionCLP = estimatedCommissionUF * ufValue;

    const formatCLP = (amount) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    return (
        <div className="my-10 bg-slate-900 rounded-xl p-8 text-white shadow-xl font-sans text-center md:text-left">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Simulador de Ingresos</h3>
            <p className="text-slate-300 mb-8 max-w-lg">
                ¿Cuánto podrías ganar solo por referir una propiedad? Calcula tu potencial comisión estimada (ej: 0.5% del valor venta).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <label htmlFor="uf-input" className="block text-sm font-medium text-slate-400 mb-2">
                        Valor de la Propiedad (UF)
                    </label>
                    <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden border border-slate-700 focus-within:border-blue-500 transition-colors">
                        <span className="pl-4 text-slate-500 font-bold">UF</span>
                        <input
                            id="uf-input"
                            type="number"
                            min="1000"
                            max="100000"
                            step="100"
                            value={propertyValue}
                            onChange={(e) => setPropertyValue(Number(e.target.value))}
                            className="w-full bg-transparent text-white p-4 text-xl font-bold focus:outline-none"
                        />
                    </div>
                    <input
                        type="range"
                        min="1000"
                        max="20000"
                        step="100"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(Number(e.target.value))}
                        className="w-full mt-4 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                        <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    </div>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-1">Tu Comisión Estimada</p>
                    <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                        {formatCLP(estimatedCommissionCLP)}
                    </p>
                    <p className="text-green-400 font-bold text-lg">
                        ~ {estimatedCommissionUF} UF
                    </p>
                    <p className="text-xs text-slate-500 mt-4 italic">
                        *Cálculo referencial bruto. Pagos contra boleta/factura.
                    </p>
                </div>
            </div>
        </div>
    );
};

const IngresosPage = () => {
    return (
        <ArticleLayout
            title="Cómo generar ingresos serios en el sector inmobiliario sin ser corredor full-time"
            description="Convierte tu red de contactos en capital. Aprende a monetizar tus referidos de forma legal, transparente y sin dejar tu trabajo actual."
            publishDate="20 de Diciembre, 2025"
            readingTime="5 min de lectura"
            category="Oportunidad de Negocio"
        >
            <p className="lead text-xl text-gray-600 mb-8">
                ¿Conoces a alguien que está vendiendo su casa? ¿El conserje te comentó que se desocupó un departamento? Esa información vale oro. Literalmente.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">No es Dinero Fácil, es Dinero Inteligente</h2>
            <p className="mb-4">
                Aclaremos algo de entrada: esto no es un esquema "hágase rico rápido". Es un modelo de negocio serio basado en la <strong>gestión de información</strong>.
            </p>
            <p className="mb-4">
                El mercado inmobiliario mueve cifras altas. Una sola venta genera comisiones que pueden equivaler a meses de un sueldo promedio. El problema es que, tradicionalmente, esa torta se la repartían unos pocos. Nosotros abrimos la mesa.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tu Capital es tu Red</h2>
            <p className="mb-4">
                No necesitas ser experto legal ni tasador (para eso estamos nosotros). Lo que necesitas es <strong>acceso</strong>.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>¿Eres abogado y tus clientes liquidan bienes por herencias o divorcios?</li>
                <li>¿Eres administrador de edificios y sabes quién vende primero?</li>
                <li>¿Simplemente tienes una vida social activa?</li>
            </ul>
            <p className="mb-4">
                Si conectas al vendedor con nuestra red, y nosotros cerramos la venta, tú ganas. Es así de simple.
            </p>

            {/* Simulador */}
            <CommissionSimulator />

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Marco Legal y Pagos</h2>
            <p className="mb-4">
                Para trabajar con nosotros, la formalidad es el requisito #1.
            </p>
            <p className="mb-4">
                Todo pago de comisiones se realiza mediante <strong>transferencia bancaria contra Boleta de Honorarios o Factura</strong>. Esto asegura que tus ingresos sean legítimos ante el SII y que exista un respaldo tributario para ambas partes.
            </p>
            <p className="mb-4">
                No hay sobres por debajo de la mesa. Hay contratos de referimiento y transparencia total.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">¿Listo para empezar?</h2>
            <p className="mb-4">
                No tienes que renunciar a tu empleo. Puedes empezar hoy mismo con ese dato que tienes guardado.
            </p>

        </ArticleLayout>
    );
};

export default IngresosPage;
