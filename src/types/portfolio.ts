export type Project = {
  title: string
  slug: string
  category: string
  year: string
  location: string
  coverImage: string
  galleryImages: string[]
  video?: string
  description: string
  client: string
  credits: string
}

export type JournalEntry = {
  title: string
  slug: string
  category: string
  date: string
  coverImage: string
  body: string
  gallery: string[]
}

export type Service = {
  title: string
  description: string
}
