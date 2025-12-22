'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const { user, logout, isAuthenticated } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/courses', label: t('courses') },
        { href: '/about', label: 'About' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? 'glass' : ''}`}>
            <div className={`${styles.nav} container`}>
                <Link href="/" className={styles.logo}>
                    📚 <span>EduAccess</span>
                </Link>

                <nav className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.activeLink : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {isAuthenticated && (
                        <Link
                            href="/dashboard"
                            className={`${styles.link} ${pathname === '/dashboard' ? styles.activeLink : ''}`}
                        >
                            {t('dashboard')}
                        </Link>
                    )}
                </nav>

                <div className={styles.actions}>
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                        className={styles.iconBtn}
                        title={t('language')}
                    >
                        {language.toUpperCase()}
                    </button>

                    <button
                        onClick={toggleTheme}
                        className={styles.iconBtn}
                        title="Toggle Theme"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    {isAuthenticated ? (
                        <button onClick={logout} className="btn-dynamic glass" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>
                            {t('logout')}
                        </button>
                    ) : (
                        <Link href="/login" className="btn-dynamic" style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: 'var(--radius)' }}>
                            {t('login')}
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
