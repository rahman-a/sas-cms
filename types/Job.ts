export interface Job {
  _id: string
  jobId: string
  title: string
  description: string
  company: string
  jobType: string
  skills: string[]
  country: string
  salary?: number
  createdAt: string
  updatedAt: string
}
