import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Kstocks',
    description:
        'Track real-time stock prices, get personalized alerts and explore detailed company insights',
}

/**
 * Wraps application content in the root HTML and body elements, applying the dark theme and global fonts.
 *
 * @param children - The React nodes to render inside the document body
 * @returns The root HTML structure (html > body) with font variables and the `antialiased` class containing `children`
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className='dark'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}