export type SimpleCardType = {
  _type: 'simpleCard'
  title: string
  description: string
}

export type CardType = {
  _type: 'card'
  image: {
    _type: 'image'
    asset: { _ref: string; _type: 'reference' }
    alt: string
  }
  title: string
  description: string
  link?: {
    url?: string
    text?: string
    openInNewTab?: boolean
  }
}

export type CardGridType = {
  _type: 'cardGridComponent'
  name: string
  heading?: string
  description?: string
  cards: (SimpleCardType | CardType)[]
  layout?: {
    columns?: 2 | 3 | 4
    gap?: 'small' | 'medium' | 'large'
    cardStyle?: 'default' | 'bordered' | 'shadow' | 'minimal'
  }
}

export type SanityImage = {
    _type: 'image'
    asset: { _ref: string; _type: 'reference', url?: string }
    alt?: string
}

export type SanityBlock = {
    _type: 'block'
    _key: string
    children: Array<{
        _type: 'span'
        _key: string
        text: string
        marks?: string[]
    }>
    markDefs?: Array<{
        _type: string
        _key: string
        [key: string]: any
    }>
    style?: string
    listItem?: string
    level?: number
}

export type TextImageType = {
    _type: 'textImage'
    title: string
    image?: SanityImage
    caption?: SanityBlock[]
    body: (SanityImage | SanityBlock)[]
}
