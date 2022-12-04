import { Button } from '@components/ui'
import React from 'react'
import styles from './Career-Hero-Section.module.scss'
import { types, Text, RichText, Repeater } from 'react-bricks/frontend'

interface CareerHeroSectionProps {
  image?: types.IImageSource
}

const CareerHeroSection: types.Brick<CareerHeroSectionProps> = ({ image }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${image?.src})` }}
    >
      <div className={styles.hero__row}>
        <div className={styles.hero__float}>
          <span className={styles['hero__float-1']}></span>
          <span className={styles['hero__float-2']}></span>
          <span className={styles['hero__float-3']}></span>
          <span className={styles['hero__float-4']}></span>
          <span className={styles['hero__float-5']}></span>
          <span className={styles['hero__float-6']}></span>
          <span className={styles['hero__float-7']}></span>
        </div>
        <div className={styles.hero__col}>
          <div className={styles.hero__overlay}></div>
          <div className={styles.hero__content}>
            <Text
              propName='hero__category'
              placeholder='Type section category'
              renderBlock={({ children }) => (
                <span className={styles.hero__category}>{children}</span>
              )}
            />
            <Text
              propName='hero__title'
              placeholder='Type section title'
              renderBlock={({ children }) => (
                <h1 className={styles.hero__title}>{children}</h1>
              )}
            />

            <RichText
              propName='hero__description'
              placeholder='Type section description'
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Highlight,
              ]}
              renderBlock={({ children }) => (
                <p className={styles.hero__description}>{children}</p>
              )}
            />
            <Text
              propName='hero__subtitle'
              placeholder='Type section subtitle'
              renderBlock={({ children }) => (
                <strong className={styles.hero__subtitle}>{children}</strong>
              )}
            />

            <Repeater
              propName='careerherobutton'
              itemProps={{
                className: styles.hero__cta,
              }}
            />
          </div>
        </div>
        <div className={styles.hero__col}></div>
      </div>
    </section>
  )
}

CareerHeroSection.schema = {
  name: 'Careerherosection',
  label: 'Career Hero Section',
  category: 'General',
  sideEditProps: [
    {
      name: 'image',
      label: 'Set Background Image',
      type: types.SideEditPropType.Image,
    },
  ],
  repeaterItems: [
    {
      name: 'careerherobutton',
      itemLabel: 'Career Hero Button',
      itemType: 'button',
    },
  ],
}

export default CareerHeroSection
