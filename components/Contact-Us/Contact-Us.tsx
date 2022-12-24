import React, { FormEvent, useEffect, useState } from 'react'
import { types } from 'react-bricks/frontend'
import Link from 'next/link'
import { useMutation } from 'react-query'
import { Oval } from 'react-loader-spinner'
import styles from './Contact-Us.module.scss'
import { Button } from '@components/ui'
import { Input, Select } from '@components/ui/Form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import countriesData from '@data/countries.json'
import { postContactData } from './api'
import { FormData, ErrorFields } from './types'

const inquiryType = [
  { _id: '1', label: 'Employment', value: 'employment', name: 'employment' },
  {
    _id: '2',
    label: 'Request for Proposal',
    value: 'proposal',
    name: 'request for proposal',
  },
  {
    _id: '3',
    label: 'General business query',
    value: 'general',
    name: 'general business query',
  },
]

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const ContactUs: types.Brick = () => {
  const mutation = useMutation(postContactData, {
    onSuccess: () => {
      setSuccessMsg('Thank you for contacting us')
      setData({} as FormData)
    },
    onError: () => {
      setError('Something went wrong, please try again')
    },
  })
  const [data, setData] = useState<FormData>({} as FormData)
  const [errors, setErrors] = useState<ErrorFields>({
    name: '',
    email: '',
    location: '',
    inquiry: '',
    subject: '',
  })
  const [success, setSuccess] = useState({
    name: false,
    email: false,
    location: false,
    inquiry: false,
    subject: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const notifyError = (msg?: string) =>
    toast.error(msg ? msg : error, {
      position: 'top-center',
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const notifySuccess = (msg?: string) =>
    toast.success(msg ? msg : successMsg, {
      position: 'top-center',
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const requiredFields = ['name', 'email', 'location', 'inquiry', 'subject']

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
      setErrors(errorFieldsObj)
      return false
    }
    return true
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      mutation.mutate(data)
    }
  }

  const handleInputChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    const { name, value } = target
    setData({ ...data, [name]: value })
    setSuccess({ ...success, [name]: true })
  }

  useEffect(() => {
    if (error) {
      notifyError()
    }
    if (successMsg) {
      notifySuccess()
    }
  }, [error, successMsg])
  return (
    <div className={styles.contact}>
      <ToastContainer />
      <div className={styles.contact__section}>
        <div className={styles.contact__content}>
          <h2 className={styles.contact__header}>Contact us</h2>
          <p className={styles.contact__par}>
            Please provide the following details along with your message so we
            may appropriately assist you. We will protect your personal
            information in accordance with our Privacy Statement.
          </p>
          <p className={styles.contact__required}>
            Required fields are marked with an asterisk(<span>*</span>)
          </p>
        </div>
      </div>
      <div className={styles.contact__section}>
        <div className={styles.contact__content}>
          <form className={styles.contact__form} onSubmit={handleSubmit}>
            <Input
              label='Your name'
              value={data.name}
              type='text'
              error={errors['name']}
              success={success['name']}
              onChange={handleInputChange}
              name='name'
              required
            />
            <Input
              label='Your e-mail address'
              value={data.email}
              type='email'
              error={errors['email']}
              success={success['email']}
              onChange={handleInputChange}
              name='email'
              required
            />
            <Input
              label='Your telephone number'
              value={data.phone || ''}
              type='tel'
              onChange={handleInputChange}
              name='phone'
            />
            <Input
              label='Your organization'
              value={data.organization || ''}
              type='text'
              error={errors['organization']}
              success={success['organization']}
              onChange={handleInputChange}
              name='organization'
              required
            />
            <Input
              label='Your role within organization'
              value={data.role || ''}
              type='text'
              onChange={handleInputChange}
              name='role'
            />
            <Select
              options={countriesData}
              error={errors['country']}
              success={success['country']}
              onSelectHandler={(option) =>
                setData({ ...data, location: option.label })
              }
              label='Which of our SAS member firms should respond to this 
              request (select only if different from your location)?'
              className={styles.contact__select}
              required
            />
            <Select
              options={inquiryType}
              error={errors['inquiry']}
              success={success['inquiry']}
              onSelectHandler={(option) =>
                setData({ ...data, inquiry: option.value })
              }
              label='Type of inquiry'
              className={styles.contact__select}
              required
            />
            <Input
              label='Subject'
              value={data.subject}
              type='text'
              error={errors['subject']}
              success={success['subject']}
              onChange={handleInputChange}
              name='subject'
              required
            />
            <div className={styles.contact__textarea}>
              <label htmlFor='details'>
                Specific details about your inquiry
              </label>
              <textarea
                name='message'
                value={data.message || ''}
                id='details'
                cols={30}
                rows={3}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <p className={styles.contact__disclaimer}>
              By submitting your email address, you acknowledge that you have
              read the
              <Link href='/legal-notices/privacy-policy'>
                <a className={styles.contact__link}>Privacy Statement</a>
              </Link>
              and that you consent to our processing data in accordance with the
              Privacy Statement (including international transfers). If you
              change your mind at any time about wishing to receive the
              information from us, you can send us an email message using the
              Contact Us page.
            </p>
            <div className={styles.contact__cta}>
              <Button
                variant='gray-outlined'
                as='a'
                URLText='/'
                text='Cancel'
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
      </div>
    </div>
  )
}

ContactUs.schema = {
  name: 'contact-us',
  label: 'Contact Us',
  category: 'General',
}

export default ContactUs
