'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher';
    age?: number;
    collegeName?: string;
    state?: string;
    onboardingComplete?: boolean;
    enrolledCourses?: string[]; // Array of course IDs
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
    updateUser: (data: Partial<User>) => void;
    enrollInCourse: (courseId: string) => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (newToken: string, newUser: User) => {
        setToken(newToken);
        setUser({ ...newUser, enrolledCourses: newUser.enrolledCourses || [] });
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify({ ...newUser, enrolledCourses: newUser.enrolledCourses || [] }));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const updateUser = (data: Partial<User>) => {
        if (!user) return;
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const enrollInCourse = (courseId: string) => {
        if (!user) return;
        const enrolled = user.enrolledCourses || [];
        if (!enrolled.includes(courseId)) {
            const updatedUser = { ...user, enrolledCourses: [...enrolled, courseId] };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, updateUser, enrollInCourse, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
