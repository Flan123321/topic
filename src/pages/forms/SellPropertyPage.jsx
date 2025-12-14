import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle, Home, Loader2 } from 'lucide-react';

const SellPropertyPage = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        full_name: formData.full_name,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        lead_type: 'vendedor'
                    }
                ]);

            if (error) throw error;
            setSuccess(true);
        } catch (error) {
            console.error('Error submitting lead:', error);
            alert('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">¡Solicitud Recibida!</h1>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Un experto de nuestra red evaluará tu propiedad y te contactará en las próximas 24 horas.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="text-indigo-600 font-semibold hover:underline"
                >
                    Volver al Inicio
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Vender Propiedad | Red Inmobiliaria</title>
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block p-3 rounded-xl bg-indigo-100 text-indigo-600 mb-4">
                        <Home className="w-6 h-6" />
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Vende tu Propiedad al Mejor Precio
                    </h1>
                    <p className="text-xl text-slate-600">
                        Accede a nuestra red de +500 corredores y tecnología de valoración.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="p-8 sm:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                        placeholder="Tu nombre"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono / WhatsApp</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                        placeholder="+56 9..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Detalles de la Propiedad (Opcional)</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                    placeholder="Ubicación aproximada, tipo de propiedad, precio estimado..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <>Solicitar Valoración <Send className="w-5 h-5" /></>}
                            </button>
                        </form>
                    </div>
                    <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-500">
                            Tus datos están seguros y no serán compartidos públicamente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellPropertyPage;
