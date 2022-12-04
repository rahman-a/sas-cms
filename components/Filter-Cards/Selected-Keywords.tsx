import React, { FunctionComponent } from 'react'
import styles from './Filter-Cards.module.scss'
import { Keyword } from '@customTypes/Filter'
import { Button } from '@components/ui'
import { Close } from '@components/icons'

interface SelectedKeywordsProps {
  keywords: Keyword[]
  setSelectedKeywords: React.Dispatch<React.SetStateAction<Keyword[]>>
}

const SelectedKeywords: FunctionComponent<SelectedKeywordsProps> = ({
  keywords,
  setSelectedKeywords,
}) => {
  const removeFilterKeyword = (id: string): void => {
    const filtered = keywords.filter((item) => item._id !== id)
    setSelectedKeywords(filtered)
  }

  return (
    <>
      {keywords.length > 0 && (
        <>
          <div className={styles.filter__result_keywords}>
            {keywords.map((keyword) => (
              <Button
                key={keyword._id}
                variant='gray-outlined'
                rounded
                onClick={() => removeFilterKeyword(keyword._id)}
              >
                <Close />
                {keyword.keyword}
              </Button>
            ))}
          </div>
          <Button variant='text' onClick={() => setSelectedKeywords([])}>
            <Close />
            Reset filter
          </Button>
        </>
      )}
    </>
  )
}

export default SelectedKeywords
