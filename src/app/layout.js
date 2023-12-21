import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/Theme.Context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Vision Vortex',
    description: 'This is the description',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="container">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
