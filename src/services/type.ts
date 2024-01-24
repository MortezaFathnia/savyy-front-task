export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export const Size = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl'
} as const
export type Size = (typeof Size)[keyof typeof Size]


export const Color = {
    red: 'red',
    green: 'green',
} as const
export type Color = (typeof Color)[keyof typeof Color]

export const Sleeve = {
    long: 'long',
    short: 'short',
} as const
export type Sleeve = (typeof Sleeve)[keyof typeof Sleeve]