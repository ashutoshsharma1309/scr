'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

export default function LandingPage() {
    const { t } = useLanguage();

    const features = [
        {
            icon: '♿',
            title: 'Accessibility First',
            desc: 'Built with WCAG 2.1 standards to ensure everyone can learn.'
        },
        {
            icon: '🌍',
            title: 'Multilingual Support',
            desc: 'Learn in your preferred language, starting with English and Hindi.'
        },
        {
            icon: '📱',
            title: 'Device Agnostic',
            desc: 'Seamless experience on mobile, tablet, and desktop.'
        },
        {
            icon: '🤝',
            title: 'Inclusive Community',
            desc: 'Connect with mentors and peers who understand your journey.'
        }
    ];

    const stats = [
        { val: '10K+', label: 'Students' },
        { val: '50+', label: 'Courses' },
        { val: '95%', label: 'Success Rate' },
        { val: '24/7', label: 'Support' }
    ];

    return (
        <div className={styles.wrapper}>
            {/* Hero Section */}
            <section className={`${styles.hero} container`}>
                <div className={`${styles.heroContent} animate-fade-in`}>
                    <h1 className={styles.heroTitle}>
                        {t('heroTitle').split(' ').map((word, i) => (
                            <span key={i} className={i === 2 ? styles.highlight : ''}>{word} </span>
                        ))}
                    </h1>
                    <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
                    <div className={styles.heroActions}>
                        <Link href="/signup" className="btn-dynamic" style={{
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            borderRadius: 'var(--radius)',
                            boxShadow: '0 10px 20px -5px var(--primary-glow)'
                        }}>
                            {t('getStarted')}
                        </Link>
                        <Link href="/courses" className="btn-dynamic glass" style={{
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            borderRadius: 'var(--radius)'
                        }}>
                            {t('browseCourses')}
                        </Link>
                    </div>
                </div>
                <div className={`${styles.heroImage} animate-float`}>
                    <div className={styles.illustration}>
                        <div className={styles.circle1}></div>
                        <div className={styles.circle2}></div>
                        <div className={styles.bookIcon}>📖</div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={`${styles.statsGrid} container`}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.statCard}>
                            <h3>{stat.val}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem Statement */}
            <section className={`${styles.problem} container`}>
                <div className={styles.sectionHeader}>
                    <span className={styles.badge}>The Mission</span>
                    <h2>{t('problemTitle')}</h2>
                    <p>{t('problemSubtitle')}</p>
                </div>
                <div className={styles.problemGrid}>
                    <div className={`${styles.problemCard} glass`}>
                        <h3>Language Barriers</h3>
                        <p>Education is often locked behind languages that students don't speak fluently.</p>
                    </div>
                    <div className={`${styles.problemCard} glass`}>
                        <h3>Complex Interfaces</h3>
                        <p>Modern platforms are often too cluttered and difficult to navigate for beginners.</p>
                    </div>
                    <div className={`${styles.problemCard} glass`}>
                        <h3>Costly Subscriptions</h3>
                        <p>High-quality education should be a right, not a luxury for the few.</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className={styles.badge}>Features</span>
                        <h2>Why Choose EduAccess?</h2>
                    </div>
                    <div className={styles.featuresGrid}>
                        {features.map((f, i) => (
                            <div key={i} className={`${styles.featureCard} glass`}>
                                <div className={styles.featureIcon}>{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`${styles.cta} container`}>
                <div className={`${styles.ctaBox} glass`}>
                    <h2>Ready to start your journey?</h2>
                    <p>Join thousands of students learning skills for the future.</p>
                    <Link href="/signup" className="btn-dynamic" style={{
                        background: 'white',
                        color: 'var(--primary)',
                        padding: '1rem 3rem',
                        borderRadius: 'var(--radius-full)',
                        marginTop: '1.5rem'
                    }}>
                        Join for Free
                    </Link>
                </div>
            </section>
        </div>
    );
}
