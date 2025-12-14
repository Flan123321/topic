import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, LogIn } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { user } = useAuth();

    // Color change on scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Modelo', path: '/gestion-inmobiliaria-colaborativa' },
        { name: 'Legalidad', path: '/blog/legalidad-comisiones-chile' },
        { name: 'Ventas', path: '/blog/guia-venta-terrenos' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 font-sans tracking-tight">
                                Red Inmobiliaria
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                        ? 'text-indigo-600 bg-indigo-50'
                                        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <Link
                                to="/mi-cuenta"
                                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                            >
                                <User className="w-5 h-5" />
                                <span>Mi Cuenta</span>
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                            >
                                <LogIn className="w-5 h-5" />
                                <span>Ingresar</span>
                            </Link>
                        )}

                        <Link
                            to="/unirme"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Unirme a la Red
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                ? 'text-indigo-600 bg-indigo-50'
                                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="border-t border-slate-100 my-2 pt-2">
                        {user ? (
                            <Link
                                to="/mi-cuenta"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                            >
                                <User className="w-5 h-5" /> Mi Cuenta
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                            >
                                <LogIn className="w-5 h-5" /> Ingresar
                            </Link>
                        )}
                    </div>

                    <div className="pt-2 pb-2">
                        <Link
                            to="/unirme"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-bold text-base transition-colors shadow-sm"
                        >
                            Unirme a la Red
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
