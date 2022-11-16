export type Keyword = {
  _id: string
  keyword: string
}

export type KeywordsList = {
  _id: string
  title: string
  keywords: Keyword[]
}

export type FilterList = KeywordsList[]
