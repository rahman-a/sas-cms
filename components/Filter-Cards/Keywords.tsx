import React, { FunctionComponent } from 'react'
import styles from './Filter-Cards.module.scss'
import { Keyword } from '@customTypes/Filter'

interface KeywordProps {
  keywords: Keyword[]
  setSelectedKeywords: React.Dispatch<React.SetStateAction<Keyword[]>>
  selectedKeywords: Keyword[]
  activeName: string
}

const Keywords: FunctionComponent<KeywordProps> = ({
  keywords,
  setSelectedKeywords,
  selectedKeywords,
  activeName,
}) => {
  const activeValueHandler = (keyword: Keyword): void => {
    const newKeywords = [...selectedKeywords]
    if (selectedKeywords.length === 0) {
      setSelectedKeywords([keyword])
      return
    }
    const isFound = selectedKeywords.find((item) => item._id === keyword._id)
    if (isFound) {
      const filtered = selectedKeywords.filter(
        (item) => item._id !== keyword._id
      )
      setSelectedKeywords(filtered)
      return
    }

    newKeywords.push(keyword)
    setSelectedKeywords(newKeywords)
  }

  const isElementChecked = (id: string): boolean => {
    const isFound = selectedKeywords.find((item) => item._id === id)
    return !!isFound
  }

  return (
    <>
      {keywords.map((keyword) => (
        <label
          key={keyword._id}
          htmlFor={activeName + keyword._id}
          className={styles.filter__keyword}
        >
          <input
            type='checkbox'
            id={activeName + keyword._id}
            name={activeName}
            onChange={() => activeValueHandler(keyword)}
            checked={isElementChecked(keyword._id)}
          />
          <span>{keyword.keyword}</span>
        </label>
      ))}
    </>
  )
}

export default Keywords
