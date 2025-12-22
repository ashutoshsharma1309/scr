'use client';

import React from 'react';
import Card, { CardBody } from '@/components/Card';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <header className={styles.header}>
                <h1>About EduAccess</h1>
                <p>Redefining education through accessibility and innovation.</p>
            </header>

            <div className={styles.grid}>
                <Card glass className={styles.card}>
                    <CardBody>
                        <h2>Our Mission</h2>
                        <p>Our mission is to break down the barriers to quality education. We believe that everyone, regardless of their background, location, or physical abilities, deserves access to world-class learning resources.</p>
                    </CardBody>
                </Card>

                <Card glass className={styles.card}>
                    <CardBody>
                        <h2>Inclusive Technology</h2>
                        <p>We leverage cutting-edge AI, speech-to-text, and multilingual support to ensure our platform is usable by people from all walks of life. Our interface is designed with a focus on simplicity and high accessibility.</p>
                    </CardBody>
                </Card>
            </div>

            <section className={styles.team}>
                <h2>Meet the Team</h2>
                <div className={styles.teamGrid}>
                    {[1, 2, 3].map((member) => (
                        <div key={member} className={styles.member + ' glass'}>
                            <div className={styles.memberAvatar}>
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=member${member}`} alt="Team Member" />
                            </div>
                            <h3>Team Member {member}</h3>
                            <p>Passionate Educator & Tech Enthusiast</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
