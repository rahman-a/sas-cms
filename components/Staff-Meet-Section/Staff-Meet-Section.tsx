import React from 'react'
import styles from './Staff-Meet-Section.module.scss'
import { types, Repeater } from 'react-bricks/frontend'

interface StaffMeetSectionProps {}

const StaffMeetSection: types.Brick<StaffMeetSectionProps> = ({ ...rest }) => {
  return (
    <section className={styles.meet} {...rest}>
      <div className={styles.meet__row}>
        <div className={styles.meet__col}>
          <div className={styles.meet__float}>
            <span className={styles['meet__float--1']}></span>
            <span className={styles['meet__float--2']}></span>
            <span className={styles['meet__float--3']}></span>
            <span className={styles['meet__float--4']}></span>
          </div>
          <Repeater
            propName='details-section-repeater'
            itemProps={{
              className: styles.meet__details,
            }}
          />
        </div>
        <Repeater
          propName='meet-card-repeater'
          renderItemWrapper={(item) => (
            <div className={styles.meet__col}>{item}</div>
          )}
        />
      </div>
    </section>
  )
}

StaffMeetSection.schema = {
  name: 'staff-meet-section',
  label: 'Staff Meet Section',
  category: 'General',
  repeaterItems: [
    {
      name: 'details-section-repeater',
      itemLabel: 'Details Section',
      itemType: 'details-section',
    },
    {
      name: 'meet-card-repeater',
      itemLabel: 'Meet Card',
      itemType: 'meet card',
    },
  ],
}

export default StaffMeetSection
