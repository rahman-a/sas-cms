import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { types } from 'react-bricks/frontend'
import { ToastContainer, toast } from 'react-toastify'
import { Oval } from 'react-loader-spinner'
import styles from './Job-Search.module.scss'
import { Select } from '@components/ui/Form'
import { Button } from '@components/ui'
import CareerSearchAccordion from '../Job-Search-Accordion/Job-Search-Accordion'
import countries from '@data/countries.json'
import filteredData from '@data/filter-cards.json'
import { Magnifier } from '@components/icons'
import { getAllSkills, getFilteredJobs } from '../api'
import JobCardsContainer from '../Job-Cards/Job-Cards'
import Application from '../Application/Application'

type FilterData = {
  title: string
  jobType: string
  country: string
  skills: string[]
}

const CareerSearch: types.Brick = () => {
  const [skills, setSkills] = useState([])
  const [jobDetails, setJobDetails] = useState({})
  const [resultedJobs, setResultedJobs] = useState([])
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [isAllJobsFetching, setIsAllJobsFetching] = useState<boolean>(false)
  const [filterData, setFilterData] = useState<FilterData>({} as FilterData)
  useQuery('skills', getAllSkills, {
    enabled: skills.length === 0,
    staleTime: Infinity,
    onSuccess: (data) => {
      data?.length && setSkills(data)
    },
  })
  const { data, isLoading, isFetching, refetch } = useQuery(
    'jobs',
    () => getFilteredJobs(filterData),
    {
      enabled: false,
      onSuccess: (data) => {
        data?.length === 0 &&
          notifyError('No jobs found, please change filter keywords')
        data?.length > 0 && setResultedJobs(data)
      },
    }
  )

  const notifyError = (msg) =>
    toast.error(msg, {
      position: 'top-center',
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const searchHandler = () => {
    setIsAllJobsFetching(false)
    if (
      Object.values(filterData).length === 0 ||
      filterData.skills?.length === 0
    ) {
      notifyError('Please select at least one filter')
      return
    }
    refetch()
  }

  const getAllJobs = () => {
    setIsAllJobsFetching(true)
    setFilterData({} as FilterData)
  }

  useEffect(() => {
    if (isAllJobsFetching) {
      refetch()
    }
  }, [isAllJobsFetching])

  useEffect(() => {
    return () => {
      setResultedJobs([])
    }
  }, [])

  return (
    <div className={styles.search}>
      <ToastContainer />
      <Application
        isOpen={isApplicationOpen}
        setIsOpen={setIsApplicationOpen}
        jobDetails={jobDetails}
        setJobDetails={setJobDetails}
      />
      <div className={styles.search__wrapper}>
        <div className={styles.search__col}>
          <Select
            options={countries}
            onSelectHandler={(value) =>
              setFilterData({ ...filterData, country: value.label })
            }
            label='Select a country or region'
          />
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Button
              variant='dark-primary'
              text='View all jobs'
              onClick={getAllJobs}
              disabled={isLoading || isFetching}
            />
            {(isFetching || isLoading) && isAllJobsFetching && (
              <Oval
                width={35}
                height={35}
                color='#1e95e0'
                secondaryColor='#1e95e0'
                strokeWidth={3}
                strokeWidthSecondary={3}
              />
            )}
          </div>
        </div>
        <div className={styles.search__col}>
          <h2 className={styles.search__title}>Find your perfect role</h2>
          <div className={styles.search__input}>
            <input
              type='text'
              id='search'
              placeholder='search by job title'
              onChange={(e) =>
                setFilterData({ ...filterData, title: e.target.value })
              }
            />
            <button>
              <Magnifier />
            </button>
          </div>
          <div className={styles.search__group}>
            <CareerSearchAccordion
              keywords={filteredData[0].keywords}
              searchBy='job type'
              type='radio'
              selectedKeywordsHandler={(keywords) =>
                setFilterData({
                  ...filterData,
                  jobType: keywords[0].keyword.toLocaleLowerCase(),
                })
              }
            />
          </div>
          {skills.length > 0 && (
            <div className={styles.search__group}>
              <CareerSearchAccordion
                keywords={skills}
                searchBy='required skills'
                selectedKeywordsHandler={(keywords) =>
                  setFilterData({
                    ...filterData,
                    skills: keywords.map((skill) => skill.keyword),
                  })
                }
              />
            </div>
          )}
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Button
              variant='dark-primary'
              text='Search'
              disabled={isFetching || isLoading}
              onClick={searchHandler}
            />
            {(isFetching || isLoading) && !isAllJobsFetching && (
              <Oval
                width={35}
                height={35}
                color='#1e95e0'
                secondaryColor='#1e95e0'
                strokeWidth={3}
                strokeWidthSecondary={3}
              />
            )}
          </div>
        </div>
      </div>
      {resultedJobs?.length > 0 && (
        <JobCardsContainer
          jobs={resultedJobs}
          setJobDetails={setJobDetails}
          setIsApplicationOpen={setIsApplicationOpen}
          isLoading={isLoading || isFetching}
        />
      )}
    </div>
  )
}

CareerSearch.schema = {
  name: 'job-search',
  label: 'Job Search',
  category: 'General',
}

export default CareerSearch
