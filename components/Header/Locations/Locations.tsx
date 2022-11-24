import { SyntheticEvent, useContext, useRef } from 'react'
import classnames from 'classnames'
import styles from './Locations.module.scss'
import { DownArrow, LocationSymbol } from '../../icons'
import { HeaderContext } from '@context/Header-Context'
import { territoriesListItem } from '@customTypes/Territories-Menu'
import { Repeater, types } from 'react-bricks/frontend'

interface LocationsProps {
  list: territoriesListItem[]
  isMobile?: boolean
  isEdit?: boolean
}

const Locations: types.Brick<LocationsProps> = ({
  list,
  isMobile,
  isEdit,
  ...rest
}) => {
  const { isOpen, isDropdownOpen, setIsDropdownOpen } =
    useContext(HeaderContext)
  const locationRef = useRef<HTMLDivElement>(null)
  const toggleDropdownMenuHandler = (e: SyntheticEvent): void => {
    e.stopPropagation()
    !isEdit && setIsDropdownOpen(!isDropdownOpen)
  }
  const locationClasses = classnames(styles.locations, {
    [styles.locations__white]: isOpen,
    [styles['locations__dropdown']]: isDropdownOpen,
    [styles['locations__is-mobile']]: isMobile,
    'playground__brick--edit': isEdit,
  })
  const territoriesClasses = classnames(styles.locations__territories, {
    'is-visible': isDropdownOpen,
  })

  const closeDropdownHandler = () => {
    if (
      locationRef.current &&
      locationRef.current.classList.contains(styles['locations__dropdown'])
    ) {
      setIsDropdownOpen(false)
    }
  }

  return (
    <div {...rest}>
      <div className={locationClasses} ref={locationRef}>
        <div onClick={toggleDropdownMenuHandler}>
          <span>
            <LocationSymbol />
          </span>
          <span>Global</span>
          <span>
            <DownArrow />
          </span>
        </div>
        <div
          className={territoriesClasses}
          onClick={(e) => e.stopPropagation()}
        >
          <Repeater
            propName='territories-list'
            itemProps={{
              closeDropdownHandler,
            }}
          />
        </div>
      </div>
    </div>
  )
}

Locations.schema = {
  name: 'locations-dropdown',
  label: 'Locations Dropdown',
  hideFromAddMenu: true,
  category: 'Header',
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'territories-list',
      itemLabel: 'Territories List',
      itemType: 'ui-dropdown-menu',
      max: 2,
    },
  ],
}

export default Locations
