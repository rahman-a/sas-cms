import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './Job-Search-Accordion.module.scss'
import { Keyword } from '@customTypes/Filter'
import { Plus, Minus } from '../../icons'
import Keywords from './Keyword'
import classNames from 'classnames'

interface CareerSearchAccordionProps {
  searchBy: string
  keywords: Keyword[]
  type?: string
  selectedKeywordsHandler: (keywords: Keyword[]) => void
}

const CareerSearchAccordion: FunctionComponent<CareerSearchAccordionProps> = ({
  searchBy,
  keywords,
  selectedKeywordsHandler,
  type,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([])

  const contentRef = useRef<HTMLDivElement>(null)
  const contentWrapperRef = useRef<HTMLDivElement>(null)

  const accordionContentClasses = classNames(styles.accordion__content, {
    [styles['accordion__content--open']]: isOpen,
  })

  const toggleAccordionHandler = useCallback(
    (e: React.SyntheticEvent) => {
      if (!isOpen) {
        const wrapperHeight = contentWrapperRef.current?.clientHeight
        if (contentRef.current) {
          contentRef.current.style.height = `${wrapperHeight}px`
        }
        setIsOpen(true)
      } else {
        if (contentRef.current) {
          contentRef.current.style.height = '0px'
          setIsOpen(false)
        }
      }
    },
    [isOpen]
  )

  const selectValueHandler = (keywords: Keyword[]): void => {
    setSelectedKeywords(keywords)
    selectedKeywordsHandler(keywords)
  }

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion__header}
        onClick={toggleAccordionHandler}
      >
        <h4 className={styles.accordion__title}>Search by {searchBy}</h4>
        <span className={styles.accordion__icon}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </div>
      <div className={accordionContentClasses} ref={contentRef}>
        <div
          className={styles.accordion__content_wrapper}
          ref={contentWrapperRef}
        >
          <div className={styles.accordion__keywords}>
            <fieldset>
              <legend>Keywords</legend>
              <Keywords
                keywords={keywords}
                setSelectedKeywords={selectValueHandler}
                selectedKeywords={selectedKeywords}
                activeName={searchBy}
                type={type}
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerSearchAccordion
