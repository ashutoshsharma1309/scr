'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Card, { CardBody, CardHeader, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function DashboardPage() {
    const { user, token } = useAuth();
    const { t } = useLanguage();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            fetchDashboard();
        }
    }, [token]);

    const fetchDashboard = async () => {
        try {
            const res = await fetch('http://localhost:3001/api/users/dashboard', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const json = await res.json();
            if (json.success) {
                setData(json.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!user) return <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>Please login to view dashboard.</div>;

    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <header className={styles.header}>
                <div>
                    <span className={styles.welcome}>Welcome back,</span>
                    <h1>{user.name} 👋</h1>
                </div>
                <Button variant="outline">Edit Profile</Button>
            </header>

            {loading ? (
                <div className={styles.loading}>Loading your learning stats...</div>
            ) : (
                <>
                    <div className={styles.statsGrid}>
                        {data?.stats.map((stat: any, i: number) => (
                            <Card key={i} glass className={styles.statCard}>
                                <CardBody>
                                    <p className={styles.statLabel}>{stat.label}</p>
                                    <h2 className={styles.statValue}>{stat.value}</h2>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h2>Current Learning</h2>
                            <Button size="sm" variant="glass">View All</Button>
                        </div>
                        <div className={styles.courseGrid}>
                            {data?.enrolledCourses.map((course: any) => (
                                <Card key={course.id} className={styles.enrolledCard}>
                                    <CardBody>
                                        <h3>{course.title}</h3>
                                        <div className={styles.progressBox}>
                                            <div className={styles.progressInfo}>
                                                <span>Progress</span>
                                                <span>{course.progress}%</span>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.progressFill} style={{ width: `${course.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <span className={styles.lastAccessed}>Last seen: {course.lastAccessed}</span>
                                        <Button size="sm">Continue</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}
