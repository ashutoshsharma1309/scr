'use client';

import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export default function Input({ label, error, icon, ...props }: InputProps) {
    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={`${styles.inputContainer} ${error ? styles.inputError : ''}`}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <input className={styles.input} {...props} />
            </div>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
}
