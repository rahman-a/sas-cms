import React, { useEffect, useRef, useState } from 'react'
import styles from './Job-Search.module.scss'
import { Select } from '@components/ui/Form'
import { Button } from '@components/ui'
import CareerSearchAccordion from '../Job-Search-Accordion/Job-Search-Accordion'
import { Keyword } from '@customTypes/Filter'
import countries from '@data/countries.json'
import filteredData from '@data/filter-cards.json'
import { Magnifier } from '@components/icons'
import { types } from 'react-bricks/frontend'

const accordion = [
  { _id: 1, searchBy: 'grade', keywords: filteredData[0].keywords },
  { _id: 2, searchBy: 'line of service', keywords: filteredData[0].keywords },
  { _id: 3, searchBy: 'industry/sector', keywords: filteredData[0].keywords },
  { _id: 4, searchBy: 'specialism', keywords: filteredData[0].keywords },
]

type FilterData = {
  role: string
  country: string
  keywords: Keyword[]
}

const CareerSearch: types.Brick = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [filterData, setFilterData] = useState<FilterData>({
    role: '',
    country: '',
    keywords: [],
  })

  const searchHandler = () => {
    let data = { ...filterData }
    if (inputRef.current?.value) {
      data = { ...data, role: inputRef.current?.value }
    }
    console.log(data)
  }

  useEffect(() => {
    console.log(filterData)
  }, [filterData])
  return (
    <div className={styles.search}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__col}>
          <Select
            options={countries}
            onSelectHandler={(value) =>
              setFilterData({ ...filterData, country: value.value })
            }
            label='Select a country or region'
            required
          />
          <Button variant='dark-primary' text='View all jobs' />
        </div>
        <div className={styles.search__col}>
          <h2 className={styles.search__title}>Find your perfect role</h2>
          <div className={styles.search__input}>
            <input
              type='text'
              id='search'
              placeholder='search by job title'
              ref={inputRef}
            />
            <button>
              <Magnifier />
            </button>
          </div>
          {accordion.map((item) => (
            <div key={item._id} className={styles.search__group}>
              <CareerSearchAccordion
                keywords={item.keywords}
                searchBy={item.searchBy}
                selectedKeywordsHandler={(keywords) =>
                  setFilterData({
                    ...filterData,
                    keywords: [...filterData.keywords, ...keywords],
                  })
                }
              />
            </div>
          ))}
          <Button
            variant='dark-primary'
            text='Search'
            onClick={searchHandler}
          />
        </div>
      </div>
    </div>
  )
}

CareerSearch.schema = {
  name: 'job-search',
  label: 'Job Search',
  category: 'General',
}

export default CareerSearch
