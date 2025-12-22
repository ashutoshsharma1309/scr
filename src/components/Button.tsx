'use client';

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    glow?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    loading,
    glow,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
        btn-dynamic
        ${styles.btn}
        ${styles[variant]}
        ${styles[size]}
        ${glow ? styles.glow : ''}
        ${loading ? styles.loading : ''}
        ${className || ''}
      `}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading ? (
                <span className={styles.spinner}></span>
            ) : children}
        </button>
    );
}
