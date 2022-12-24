export type FormData = {
  name: string
  email: string
  location: string
  inquiry: string
  subject: string
  message?: string
  phone?: string
  organization?: string
  role?: string
  isVerified?: boolean
}

export type ErrorFields = {
  name?: string
  email?: string
  location?: string
  inquiry?: string
  subject?: string
}
