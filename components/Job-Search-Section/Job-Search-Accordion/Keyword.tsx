import React, { FunctionComponent, useEffect } from 'react'
import styles from './Job-Search-Accordion.module.scss'
import { Keyword } from '@customTypes/Filter'

interface KeywordProps {
  keywords: Keyword[]
  setSelectedKeywords: (keywords: Keyword[]) => void
  selectedKeywords: Keyword[]
  activeName: string
  type?: string
}

const Keywords: FunctionComponent<KeywordProps> = ({
  keywords,
  setSelectedKeywords,
  selectedKeywords,
  activeName,
  type,
}) => {
  const activeValueHandler = (keyword: Keyword): void => {
    const isFound = selectedKeywords.find((item) => item._id === keyword._id)
    if (isFound) {
      const filtered = selectedKeywords.filter(
        (item) => item._id !== keyword._id
      )
      setSelectedKeywords(filtered)
      return
    }
    if (selectedKeywords.length === 0) {
      setSelectedKeywords([keyword])
      return
    }
    if (type === 'radio') {
      setSelectedKeywords([keyword])
      return
    }
    setSelectedKeywords([...selectedKeywords, keyword])
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
          className={styles.accordion__keyword}
        >
          <input
            type={type || 'checkbox'}
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
