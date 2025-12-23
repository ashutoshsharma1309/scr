'use client';

import React, { useState } from 'react';
import Link from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';
import Card, { CardBody } from '@/components/Card';
import styles from './page.module.css';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Mock login delay
        setTimeout(() => {
            if (formData.email && formData.password) {
                // Mock user data
                const mockUser = {
                    id: 'rural-' + Date.now(),
                    name: formData.email.split('@')[0],
                    email: formData.email,
                    role: 'student' as const,
                    onboardingComplete: false
                };

                login('mock-token-' + Date.now(), mockUser);

                // Redirect to setup if onboarding not complete
                router.push('/profile/setup');
            } else {
                setError('Please provide email and password');
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className={`${styles.container} animate-fade-in`}>
            <Card glass className={styles.loginCard}>
                <CardBody>
                    <div className={styles.header}>
                        <h1>Welcome Back</h1>
                        <p>Continue your learning journey with EduAccess.</p>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                            />
                        </div>
                        <Button type="submit" loading={loading} style={{ width: '100%', marginTop: '1rem' }}>
                            Sign In
                        </Button>
                    </form>

                    <p className={styles.footer}>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </CardBody>
            </Card>

            <div className={styles.background}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>
        </div>
    );
}
