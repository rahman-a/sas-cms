/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react'
import { types, Repeater, Text } from 'react-bricks/frontend'
import classNames from 'classnames'
import data from '@data/carousel.json'
import styles from './Carousel.module.scss'
import { ThickLongRightArrow } from '../icons'
import CarouselItem from './Carousel-Item'

interface CarouselProps {}

const Carousel: types.Brick<CarouselProps> = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [initialTouchPosition, setInitialTouchPosition] = useState<number>(0)

  const slidesWrapperClasses = classNames(
    styles.carousel__wrapper,
    styles[`carousel__pane_active-${currentSlide}`]
  )

  const handleTouchMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const touchPosition = e.clientX
    const difference = initialTouchPosition - touchPosition
    if (difference > 5) {
      currentSlide < 2 && setCurrentSlide(currentSlide + 1)
    }
    if (difference < -5) {
      currentSlide > 0 && setCurrentSlide(currentSlide - 1)
    }
  }
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__slides}
        onPointerMove={handleTouchMove}
        onPointerDown={(e) => setInitialTouchPosition(e.clientX)}
      >
        <div className={slidesWrapperClasses}>
          <Repeater
            propName='carousel-items'
            itemProps={{
              currentSlide: currentSlide,
            }}
          />
        </div>
      </div>
      <div className={styles.carousel__tabs}>
        <Repeater
          propName='carousel-tabs'
          itemProps={{
            currentSlide: currentSlide,
            setCurrentSlide: setCurrentSlide,
          }}
        />
      </div>
      <div className={styles.carousel__nav}>
        <div className={styles.carousel__nav_wrapper}>
          {[...Array(data.slides.length)].map((_, index) => (
            <button
              className={
                index === currentSlide ? styles.carousel__nav_active : ''
              }
              key={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

Carousel.schema = {
  name: 'carousel',
  label: 'Carousel',
  category: 'Carousel',
  getDefaultProps: () => ({
    'carousel-items': [],
  }),
  repeaterItems: [
    {
      name: 'carousel-items',
      itemLabel: 'Carousel Items',
      itemType: 'carousel-item',
      max: 3,
    },
    {
      name: 'carousel-tabs',
      itemLabel: 'Carousel Tabs',
      itemType: 'carousel-tab',
      max: 3,
    },
  ],
}

export default Carousel
