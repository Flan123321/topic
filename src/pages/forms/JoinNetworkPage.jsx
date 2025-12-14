import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle, Users, Loader2 } from 'lucide-react';

const JoinNetworkPage = () => {
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
                        lead_type: 'red'
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
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">¡Bienvenido al Futuro!</h1>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Hemos recibido tu postulación. Te contactaremos pronto para agendar una entrevista y mostrarte cómo opera nuestra red.
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
                <title>Unirse a la Red | Red Inmobiliaria</title>
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block p-3 rounded-xl bg-purple-100 text-purple-600 mb-4">
                        <Users className="w-6 h-6" />
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Potencia tu Carrera Inmobiliaria
                    </h1>
                    <p className="text-xl text-slate-600">
                        Únete a +500 corredores, accede a inventario compartido y comisiones justas.
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
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
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
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
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
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Experiencia (Opcional)</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                    placeholder="¿Eres corredor independiente? ¿Tienes experiencia? Cuéntanos un poco..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <>Enviar Postulación <Send className="w-5 h-5" /></>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinNetworkPage;
