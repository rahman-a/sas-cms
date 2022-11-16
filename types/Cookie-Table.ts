export type Cookie = {
  _id: string
  provider: string
  name: string
  purpose: string
  type: string
  duration?: string
}

export type TableContent = {
  _id: string
  type: string
  cookies: Cookie[]
}

export interface Table {
  _id: string
  title: string
  description?: string
  content: TableContent[]
}
