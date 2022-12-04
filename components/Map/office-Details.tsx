import React, { FunctionComponent, useState } from 'react'
import { Button } from '@components/ui'
import Image from 'next/image'
import styles from './Map.module.scss'
import { MapStaffCard } from '../Cards'
import { Modal } from '../ui'
import { Office } from '@customTypes/Offices'
import classnames from 'classnames'

interface OfficeDetailsProps {
  office: Office
  listType: string
}

const OfficeDetails: FunctionComponent<OfficeDetailsProps> = ({
  office,
  listType,
}) => {
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false)

  const detailsClasses = classnames(styles.offices__details, {
    [styles.offices__details_show]: listType === 'details',
  })
  const showInGoogleMap = () => {
    window.open(
      'https://maps.google.com?q=' + office.lat + ',' + office.lng,
      '_blank'
    )
  }

  return (
    <>
      <Modal
        isOpen={isStaffModalOpen}
        onClose={() => setIsStaffModalOpen(false)}
      >
        {office.staff && office.staff.length > 0 && (
          <div className={styles.offices__staff}>
            {office.staff.map((staff) => (
              <MapStaffCard key={staff._id} staff={staff} />
            ))}
          </div>
        )}
      </Modal>
      <div className={detailsClasses}>
        {office.image && (
          <figure className={styles.offices__details__image}>
            <Image
              src={office.image}
              alt='office'
              layout='fill'
              objectFit='cover'
            />
          </figure>
        )}
        <div className={styles.offices__details__content}>
          <p className={styles.offices__details__address}>{office.address}</p>
          {office.tel && (
            <p className={styles.offices__details__phone}>
              <span>Tel: </span> {office.tel}
            </p>
          )}
          {office.fax && (
            <p className={styles.offices__details__fax}>
              <span>Fax: </span> {office.fax}
            </p>
          )}
          {office.staff && office.staff.length > 0 && (
            <Button
              variant='primary-outlined'
              className={styles.offices__details__map}
              onClick={() => setIsStaffModalOpen(true)}
              text='Show office staff'
            />
          )}
          <Button
            variant='dark-primary'
            className={styles.offices__details__map}
            onClick={showInGoogleMap}
            text='Show in Google Maps'
          />
        </div>
      </div>
    </>
  )
}

export default OfficeDetails
