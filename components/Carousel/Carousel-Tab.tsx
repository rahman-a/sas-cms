import React from 'react'
import { types, Text } from 'react-bricks/frontend'
import styles from './Carousel.module.scss'
import { ThickLongRightArrow } from '../icons'

interface CarouselItemProps {
  index: number
  currentSlide: number
  setCurrentSlide: (index: number) => void
  // bricks props
  tabLink: string
}

const CarouselTab: types.Brick<CarouselItemProps> = ({
  index,
  currentSlide,
  setCurrentSlide,
  tabLink,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`${styles.carousel__tab} ${
        index === currentSlide ? styles.carousel__tab_active : ''
      }`}
      onMouseEnter={() => setCurrentSlide(index)}
    >
      <Text
        propName='title'
        placeholder='Type carousel item title...'
        renderBlock={({ children }) => <h2>{children}</h2>}
      />
      {tabLink && (
        <a href={tabLink || '#'}>
          <span>Read more</span>
          <ThickLongRightArrow />
        </a>
      )}
    </div>
  )
}

CarouselTab.schema = {
  name: 'carousel-tab',
  label: 'Carousel Tab',
  category: 'Carousel',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: 'Type tab title here....',
  }),
  sideEditProps: [
    {
      name: 'tabLink',
      label: 'Tab Link',
      type: types.SideEditPropType.Text,
      validate: (value: string) =>
        !value || value.startsWith('https://') || value.startsWith('http://')
          ? ''
          : 'Link must start with http:// or https://',
    },
  ],
}

export default CarouselTab
