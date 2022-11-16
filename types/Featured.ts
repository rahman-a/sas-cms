export interface Post {
  _id: string
  text: string
  image: string
  link: string
}

export interface PostsList {
  industries: Post[]
  services: Post[]
  issues: Post[]
  about: Post[]
  careers: Post[]
}
