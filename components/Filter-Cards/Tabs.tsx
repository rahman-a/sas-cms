import { DownArrow } from '@components/icons'
import { Button } from '@components/ui'
import { KeywordsList, FilterList, Keyword } from '@customTypes/Filter'
import React, { FunctionComponent } from 'react'
import styles from './Filter-Cards.module.scss'
import Keywords from './Keywords'

interface TabsProps {
  list: FilterList
  activeName: string
  activeTab: string
  selectActiveTabHandler(tab: KeywordsList): void
  keywords: Keyword[]
  setSelectedKeywords: React.Dispatch<React.SetStateAction<Keyword[]>>
  selectedKeywords: Keyword[]
}

const Tabs: FunctionComponent<TabsProps> = ({
  list,
  activeName,
  activeTab,
  selectActiveTabHandler,
  keywords,
  setSelectedKeywords,
  selectedKeywords,
}) => {
  return (
    <>
      {list.map((tab) => (
        <div key={tab._id} className={styles.filter__tabs_interface}>
          <Button
            variant='text'
            className={`${styles.filter__tab} ${
              activeTab === tab._id ? styles['filter__tab-active'] : ''
            }`}
            onClick={() => selectActiveTabHandler(tab)}
          >
            {tab.title}
            <DownArrow />
          </Button>
          <div
            className={`${styles.filter__tab_keywords} ${
              activeTab === tab._id
                ? styles['filter__tab_keywords-visible']
                : ''
            }`}
          >
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
        </div>
      ))}
    </>
  )
}

export default Tabs
