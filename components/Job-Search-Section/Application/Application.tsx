import React, { useEffect, useState, FormEvent } from 'react'
import styles from './Application.module.scss'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Oval } from 'react-loader-spinner'
import { Modal, Button } from '@components/ui'
import { Input, Select } from '@components/ui/Form'
import { postJobApplication } from '../api'
import countriesData from '@data/countries.json'

type JobDetails = {
  _id?: string
  jobId?: string
  title?: string
}

interface ApplicationProps {
  jobDetails: JobDetails
  setJobDetails: React.Dispatch<React.SetStateAction<JobDetails>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  address: string
  resume: any
}

interface ErrorFields {
  firstName: string
  lastName: string
  email: string
  country: string
}

const requiredFields = ['firstName', 'lastName', 'email', 'country', 'resume']
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Application = ({
  jobDetails,
  setJobDetails,
  isOpen,
  setIsOpen,
}: ApplicationProps) => {
  const [data, setData] = useState<FormData>({} as FormData)
  const mutation = useMutation(postJobApplication, {
    onSuccess: (data) => {
      notifySuccess("Thank you for applying, we'll contact you soon")
      setData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        resume: '',
      })
    },
    onError: (error: { message: string }) => {
      notifyError(error.message)
    },
  })
  const [errors, setErrors] = useState<ErrorFields>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
  })
  const [success, setSuccess] = useState({
    firstName: false,
    lastName: false,
    email: false,
    country: false,
  })
  const notifyError = (msg?: string) =>
    toast.error(msg, {
      position: 'top-center',
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const notifySuccess = (msg?: string) =>
    toast.success(msg, {
      position: 'top-center',
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const onClose = () => {
    setIsOpen(false)
    setJobDetails({} as JobDetails)
  }
  const validateForm = () => {
    const errorsMessages = []
    const errorFields = requiredFields.filter((field) => !data[field])
    const errorFieldsObj = errorFields.reduce((acc, field) => {
      acc[field] = capitalize(field) + ' is required'
      errorsMessages.push(capitalize(field) + ' is required')
      return acc
    }, {})
    if (errorFields.length) {
      errorsMessages.forEach((msg) => notifyError(msg))
      setErrors(errorFieldsObj as ErrorFields)
      return false
    }
    return true
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      const applicationData = new FormData()
      applicationData.append('firstName', data.firstName)
      applicationData.append('lastName', data.lastName)
      applicationData.append('email', data.email)
      data.phone && applicationData.append('phone', data.phone)
      applicationData.append('country', data.country)
      data.address && applicationData.append('address', data.address)
      applicationData.append('resume', data.resume)
      applicationData.append('job', jobDetails._id)
      mutation.mutate({ application: applicationData, id: jobDetails._id })
    }
  }

  const handleInputChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    const { name, value } = target
    if (name === 'resume') {
      setData({ ...data, [name]: target.files[0] })
    } else setData({ ...data, [name]: value })
    setSuccess({ ...success, [name]: true })
  }

  useEffect(() => {
    if (!isOpen) {
      setErrors({} as ErrorFields)
      setSuccess({} as typeof success)
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={false}>
      <div className={styles.application}>
        <span className={styles.application__id}>#{jobDetails.jobId}</span>
        <h3>{jobDetails.title} </h3>
        <form
          className={styles.application__form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            label='Your first name'
            value={data.firstName}
            type='text'
            error={errors['firstName']}
            success={success['firstName']}
            onChange={handleInputChange}
            name='firstName'
            required
          />
          <Input
            label='Your last name'
            value={data.lastName}
            type='text'
            error={errors['lastName']}
            success={success['lastName']}
            onChange={handleInputChange}
            name='lastName'
            required
          />
          <Input
            label='Email address'
            value={data.email}
            type='email'
            error={errors['email']}
            success={success['email']}
            onChange={handleInputChange}
            name='email'
            required
          />
          <Input
            label='Phone number'
            value={data.phone}
            type='text'
            error={errors['phone']}
            success={success['phone']}
            onChange={handleInputChange}
            name='phone'
          />
          <Select
            options={countriesData}
            error={errors['country']}
            success={success['country']}
            onSelectHandler={(option) =>
              setData({ ...data, country: option.label })
            }
            label='Country'
            required
          />
          <Input
            label='Address'
            value={data.address}
            type='text'
            error={errors['address']}
            success={success['address']}
            onChange={handleInputChange}
            name='address'
          />
          <Input
            label='Upload your Resume'
            value={data.resume?.filename}
            type='file'
            error={errors['resume']}
            success={success['resume']}
            onChange={handleInputChange}
            name='resume'
          />
          <div className={styles.application__cta}>
            <Button
              variant='gray-outlined'
              text='Cancel'
              type='reset'
              onClick={onClose}
              disabled={mutation.isLoading}
            />
            <Button
              variant='dark-primary'
              type='submit'
              text='Submit'
              disabled={mutation.isLoading}
            />
            {mutation.isLoading && (
              <Oval
                width={40}
                height={40}
                color='#1e95e0'
                secondaryColor='#1e95e0'
                strokeWidth={3}
                strokeWidthSecondary={3}
              />
            )}
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default Application
