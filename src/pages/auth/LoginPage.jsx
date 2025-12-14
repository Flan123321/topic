import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, Lock, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error } = await signIn(email, password);
            if (error) throw error;
            navigate('/mi-cuenta');
        } catch (err) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
            <Helmet>
                <title>Iniciar Sesión | Topic Cluster</title>
            </Helmet>

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenido de nuevo</h1>
                    <p className="text-slate-500">Ingresa a tu cuenta para gestionar tus propiedades.</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Ingresar <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/registro-cliente" className="text-slate-900 font-semibold hover:underline">
                        Volverse Cliente
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
