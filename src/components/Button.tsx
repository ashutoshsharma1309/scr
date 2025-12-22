'use client';

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    glow?: boolean;
    href?: string;
}

import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    loading,
    glow,
    className,
    href,
    ...props
}: ButtonProps) {
    const buttonClass = `
        btn-dynamic
        ${styles.btn}
        ${styles[variant]}
        ${styles[size]}
        ${glow ? styles.glow : ''}
        ${loading ? styles.loading : ''}
        ${className || ''}
    `;

    if (href) {
        return (
            <Link href={href} className={buttonClass} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={buttonClass}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading ? (
                <span className={styles.spinner}></span>
            ) : children}
        </button>
    );
}
