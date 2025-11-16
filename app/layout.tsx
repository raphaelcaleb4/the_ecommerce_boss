import { Orbitron, Manrope } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
    display: 'swap',
})

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
})

export const metadata = {
    title: 'The E-Commerce Boss',
    description: 'Start. Grow. Sell Out.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${orbitron.variable} ${manrope.variable}`}>
        <body className="bg-teb-cream font-manrope antialiased">
        {children}
        </body>
        </html>
    )
}