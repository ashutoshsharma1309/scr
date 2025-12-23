'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Card, { CardBody } from '@/components/Card';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function ProfilePage() {
    const { user } = useAuth();
    const { t } = useLanguage();

    if (!user) {
        return (
            <div className={styles.container}>
                <Card glass>
                    <CardBody>
                        <p>Please log in to view your profile.</p>
                        <Button href="/login">Login</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }

    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <Card glass className={styles.profileCard}>
                <CardBody>
                    <div className={styles.profileHeader}>
                        <div className={styles.avatar}>
                            {user.name.charAt(0)}
                        </div>
                        <div className={styles.info}>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                            <span className={styles.roleBadge}>{user.role}</span>
                            <div className={styles.academicInfo}>
                                {user.age && <span><strong>Age:</strong> {user.age}</span>}
                                {user.collegeName && <span><strong>College:</strong> {user.collegeName}</span>}
                                {user.state && <span><strong>State:</strong> {user.state}</span>}
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <h2>📊 {t('statistics') || 'Statistics'}</h2>
                    <div className={styles.statGrid}>
                        <Card glass className={styles.statItem}>
                            <span className={styles.statValue}>4</span>
                            <span className={styles.statLabel}>Courses Enrolled</span>
                        </Card>
                        <Card glass className={styles.statItem}>
                            <span className={styles.statValue}>85%</span>
                            <span className={styles.statLabel}>Average Score</span>
                        </Card>
                        <Card glass className={styles.statItem}>
                            <span className={styles.statValue}>2</span>
                            <span className={styles.statLabel}>Certificates Won</span>
                        </Card>
                        <Card glass className={styles.statItem}>
                            <span className={styles.statValue}>12h</span>
                            <span className={styles.statLabel}>Learning Time</span>
                        </Card>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>📚 {t('enrolledCourses')}</h2>
                    <div className={styles.courseList}>
                        {[
                            "Introduction to Web Development",
                            "Data Science Fundamentals",
                            "UX/UI Design Principles",
                            "Machine Learning for Beginners"
                        ].map((course, index) => (
                            <div key={index} className={styles.courseItem + ' glass'}>
                                <span>{course}</span>
                                <Button size="sm">Continue</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Button glow>{t('settings')}</Button>
                <Button variant="glass">{t('editProfile') || 'Edit Profile'}</Button>
            </div>
        </div>
    );
}
