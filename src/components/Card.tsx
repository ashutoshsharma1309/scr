'use client';

import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
    glass?: boolean;
}

export default function Card({
    children,
    className,
    onClick,
    hoverable = true,
    glass = true
}: CardProps) {
    return (
        <div
            className={`
        ${styles.card} 
        ${glass ? 'glass' : styles.normal} 
        ${hoverable ? styles.hoverable : ''} 
        ${className || ''}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`${styles.header} ${className || ''}`}>{children}</div>;
}

export function CardBody({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`${styles.body} ${className || ''}`}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`${styles.footer} ${className || ''}`}>{children}</div>;
}
