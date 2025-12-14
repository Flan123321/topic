import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Loader2, LogOut, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../lib/supabaseClient';

const DashboardPage = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const fetchProfile = async () => {
            try {
                const { data, error } = await supabase
                    .from('clients')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (data) setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user, navigate]);

    const handleSignOut = async () => {
        await signOut();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <Helmet>
                <title>Mi Cuenta | Topic Cluster</title>
            </Helmet>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 px-8 py-8 text-white flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Hola, {profile?.full_name || user?.email}</h1>
                        <p className="text-slate-300 mt-1">Bienvenido a tu panel de cliente.</p>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                        <LogOut className="w-4 h-4" /> Salir
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Profile Card */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-indigo-600" /> Mis Datos
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Email</span>
                                    <span className="text-slate-800 font-medium">{user?.email}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">ID Cliente</span>
                                    <span className="text-slate-400 text-sm font-mono">{user?.id}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Plan</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                                        Cliente Activo
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Placeholders for future features */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 border-dashed flex flex-col items-center justify-center text-center">
                            <p className="text-indigo-900 font-semibold mb-2">Próximamente</p>
                            <p className="text-indigo-600/80 text-sm">Aquí verás tus propiedades guardadas y estado de trámites.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
