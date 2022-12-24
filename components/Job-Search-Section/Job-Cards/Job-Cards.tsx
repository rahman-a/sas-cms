import React from 'react'
import styles from './Job-Cards.module.scss'
import JobCard from './Job-Card'
import { Job } from '@customTypes/Job'

interface JobsCardsProps {
  jobs: Job[]
  setJobDetails: React.Dispatch<React.SetStateAction<{}>>
  isLoading: boolean
  setIsApplicationOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const JobCards = ({
  jobs,
  setJobDetails,
  isLoading,
  setIsApplicationOpen,
}: JobsCardsProps) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            setJobDetails={setJobDetails}
            setIsApplicationOpen={setIsApplicationOpen}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  )
}

export default JobCards
