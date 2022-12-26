import { getQueryString } from '../../utils'
const ROOT_URL = 'https://www.saspt.co/api/v1'
interface IQuery {
  country?: string
  title?: string
  skills?: string[]
  jobType?: string
}

interface IFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  address: string
}

export const getAllSkills = async () => {
  try {
    const response = await fetch(`${ROOT_URL}/jobs/skills`)
    const data = await response.json()
    return data.skills
  } catch (error) {
    return error.message
  }
}

export const getFilteredJobs = async (query?: IQuery) => {
  const { skills, ...rest } = query
  // create query string
  const queryString = getQueryString(rest)
  // create skills query string
  const skillsQueryString = getQueryString(skills, 'skills')
  // append skills query string to query string
  const finalQueryString =
    queryString.length > 0 && skillsQueryString.length > 0
      ? queryString + '&' + skillsQueryString
      : queryString.length > 0
      ? queryString
      : skillsQueryString.length > 0
      ? '?' + skillsQueryString
      : ''
  try {
    const response = await fetch(`${ROOT_URL}/jobs/filtered${finalQueryString}`)
    const data = await response.json()
    return data.jobs
  } catch (error) {
    console.log('fetch filtered jobs: ', error.message)
    return error.message
  }
}

export const postJobApplication = async ({
  application,
  id,
}: {
  application: any
  id: string
}) => {
  console.log('post new application: ', application)
  try {
    const response = await fetch(`${ROOT_URL}/applications/${id}`, {
      method: 'POST',
      body: application,
    })
    const data = await response.json()
    if (response.ok) return data
    throw new Error(data.message)
  } catch (error) {
    throw new Error(error.message)
  }
}
