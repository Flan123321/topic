import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Corrected import path
import { UserPlus, User, Mail, Lock, Loader2, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../lib/supabaseClient';

const RegisterClientPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // 1. Sign up/Create Auth User
            const { data, error: authError } = await signUp(email, password, {
                full_name: fullName,
            });

            if (authError) throw authError;

            if (data?.user) {
                // 2. Add to public 'clients' table
                const { error: dbError } = await supabase
                    .from('clients')
                    .insert([
                        {
                            id: data.user.id, // Link to auth user
                            email: email,
                            full_name: fullName,
                        }
                    ]);

                if (dbError) {
                    console.error("Database Insert Error:", dbError);
                    // Optionally handle this, but auth user is already created.
                    // For now we continue.
                }
            }

            navigate('/mi-cuenta'); // Redirect to dashboard
        } catch (err) {
            setError(err.message || 'Error al registrarse.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
            <Helmet>
                <title>Registro Cliente | Topic Cluster</title>
            </Helmet>

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                        <UserPlus className="w-6 h-6" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Volverse Cliente</h1>
                    <p className="text-slate-500">Crea una cuenta para acceder a oportunidades exclusivas.</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                placeholder="Juan Pérez"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                                minLength={6}
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Mínimo 6 caracteres</p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Crear Cuenta <CheckCircle className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500">
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                        Ingresar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterClientPage;
