import React, { useState } from 'react'
import parser from 'html-react-parser'
import styles from './Job-Cards.module.scss'
import { Button } from '@components/ui'
import { Job } from '@customTypes/Job'
import { Oval } from 'react-loader-spinner'

interface JobCardProps {
  job: Job
  setJobDetails: React.Dispatch<React.SetStateAction<{}>>
  isLoading: boolean
  setIsApplicationOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const JobCard = ({
  job,
  setJobDetails,
  isLoading,
  setIsApplicationOpen,
}: JobCardProps) => {
  const [showMore, setShowMore] = useState(false)
  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const applyJob = () => {
    setJobDetails({
      _id: job._id,
      jobId: job.jobId,
      title: job.title,
    })
    setIsApplicationOpen(true)
  }

  const renderJobDescription = () => {
    if (!showMore) {
      const description = job.description.substring(0, 650)
      return parser(description) as string
    }
    return parser(job.description) as string
  }
  return (
    <div className={styles.card}>
      {isLoading && (
        <div className={styles.card__loading}>
          <Oval
            strokeWidth='3'
            width={50}
            height={50}
            color='#1e95e0'
            secondaryColor='#1e95e0'
          />
        </div>
      )}

      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <div className={styles.card__title}>
            <span>
              Job Id: <strong>#{job.jobId}</strong>
            </span>
            <h3>{job.title}</h3>
          </div>
        </div>
        <div className={styles.card__divider}></div>
        <div className={styles.card__body}>
          <div className={styles.card__data}>
            <p>Time Type: </p>
            <p>{job.jobType}</p>
          </div>
          <div className={styles.card__divider}></div>
          <div className={styles.card__data}>
            <p>Location: </p>
            <p>{job.country}</p>
          </div>
          <div className={styles.card__divider}></div>
          <div className={styles.card__skills}>
            <p>Required Skills:</p>
            <ul>
              {job.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card__divider}></div>
          <div className={styles.card__description}>
            <h4>Job Description</h4>
            <p>{renderJobDescription()}</p>
            <Button
              text={
                showMore
                  ? 'hide job description'
                  : 'Read full job description...'
              }
              variant='text'
              onClick={toggleShowMore}
            />
          </div>
          <div className={styles.card__apply}>
            <Button
              text='Apply Now'
              variant='dark-primary'
              style={{ padding: '1rem' }}
              onClick={() => applyJob()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
