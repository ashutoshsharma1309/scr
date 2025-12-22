'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'hi';

interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

const translations: Translations = {
    en: {
        heroTitle: "Education for Everyone",
        heroSubtitle: "Empowering every learner with accessible and inclusive technology.",
        getStarted: "Get Started",
        browseCourses: "Browse Courses",
        problemTitle: "The Barriers to Learning",
        problemSubtitle: "Why traditional platforms fail many learners today.",
        courses: "Courses",
        login: "Login",
        signup: "Sign Up",
        dashboard: "Dashboard",
        language: "Language",
        logout: "Logout",
        profile: "Profile",
        enrolledCourses: "My Courses",
        settings: "Settings"
    },
    hi: {
        heroTitle: "सभी के लिए शिक्षा",
        heroSubtitle: "सुलभ और समावेशी तकनीक के साथ हर शिक्षार्थी को सशक्त बनाना।",
        getStarted: "शुरू करें",
        browseCourses: "कोर्स देखें",
        problemTitle: "सीखने की बाधाएं",
        problemSubtitle: "आज की पारंपरिक प्लेटफॉर्म कई शिक्षार्थियों के लिए विफल क्यों हैं।",
        courses: "कोर्स",
        login: "लॉगिन",
        signup: "साइन अप",
        dashboard: "डैशबोर्ड",
        language: "भाषा",
        logout: "लॉगआउट",
        profile: "प्रोफ़ाइल",
        enrolledCourses: "मेरे कोर्स",
        settings: "सेटिंग्स"
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
