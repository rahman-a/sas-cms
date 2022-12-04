import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import styles from './Float-Page-Index.module.scss'
import { Close, ListIcon } from '../../icons'
import { useMediaQuery } from '@hooks'
import { types, Repeater } from 'react-bricks/frontend'

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
  isEdit?: boolean
}
let isScrollingBasedOnClick: boolean = false
let scrollStopTimeout: NodeJS.Timeout | null = null

const FloatPageIndex: types.Brick<FloatPageIndexProps> = ({
  indexData,
  className,
  style,
  isEdit,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isHovered = useRef<boolean>(false)
  const [selectedUrl, setSelectedUrl] = useState<string>('')
  const indexItemsRefs = useRef<any[]>([])
  const isMobile = useMediaQuery('(max-width: 767.98px)')
  const indexClasses = classnames(styles.index, {
    [styles.index__open]: isOpen || isEdit,
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
    const scrollItems = document.querySelectorAll(`.scroll-article-content`)
    if (scrollItems) {
      indexItemsRefs.current = Array.from(scrollItems)
    }
  }, [])

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
    <div {...rest}>
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
            <Repeater
              propName='floatItemWrapper'
              itemProps={{
                selectedUrl,
                selectIndexHandler,
              }}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

FloatPageIndex.schema = {
  name: 'float-page-index',
  label: 'Float Page Index',
  category: 'UI',
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'floatItemWrapper',
      itemLabel: 'Float Item',
      itemType: 'float-page-index-item',
    },
  ],
}

export default FloatPageIndex
