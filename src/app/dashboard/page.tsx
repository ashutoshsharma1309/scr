'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockCourses } from '@/data/courses';
import Card, { CardBody, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function DashboardPage() {
    const { user } = useAuth();

    if (!user) return (
        <div className="container" style={{ padding: '100px', textAlign: 'center' }}>
            <p>Please login to view your dashboard.</p>
            <Button href="/login" style={{ marginTop: '1rem' }}>Go to Login</Button>
        </div>
    );
    const enrolledCount = user?.enrolledCourses?.length || 0;

    const stats = [
        { label: 'Courses in Progress', value: enrolledCount },
        { label: 'Completed Courses', value: 0 },
        { label: 'Learning Hours', value: 0 },
        { label: 'Certificates', value: 0 }
    ];

    const currentCourses = mockCourses.filter(c => user?.enrolledCourses?.includes(c.id));

    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <header className={styles.header}>
                <div>
                    <span className={styles.welcome}>Welcome back,</span>
                    <h1>{user.name} 👋</h1>
                </div>
                <Button variant="outline" href="/profile">View Profile</Button>
            </header>

            <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
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
                    <Button size="sm" variant="glass" href="/courses">Browse More</Button>
                </div>
                <div className={styles.courseGrid}>
                    {currentCourses.length > 0 ? currentCourses.map((course: any) => (
                        <Card key={course.id} className={styles.enrolledCard}>
                            <CardBody>
                                <h3>{course.title}</h3>
                                <div className={styles.progressBox}>
                                    <div className={styles.progressInfo}>
                                        <span>Progress</span>
                                        <span>0%</span>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div className={styles.progressFill} style={{ width: `0%` }}></div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <span className={styles.lastAccessed}>Just enrolled</span>
                                <Button size="sm" href={`/courses/${course.id}`}>Start Learning</Button>
                            </CardFooter>
                        </Card>
                    )) : (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem' }}>
                            <p>You haven't enrolled in any courses yet.</p>
                            <Button href="/courses" style={{ marginTop: '1rem' }}>Start Free Courses</Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
