import { describe, expect, it } from 'vitest'
import { bm25Search } from './search'
import { products } from './products'

describe('bm25Search', () => {
  it('returns all products for an empty query', () => {
    expect(bm25Search(products, '')).toHaveLength(products.length)
  })

  it('ranks exact model matches first', () => {
    expect(bm25Search(products, 'Nova Pro 16')[0].id).toBe('nova-pro-16')
  })

  it('finds products by usage category', () => {
    expect(bm25Search(products, 'gamer').every(product => product.category === 'Gamer')).toBe(true)
  })
})
