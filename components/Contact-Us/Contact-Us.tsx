import React, { FormEvent, useState } from 'react'
import styles from './Contact-Us.module.scss'
import Link from 'next/link'
import { Button } from '@components/ui'
import { Input, Select } from '@components/ui/Form'
import { Section } from '@components/Layout'
import countriesData from '@data/countries.json'
import { types } from 'react-bricks/frontend'

const inquiryType = [
  { _id: '1', label: 'Employment', value: 'employment', name: 'employment' },
  {
    _id: '2',
    label: 'Request for Proposal',
    value: 'request for proposal',
    name: 'request for proposal',
  },
  {
    _id: '3',
    label: 'General business query',
    value: 'general business query',
    name: 'general business query',
  },
]

type FormData = {
  name: string
  email: string
  country: string
  inquiry: string
  subject: string
  details: string
  tel?: string
  organization?: string
  role?: string
  isVerified?: boolean
}

const ContactUs: types.Brick = () => {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    inquiry: '',
    subject: '',
    details: '',
    tel: '',
    organization: '',
    role: '',
    isVerified: false,
  })
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ data })
  }

  const handleInputChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    const { name, value } = target
    setData({ ...data, [name]: value })
  }
  return (
    <div className={styles.contact}>
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
              onChange={handleInputChange}
              name='name'
              required
            />
            <Input
              label='Your e-mail address'
              value={data.email}
              type='email'
              onChange={handleInputChange}
              name='email'
              required
            />
            <Input
              label='Your telephone number'
              value={data.tel || ''}
              type='tel'
              onChange={handleInputChange}
              name='tel'
            />
            <Input
              label='Your organization'
              value={data.organization || ''}
              type='text'
              onChange={handleInputChange}
              name='organization'
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
              onSelectHandler={(option) =>
                setData({ ...data, country: option.label })
              }
              label='Which of our SAS member firms should respond to this request (select only if different from your location)?'
              className={styles.contact__select}
              required
            />
            <Select
              options={inquiryType}
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
              onChange={handleInputChange}
              name='subject'
              required
            />
            <div className={styles.contact__textarea}>
              <label htmlFor='details'>
                Specific details about your inquiry
              </label>
              <textarea
                name='details'
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
              <Link href='/'>
                <Button variant='gray-outlined' as='a' text='Cancel' />
              </Link>
              <Button variant='dark-primary' type='submit' text='Submit' />
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
