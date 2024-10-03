// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../../components/ui/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - 3D Portfolio',
  description: 'A cutting-edge 3D portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}