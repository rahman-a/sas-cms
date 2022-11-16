import Link from 'next/link'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import styles from './Float-Page-Index.module.scss'
import { Close, ListIcon } from '../../icons'
import { useMediaQuery } from '@hooks'

type IndexData = {
  _id: string
  title: string
  url: string
}

interface FloatPageIndexProps {
  indexData: IndexData[]
  scrollItemsClassName: string
  className?: string
  style?: React.CSSProperties
}
let isScrollingBasedOnClick: boolean = false
let scrollStopTimeout: NodeJS.Timeout | null = null

const FloatPageIndex: FunctionComponent<FloatPageIndexProps> = ({
  indexData,
  scrollItemsClassName,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isHovered = useRef<boolean>(false)
  const [selectedUrl, setSelectedUrl] = useState(indexData[0].url)
  const indexItemsRefs = useRef<any[]>([])
  const isMobile = useMediaQuery('(max-width: 767.98px)')
  const indexClasses = classnames(styles.index, {
    [styles.index__open]: isOpen,
    [className as string]: className,
  })

  const selectIndexHandler = (url: string) => {
    isScrollingBasedOnClick = true
    setSelectedUrl(url)
    setIsOpen(false)
  }

  const detectScrollStop = () => {
    if (scrollStopTimeout) clearTimeout(scrollStopTimeout)
    scrollStopTimeout = setTimeout(() => {
      isScrollingBasedOnClick = false
    }, 100)
  }

  const getElementIdOnScroll = () => {
    if (isScrollingBasedOnClick) {
      detectScrollStop()
      return
    }
    const scrollPosition = document.documentElement.scrollTop

    const indexItems = indexItemsRefs.current
    indexItems.map((item) => {
      if (scrollPosition >= item.offsetTop - 100) {
        const elementId = item.getAttribute('id')
        if (elementId) {
          setSelectedUrl(elementId)
        }
      }
    })
  }

  useEffect(() => {
    if (scrollItemsClassName) {
      const scrollItems = document.querySelectorAll(`.${scrollItemsClassName}`)
      if (scrollItems) {
        indexItemsRefs.current = Array.from(scrollItems)
      }
    }
  }, [scrollItemsClassName])

  useEffect(() => {
    setIsOpen(true)
    const closeIndexTimeout = setTimeout(() => {
      if (!isHovered.current) setIsOpen(false)
      clearTimeout(closeIndexTimeout)
    }, 2000)
    isMobile && setIsOpen(false)
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('scroll', getElementIdOnScroll)

    return () => {
      window.removeEventListener('scroll', getElementIdOnScroll)
      if (scrollStopTimeout) clearTimeout(scrollStopTimeout)
    }
  }, [])
  return (
    <div
      className={indexClasses}
      style={style}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <button
        className={styles.index__toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? <Close /> : <ListIcon />}</span>
        <div className={styles.index__toggle_dash}></div>
      </button>
      <div className={styles.index__wrapper}>
        <h2 className={styles.index__title}>Index</h2>
        <ul className={styles.index__list}>
          {indexData.map((item) => (
            <li
              key={item._id}
              className={`${styles.index__item} ${
                item.url === selectedUrl ? styles['index__item--selected'] : ''
              }`}
              onClick={() => selectIndexHandler(item.url)}
            >
              <Link href={`#${item.url}`}>
                <a className={styles.index__link}>
                  <span>{item.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FloatPageIndex
