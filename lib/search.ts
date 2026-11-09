import type { Product } from './products'

export function bm25Search(items: Product[], query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return items
  return items.map((item, index) => {
    const text = `${item.brand} ${item.model} ${item.category} ${item.cpu} ${item.ram} ${item.storage} ${item.description}`.toLowerCase()
    const score = terms.reduce((total, term) => total + (text.includes(term) ? (text.startsWith(term) ? 3 : 1) : 0), 0)
    return { item, score, index }
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.index - b.index).map(({ item }) => item)
}
