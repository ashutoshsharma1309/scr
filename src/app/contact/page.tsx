'use client';

import React from 'react';
import Card, { CardBody } from '@/components/Card';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={`${styles.container} container animate-fade-in`}>
            <header className={styles.header}>
                <h1>Contact Us</h1>
                <p>Have questions? We're here to help you on your learning journey.</p>
            </header>

            <div className={styles.grid}>
                <Card glass className={styles.contactInfo}>
                    <CardBody>
                        <h2>Get in Touch</h2>
                        <div className={styles.infoItem}>
                            <span>📧</span>
                            <div>
                                <strong>Email</strong>
                                <p>support@eduaccess.com</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span>📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>+1 (555) 000-0000</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span>📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Tech Innovation Hub, Silicon Valley</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card glass className={styles.contactForm}>
                    <CardBody>
                        <h2>Send us a Message</h2>
                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Message</label>
                                <textarea placeholder="How can we help?"></textarea>
                            </div>
                            <Button glow style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
