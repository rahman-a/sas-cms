export type Item = {
  _id: string
  item: string
  url: string
}

export type List = {
  _id: string
  title: string
  items: Item[]
}

export interface FilteredList {
  _id: string
  title: string
  list: List[]
}
