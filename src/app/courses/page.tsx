'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Card, { CardHeader, CardBody, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import styles from './page.module.css';

import { mockCourses, Course } from '@/data/courses';

export default function CoursesPage() {
    const { language, t } = useLanguage();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Simulate local data loading
        const filtered = mockCourses.filter(c => c.language === language);
        setCourses(filtered);
        setLoading(false);
    }, [language]);

    const filteredCourses = courses.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <h1>{t('browseCourses')}</h1>
                    <p>Discover courses that help you grow and succeed.</p>
                </div>

                <div className={`${styles.searchBar} glass`}>
                    <span>🔍</span>
                    <input
                        type="text"
                        placeholder="Search for courses, skills, or teachers..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </header>

            {loading ? (
                <div className={styles.loading}>
                    <div className="spinner"></div>
                    <p>Loading curated courses...</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map(course => (
                            <Card key={course.id} className={styles.courseCard}>
                                <CardHeader>
                                    <img src={course.thumbnail} alt={course.title} className={styles.thumbnail} />
                                    <span className={styles.categoryBadge}>{course.category}</span>
                                </CardHeader>
                                <CardBody>
                                    <div className={styles.courseMeta}>
                                        <span className={styles.level}>{course.level}</span>
                                        <span className={styles.rating}>⭐ {course.rating}</span>
                                    </div>
                                    <h3 className={styles.courseTitle}>{course.title}</h3>
                                    <p className={styles.courseDesc}>{course.description}</p>
                                </CardBody>
                                <CardFooter>
                                    <div className={styles.instructor}>
                                        <div className={styles.avatar}>
                                            {course.instructor.charAt(0)}
                                        </div>
                                        <span>{course.instructor}</span>
                                    </div>
                                    <Button size="sm" glow href={`/courses/${course.id}`}>Enroll Now</Button>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <div className={styles.empty}>
                            <h2>No courses found</h2>
                            <p>Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
