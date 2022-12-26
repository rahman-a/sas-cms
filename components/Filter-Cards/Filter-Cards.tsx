import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Filter-Cards.module.scss'
import { Button } from '@components/ui'
import { Magnifier, Close } from '@components/icons'
import { Keyword, KeywordsList, FilterList } from '@customTypes/Filter'
import SelectedKeywords from './Selected-Keywords'
import Keywords from './Keywords'
import Tabs from './Tabs'
import classnames from 'classnames'
import { CardsWrapper, PopularCard } from '@components/Cards'
import sectionsData from '@data/sections.json'

interface FilterCardsProps {
  list: FilterList
  className?: string
  style?: React.CSSProperties
  title?: string
}

const FilterCards: FunctionComponent<FilterCardsProps> = ({
  list,
  className,
  style,
  title,
}) => {
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const [activeTab, setActiveTab] = useState<string>('')
  const [activeName, setActiveName] = useState<string>('')
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([])
  const [showTabs, setShowTabs] = useState<boolean>(false)

  const selectActiveTabHandler = (tab: KeywordsList): void => {
    if (activeTab === tab._id) {
      setActiveTab('')
      setActiveName('')
      setKeywords([])
      return
    }
    setActiveTab(tab._id)
    setKeywords(tab.keywords)
    setActiveName(tab.title)
  }

  const closeTabsWithoutFilter = (): void => {
    setSelectedKeywords([])
    setShowTabs(false)
  }

  const filterClasses = classnames(styles.filter, className)

  const tabsClasses = classnames(styles.filter__tabs, {
    'is-visible': showTabs,
  })

  return (
    <div className={filterClasses} style={style}>
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__header}>
          <h2 className={styles.filter__title}>{title}</h2>
          <div className={styles.filter__search}>
            <div className={styles.filter__search_input}>
              <input type='text' id='search' placeholder='search' />
              <button>
                <Magnifier />
              </button>
            </div>
            <Button
              variant='gray-outlined'
              className={styles.filter__init}
              onClick={() => setShowTabs(true)}
            >
              Filter By
            </Button>
          </div>
        </div>
        <div className={tabsClasses}>
          <div className={styles.filter__tabs_wrapper}>
            <div className={styles.filter__tabs_header}>
              <p>Filter by: </p>
              <Button variant='text' onClick={closeTabsWithoutFilter}>
                <Close />
              </Button>
            </div>
            <Tabs
              list={list}
              activeName={activeName}
              activeTab={activeTab}
              selectActiveTabHandler={selectActiveTabHandler}
              keywords={keywords}
              setSelectedKeywords={setSelectedKeywords}
              selectedKeywords={selectedKeywords}
            />
          </div>
          <div className={styles.filter__keywords}>
            <fieldset>
              <legend>Keywords</legend>
              <Keywords
                keywords={keywords}
                setSelectedKeywords={setSelectedKeywords}
                selectedKeywords={selectedKeywords}
                activeName={activeName}
              />
            </fieldset>
          </div>
          <Button
            variant='dark-white'
            className={styles.filter__tabs_apply}
            onClick={() => setShowTabs(false)}
          >
            Apply Filter
          </Button>
        </div>
        <div className={styles.filter__result}>
          <div className={styles.filter__result_header}>
            <p>100 results</p>
            <SelectedKeywords
              keywords={selectedKeywords}
              setSelectedKeywords={setSelectedKeywords}
            />
          </div>
          <div className={styles.filter__result_cards}>
            {/* <CardsWrapper>
              {sectionsData.sections[0].cards.map((section) => (
                <PopularCard
                  key={section._id}
                  card={section}
                  className={styles.filter__result_card}
                />
              ))}
            </CardsWrapper> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterCards
