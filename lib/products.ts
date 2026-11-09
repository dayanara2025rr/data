export type Product = {
  id: string
  brand: string
  model: string
  price: number
  cpu: string
  ram: string
  storage: string
  description: string
  category: string
  color: string
  accent: string
}

export const products: Product[] = [
  { id: 'nova-pro-16', brand: 'Nova', model: 'Pro 16', price: 1899, cpu: 'Intel Core Ultra 9', ram: '32 GB', storage: '1 TB SSD', description: 'Portátil profesional para edición de video y creación de contenido, con 32 GB de RAM para trabajar en varias aplicaciones sin pausas.', category: 'Diseño', color: 'from-violet-500/30 to-indigo-900/70', accent: 'violet' },
  { id: 'forge-x15', brand: 'Forge', model: 'X15', price: 1599, cpu: 'AMD Ryzen 9 8945HX', ram: '32 GB', storage: '1 TB SSD', description: 'Portátil gamer con 32 GB de RAM, gráfica dedicada y potencia sostenida para tus partidas competitivas y streams.', category: 'Gamer', color: 'from-orange-500/40 to-red-950', accent: 'orange' },
  { id: 'luma-air-14', brand: 'Luma', model: 'Air 14', price: 999, cpu: 'Apple M3', ram: '16 GB', storage: '512 GB SSD', description: 'Ultraligero y silencioso para moverte entre reuniones, viajes y proyectos creativos con 16 GB de RAM.', category: 'Ultraligero', color: 'from-cyan-400/30 to-slate-900', accent: 'cyan' },
  { id: 'nook-13', brand: 'Nook', model: '13 Essential', price: 549, cpu: 'Intel Core i5-1235U', ram: '8 GB', storage: '256 GB SSD', description: 'Portátil económico para estudio y oficina con 8 GB de RAM, pantalla cómoda y batería para toda la jornada.', category: 'Estudio', color: 'from-lime-400/25 to-emerald-950', accent: 'lime' },
  { id: 'axis-business-14', brand: 'Axis', model: 'Business 14', price: 1199, cpu: 'Intel Core Ultra 7', ram: '16 GB', storage: '512 GB SSD', description: 'Equipo empresarial seguro para hojas de cálculo, videollamadas y trabajo híbrido, con 16 GB de RAM.', category: 'Empresarial', color: 'from-blue-500/30 to-slate-950', accent: 'blue' },
  { id: 'pixel-studio-15', brand: 'Pixel', model: 'Studio 15', price: 1399, cpu: 'AMD Ryzen 7 8845HS', ram: '16 GB', storage: '1 TB SSD', description: 'Pensado para diseño gráfico y fotografía, con 16 GB de RAM y una pantalla precisa para cuidar cada detalle.', category: 'Diseño', color: 'from-pink-500/30 to-purple-950', accent: 'pink' },
  { id: 'terra-creator-16', brand: 'Terra', model: 'Creator 16', price: 1749, cpu: 'Intel Core i7-14700H', ram: '32 GB', storage: '2 TB SSD', description: 'Estación creativa para 3D y arquitectura con 32 GB de RAM, almacenamiento generoso y refrigeración silenciosa.', category: 'Diseño', color: 'from-amber-400/30 to-stone-950', accent: 'amber' },
  { id: 'orbit-flex-13', brand: 'Orbit', model: 'Flex 13', price: 899, cpu: 'Intel Core Ultra 5', ram: '16 GB', storage: '512 GB SSD', description: 'Convertible y ligero para tomar notas, presentar ideas y estudiar con 16 GB de RAM en cualquier posición.', category: 'Convertible', color: 'from-sky-400/35 to-blue-950', accent: 'sky' },
  { id: 'forge-mini-14', brand: 'Forge', model: 'Mini 14', price: 849, cpu: 'AMD Ryzen 5 8640HS', ram: '16 GB', storage: '512 GB SSD', description: 'Compacto portátil gamer con 16 GB de RAM para jugar en 1080p y disfrutar tus títulos favoritos donde quieras.', category: 'Gamer', color: 'from-red-500/30 to-zinc-950', accent: 'red' },
  { id: 'nook-go-15', brand: 'Nook', model: 'Go 15', price: 699, cpu: 'Intel Core i3-N305', ram: '8 GB', storage: '512 GB SSD', description: 'Portátil económico y práctico para clases, navegación y documentos, con 8 GB de RAM y teclado numérico.', category: 'Estudio', color: 'from-yellow-400/25 to-orange-950', accent: 'yellow' },
  { id: 'axis-carbon-14', brand: 'Axis', model: 'Carbon 14', price: 1299, cpu: 'Intel Core Ultra 7', ram: '16 GB', storage: '1 TB SSD', description: 'Empresarial, resistente y discreto: sus 16 GB de RAM mantienen tu flujo de trabajo ágil durante todo el día.', category: 'Empresarial', color: 'from-slate-400/30 to-slate-950', accent: 'slate' },
  { id: 'luma-book-15', brand: 'Luma', model: 'Book 15', price: 1099, cpu: 'Apple M3', ram: '24 GB', storage: '512 GB SSD', description: 'Una pantalla amplia para editar, escribir y crear, con 24 GB de RAM y autonomía para dejar el cargador atrás.', category: 'Ultraligero', color: 'from-teal-400/30 to-emerald-950', accent: 'teal' },
]
