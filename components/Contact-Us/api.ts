import { FormData } from './types'
export const postContactData = async (data: FormData) => {
  const res = await fetch('http://localhost:5000/api/v1/contacts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
