'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';
import Card, { CardBody } from '@/components/Card';
import styles from './page.module.css';

export default function ProfileSetupPage() {
    const router = useRouter();
    const { user, updateUser } = useAuth();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        age: '',
        collegeName: '',
        state: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser({
            name: formData.name,
            age: parseInt(formData.age),
            collegeName: formData.collegeName,
            state: formData.state,
            onboardingComplete: true
        });
        router.push('/courses');
    };

    if (!user) return null;

    return (
        <div className={`${styles.container} animate-fade-in`}>
            <Card glass className={styles.setupCard}>
                <CardBody>
                    <div className={styles.header}>
                        <h1>Complete Your Profile</h1>
                        <p>Tell us a bit about yourself to get started with your learning journey.</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your full name"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Age</label>
                            <input
                                type="number"
                                required
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                placeholder="E.g. 19"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>College Name</label>
                            <input
                                type="text"
                                required
                                value={formData.collegeName}
                                onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                                placeholder="Your college or institution"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>State</label>
                            <input
                                type="text"
                                required
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                placeholder="E.g. Bihar, Uttar Pradesh"
                            />
                        </div>
                        <Button type="submit" glow style={{ width: '100%', marginTop: '1rem' }}>
                            Save & Access Courses
                        </Button>
                    </form>
                </CardBody>
            </Card>

            <div className={styles.background}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>
        </div>
    );
}
