import { Data } from './Details-Section'
export interface TabbedInterface {
  _id: string
  item: string
  title: string
  text: string
  link?: string
  btn?: string
}

export interface TabbedNavbar {
  _id: string
  label: string
  icon: string
  details: Data
}
