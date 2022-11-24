import React, { useEffect, useState } from 'react'
import styles from './Hero-Section.module.scss'
import { Share } from '../icons'
import classnames from 'classnames'
import { Repeater, types, Text, RichText } from 'react-bricks/frontend'

type HeroSectionProps = {
  className?: string
  isFloating?: boolean
  isDescription?: boolean
  isSubTitle?: boolean
  isShortUrl?: boolean
  backgroundImage?: types.IImageSource
}

const HeroSection: types.Brick<HeroSectionProps> = ({
  className,
  backgroundImage,
  isFloating,
  isDescription,
  isSubTitle,
  isShortUrl,
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [background, setBackground] = useState<string>('var(--primary-color)')

  const heroClasses = classnames(styles.hero, {
    [className as string]: className,
  })

  const heroContentClasses = classnames(styles.hero__content, {
    [styles.hero__content_floating]: isFloating,
  })

  useEffect(() => {
    backgroundImage?.src &&
      setBackground(`url(${backgroundImage.src}) no-repeat`)
  }, [backgroundImage])
  return (
    <section
      className={heroClasses}
      style={{
        background,
      }}
    >
      <div className={heroContentClasses}>
        <Text
          propName='title'
          placeholder='Type title here...'
          renderBlock={({ children }) => (
            <h1 className={styles.hero__title}>{children}</h1>
          )}
        />
        {isSubTitle && (
          <Text
            propName='sub-title'
            placeholder='Type subtitle here...'
            renderBlock={({ children }) => (
              <h2 className={styles.hero__subtitle}>{children}</h2>
            )}
          />
        )}
        {isDescription && (
          <RichText
            propName='description'
            placeholder='Type description...'
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
            ]}
            renderBlock={({ children }) => (
              <p className={styles.hero__text}>{children}</p>
            )}
          />
        )}
        {isShortUrl && (
          <div className={styles.hero__link}>
            <button onClick={() => setShow(true)}>
              <span>
                <Share />
              </span>
              <div className={styles.hero__link_copy}>
                <Repeater
                  propName='copyBoxWrapper'
                  itemProps={{
                    show,
                    setShow,
                  }}
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

HeroSection.schema = {
  name: 'hero-section',
  label: 'Hero Section',
  category: 'General',
  getDefaultProps: () => ({
    isDescription: true,
    isSubTitle: false,
    isShortUrl: true,
    backgroundImage: {
      fallbackSrc:
        'https://images.reactbricks.com/original/edbafefe-6378-4841-886c-c47bb4eb187f.jpg',
      fallbackSrcSet:
        'https://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-1600.jpg 1600w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-800.jpg 800w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-200.jpg 200w',
      fallbackType: 'image/jpeg',
      src: 'https://images.reactbricks.com/original/edbafefe-6378-4841-886c-c47bb4eb187f.webp',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/edbafefe-6378-4841-886c-c47bb4eb187f.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-1600.webp 1600w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-1200.webp 1200w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-800.webp 800w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-400.webp 400w,\nhttps://images.reactbricks.com/src_set/edbafefe-6378-4841-886c-c47bb4eb187f-200.webp 200w',
      width: 1600,
      height: 900,
      alt: 'industries and sectors',
      seoName: 'industries-sectors',
    },
    title: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Industries and sectors',
          },
        ],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Our industry-focused network is designed to anticipate and address your business needs. Together, our 250,000 people, deployed across 158 countries, can both zoom out and see the big picture — the context — and zoom in on the right solution.',
          },
        ],
      },
    ],
    copyBoxWrapper: [
      {
        isEdit: false,
        shortLink: 'https://sas.to/348ggWw',
        buttonText: 'Click to copy',
        CopiedNotice: 'link copied',
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'isFloating',
      label: 'Floating',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isSubTitle',
      label: 'Toggle Subtitle',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isDescription',
      label: 'Toggle Description',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isShortUrl',
      label: 'Toggle Short Url',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'copyBoxWrapper',
      itemLabel: 'Copy Box',
      itemType: 'copy-box',
      max: 1,
    },
  ],
}

export default HeroSection
