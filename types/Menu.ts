export interface MenuItem {
  _id: number
  text: string
  link: string
  submenu?: MenuItem[]
}

export interface Menu {
  industries: MenuItem[]
  services: MenuItem[]
  issues: MenuItem[]
  about: MenuItem[]
  careers: MenuItem[]
}
