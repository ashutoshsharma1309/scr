'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`${styles.grid} container`}>
                <div className={styles.info}>
                    <Link href="/" className={styles.logo}>📚 EduAccess</Link>
                    <p className={styles.desc}>
                        Making education accessible, inclusive, and empowering for everyone around the globe. Join our mission to fix the learning gap.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}>𝕏</a>
                        <a href="#" className={styles.socialIcon}>🔗</a>
                        <a href="#" className={styles.socialIcon}>📸</a>
                    </div>
                </div>

                <div className={styles.col}>
                    <h4>Platform</h4>
                    <ul>
                        <li><Link href="/courses">All Courses</Link></li>
                        <li><Link href="/instructors">Instructors</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4>Resources</h4>
                    <ul>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/help">Help Center</Link></li>
                        <li><Link href="/community">Community</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4>Legal</h4>
                    <ul>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                        <li><Link href="/accessibility">Accessibility</Link></li>
                    </ul>
                </div>
            </div>

            <div className={`${styles.bottom} container`}>
                <p>&copy; {currentYear} EduAccess Inc. All rights reserved.</p>
                <p>Made with ❤️ for inclusive education.</p>
            </div>
        </footer>
    );
}
