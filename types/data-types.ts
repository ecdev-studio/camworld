export interface IProduct {
  id: number
  name: string
  slug: string
  image: string
  price: number
  categoryId: number
  sku: string
  youtubeEmbed: string
  rating: number
  numReviews: number
  category: ICategory
  subTaxonomies: Array<ISubTaxonomy>
  galleries: Array<IGallery>
  highlights: Array<IHighlight>
  reviews: Array<IReview>
  specs: Array<ISpecification>
  descriptions: Array<IDescription>
}

export interface IDescription {
  id: number
  title: string
  value: string
  productId: number
}

export interface ICategory {
  id: number
  name: string
  slug: string
  taxonomies?: Array<ITaxonomy>
  products?: Array<IProduct>
}

export interface ITaxonomy {
  id: number
  name: string
  subTaxonomies: Array<ISubTaxonomy>
}

export interface ISubTaxonomy {
  id: number
  name: string
  taxonomyId: number
}

export interface IGallery {
  id: number
  url: string
  productId: number
}

export interface IHighlight {
  id: number
  name: string
  productId: number
}

export interface IReview {
  id: number
  name: string
  email: string
  title: string
  review: string
  rating: number
  productId: number
  createdAt: string
}

export interface ISpecification {
  id: number
  key: string
  value: string
  productId: number
}
