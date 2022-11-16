export type Social = {
  _id: string
  name: string
  link: string
}

export interface Staff {
  _id: string
  name: string
  role: string
  tel?: string
  image?: string
  social: Social[]
}
