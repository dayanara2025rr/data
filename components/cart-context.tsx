'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'

type CartLine = Product & { quantity: number }
type CartContextValue = { items: CartLine[]; count: number; total: number; add: (product: Product) => void; remove: (id: string) => void; setQuantity: (id: string, quantity: number) => void }
const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([])
  const value = useMemo(() => ({ items, count: items.reduce((sum, item) => sum + item.quantity, 0), total: items.reduce((sum, item) => sum + item.price * item.quantity, 0), add: (product: Product) => setItems(current => { const found = current.find(item => item.id === product.id); return found ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] }), remove: (id: string) => setItems(current => current.filter(item => item.id !== id)), setQuantity: (id: string, quantity: number) => setItems(current => quantity > 0 ? current.map(item => item.id === id ? { ...item, quantity } : item) : current.filter(item => item.id !== id)) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart debe usarse dentro de CartProvider'); return context }
