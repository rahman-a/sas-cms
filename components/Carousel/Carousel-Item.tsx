import React from 'react'
import { types, Text } from 'react-bricks/frontend'
import styles from './Carousel.module.scss'

type Slide = {
  _id: string
  title: string
  description: string
  link: string
  image: string
}

interface CarouselItemProps {
  index: number
  currentSlide: number
  // bricks props
  backgroundImage: types.IImageSource
  link: string
}

const CarouselItem: types.Brick<CarouselItemProps> = ({
  index,
  currentSlide,
  backgroundImage,
  link,
  ...rest
}) => {
  return (
    <a
      {...rest}
      href={link}
      className={`${styles.carousel__pane} ${
        index === currentSlide ? styles.carousel__pane_active : ''
      }`}
      style={{ backgroundImage: `url(${backgroundImage?.src})` }}
    >
      <div className={styles.carousel__data}>
        <div className={styles.carousel__data_wrapper}>
          <Text
            propName='title'
            placeholder='Type carousel item title...'
            renderBlock={({ children }) => (
              <h2 className={styles.carousel__title}>
                <span>{children}</span>
              </h2>
            )}
          />
          <Text
            propName='description'
            placeholder='Type carousel item description...'
            renderBlock={({ children }) => (
              <p className={styles.carousel__description}>
                <span>{children}</span>
              </p>
            )}
            multiline={true}
            softLineBreak={true}
          />
        </div>
      </div>
    </a>
  )
}

CarouselItem.schema = {
  name: 'carousel-item',
  label: 'Carousel Item',
  category: 'Carousel',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    backgroundImage: { src: '/images/image-placeholder.png' },
    title: 'Type the carousel item title...',
    description: 'Type the carousel item description...',
  }),
  sideEditProps: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'link',
      label: 'Carousel Item Link',
      type: types.SideEditPropType.Text,
      validate: (value: string) =>
        !value || value.startsWith('https://') || value.startsWith('http://')
          ? ''
          : 'Link must start with http:// or https://',
    },
  ],
}

export default CarouselItem
