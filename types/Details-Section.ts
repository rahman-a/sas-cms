export type Video = {
  url: string
  title?: string
  duration?: string
  description?: string
}

export type Quote = {
  content: string
  name?: string
  role?: string
}

export interface Data {
  _id: string
  title?: string
  description: string
  link?: string
  text?: string
  image?: string
  video?: Video
  quote?: Quote
}
