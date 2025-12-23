'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { mockCourses, Course } from '@/data/courses';
import Card, { CardBody } from '@/components/Card';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function CourseDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const { user, enrollInCourse } = useAuth();
    const [course, setCourse] = useState<Course | null>(null);
    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        const found = mockCourses.find(c => c.id === id);
        if (found) {
            setCourse(found);
            if (user?.enrolledCourses?.includes(found.id)) {
                setIsEnrolled(true);
            }
        }
    }, [id, user]);

    const handleEnroll = () => {
        if (!course) return;
        enrollInCourse(course.id);
        setIsEnrolled(true);
        // Optional: toast or alert
    };

    if (!course) return <div className="container" style={{ padding: '100px' }}>Course not found.</div>;

    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <Button variant="outline" size="sm" className={styles.backBtn} onClick={() => router.back()}>
                ← Back to Courses
            </Button>

            <div className={styles.hero}>
                <div className={styles.mainInfo}>
                    <h1>{course.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.badge}>{course.level}</span>
                        <span>⏱️ {course.duration}</span>
                        <span>⭐ {course.rating}</span>
                    </div>
                    <p className={styles.fullDesc}>{course.fullDescription}</p>

                    <div className={styles.instructor}>
                        <div className={styles.avatar}>
                            {course.instructor.charAt(0)}
                        </div>
                        <div>
                            <strong>{course.instructor}</strong>
                            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>{course.instructorBio}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <Card glass>
                        <CardBody>
                            <img src={course.thumbnail} alt={course.title} className={styles.thumbnail} />
                            <div style={{ marginTop: '1.5rem' }}>
                                <Button
                                    glow={!isEnrolled}
                                    variant={isEnrolled ? 'glass' : 'primary'}
                                    style={{ width: '100%' }}
                                    onClick={handleEnroll}
                                    disabled={isEnrolled}
                                >
                                    {isEnrolled ? 'Enrolled ✅' : 'Enroll Now'}
                                </Button>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem' }}>
                                100% Free for rural learners
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <h2>What you will learn</h2>
                    <ul className={styles.outcomes}>
                        {course.outcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
