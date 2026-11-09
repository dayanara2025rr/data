import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CartProvider } from '@/components/cart-context'

export const metadata: Metadata = { title: 'NEXA / Laptops para avanzar', description: 'Laptops elegidas para tu mejor trabajo.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#101112' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className="antialiased"><CartProvider>{children}</CartProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
