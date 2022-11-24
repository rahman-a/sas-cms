import React, { useEffect, useState } from 'react'
import styles from './Dropdown-Menu.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import Link from 'next/link'

type DropdownListItems = {
  isGlobal: boolean
  text: string
}

type listItems = {
  closeDropdownHandler?: () => void
}

const DropdownMenu: types.Brick<listItems> = ({
  closeDropdownHandler,
  ...rest
}) => {
  const [noResult, setNoResult] = useState<boolean>(false)
  const [searchItem, setSearchItem] = useState<string>('')
  const [signals, setSignals] = useState<boolean[]>([])
  let signalsArray: boolean[] = []
  const closeDropdown = () => closeDropdownHandler && closeDropdownHandler()
  const collectVisibilitySignals = (signal: boolean): void => {
    if (!searchItem) {
      setSignals([])
      signalsArray = []
      return
    }
    // signals state by itself can't collect true signals for unknown reason, that's why
    // i collect them in native array and then set state
    signalsArray.push(signal)
    setSignals(signalsArray)
  }

  const visibilitySignalHandler = () => {
    const isResult =
      signals.length > 0 ? signals.every((signal) => signal === false) : false
    setNoResult(isResult)
  }

  useEffect(() => {
    visibilitySignalHandler()
  }, [signals])

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  return (
    <div className={styles.dropdown} {...rest}>
      <div className={styles.dropdown__input}>
        <input
          type='text'
          placeholder='Find a country or region'
          onChange={({ target: { value } }) => setSearchItem(value)}
        />
      </div>
      <ul className={styles.dropdown__list}>
        {noResult && (
          <li className={styles['dropdown__no-result']}>No Match Found</li>
        )}
        <Repeater
          propName='ui-dropdown-list-item-wrapper'
          itemProps={{
            searchItem,
            collectVisibilitySignals,
          }}
        />
      </ul>
    </div>
  )
}

DropdownMenu.schema = {
  name: 'ui-dropdown-menu',
  label: 'Dropdown Menu',
  category: 'UI',
  getDefaultProps: () => ({
    'ui-dropdown-list-item-wrapper': [
      {
        isGlobal: true,
        text: 'Global',
      },
      {
        isGlobal: false,
        text: 'Egypt',
      },
      {
        isGlobal: false,
        text: 'United Arab Emirates',
      },
      {
        isGlobal: false,
        text: 'Saudi Arabia',
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'itemsList',
      label: 'List Items',
      type: types.SideEditPropType.Custom,
    },
  ],
  repeaterItems: [
    {
      name: 'ui-dropdown-list-item-wrapper',
      itemLabel: 'Dropdown List Item',
      itemType: 'ui-dropdown-list-item',
      max: 15,
    },
  ],
}

export default DropdownMenu
