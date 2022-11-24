import React from 'react'
import styles from './Footer.module.scss'
import { types, Repeater, Image, Text } from 'react-bricks/frontend'

const Footer: types.Brick = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <Repeater propName='footer-links' />
          <span className={styles.footer__separator}></span>
          <div className={styles.footer__content}>
            <Image
              propName='footer logo'
              alt='upload the website logo..'
              maxWidth={100}
              renderWrapper={({ children }) => (
                <figure className={styles.footer__logo}>{children}</figure>
              )}
            />
            <Text
              propName='footer copyright'
              placeholder='footer copyright text...'
              renderBlock={({ children }) => (
                <p className={styles.footer__text}>{children}</p>
              )}
            />
          </div>
          <Repeater propName='footer-legal' />
        </div>
      </div>
    </footer>
  )
}

Footer.schema = {
  name: 'footer',
  label: 'Footer',
  category: 'Footer',
  repeaterItems: [
    {
      name: 'footer-links',
      itemType: 'footer-links-container',
      itemLabel: 'Footer links container',
      max: 1,
    },
    {
      name: 'footer-legal',
      itemType: 'footer-legal-container',
      itemLabel: 'Footer legal container',
      max: 1,
    },
  ],
}

export default Footer
