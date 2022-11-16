import { Staff } from './Staff'

export type ListType = 'countries' | 'cities' | 'offices' | 'details'

export type Office = {
  _id: string
  name?: string // in case of city has multiple offices, name must provided
  address: string
  lat: number
  lng: number
  tel?: string
  fax?: string
  image?: string
  staff?: Staff[]
}

export type OfficesCity = {
  _id: string
  name: string
  lat?: number
  lng?: number
  offices: Office[]
}

export type OfficesCountry = {
  _id: string
  name: string
  lat?: number
  lng?: number
  cities: OfficesCity[]
}

export type Offices = OfficesCountry[]
