import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'EduAccess | Inclusive Learning Platform',
    description: 'Empowering every learner with accessible and inclusive technology.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <LanguageProvider>
                        <ThemeProvider>
                            <div className="app-container">
                                <Header />
                                <main id="main-content" className="main-content">
                                    {children}
                                </main>
                                <Footer />
                            </div>
                        </ThemeProvider>
                    </LanguageProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
