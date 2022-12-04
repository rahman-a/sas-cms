import React, { useCallback, useEffect, useState } from 'react'
import styles from './Map.module.scss'
import classnames from 'classnames'
import Map from './Map'
import Offices from './Offices'
import OfficeDetails from './office-Details'
import { Close, LeftArrow, RightArrow } from '../icons'
import {
  Office,
  ListType,
  OfficesCity,
  OfficesCountry,
} from '@customTypes/Offices'
import officesData from './offices.json'
import { useMediaQuery } from 'hooks'
import { types } from 'react-bricks/frontend'

const MapContainer: types.Brick = () => {
  // ٍStates
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [activeTap, setActiveTap] = useState<'map' | 'list'>(() => 'list')
  const [officeDetails, setOfficeDetails] = useState<Office>({} as Office)
  const [title, setTitle] = useState<string>('Choose a territory')
  const [offices, setOffices] = useState<Office[]>([])
  const [listType, setListType] = useState<ListType>('countries')
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [countryData, setCountry] = useState<OfficesCountry>(
    {} as OfficesCountry
  )
  const [cityData, setCity] = useState<OfficesCity>({} as OfficesCity)
  const [cities, setCities] = useState<OfficesCity[]>([])
  const isMobile = useMediaQuery('(max-width: 767.98px)')

  // Classes
  const mapWrapperClasses = classnames(styles.map__wrapper, {
    [styles.map__collapsed]: isCollapsed,
    [styles['map__wrapper-small-map']]: listType === 'details',
  })

  const officesClasses = classnames(styles.map__offices, {
    [styles.map__offices_show]: activeTap === 'list',
  })
  const boxClasses = classnames(styles.map__box, {
    [styles.map__box_show]: activeTap === 'map',
  })

  const boxTitleClasses = classnames(styles.map__box_title, {
    [styles['map__box_title-show']]: listType !== 'countries',
  })

  // Helpers Functions
  const handleListBack = () => {
    if (listType === 'countries') return
    switch (listType) {
      case 'cities':
        setListType('countries')
        break
      case 'offices':
        setListType('cities')
        break
      case 'details':
        offices.length ? setListType('offices') : setListType('cities')
        break
    }
  }

  const titleHandler = useCallback(() => {
    switch (listType) {
      case 'countries':
        setTitle('Choose a territory')
        break
      case 'cities':
        setTitle(countryData.name)
        break
      case 'offices':
        setTitle(cityData.name)
        break
      case 'details':
        offices.length ? setTitle(officeDetails.name!) : setTitle(cityData.name)
        break
    }
  }, [
    listType,
    countryData.name,
    cityData.name,
    officeDetails.name,
    offices.length,
  ])

  const findCityAndCountryOfOffice = (id: string) => {
    officesData.forEach((country) => {
      country.cities.forEach((city) => {
        city.offices.forEach((officeData) => {
          if (officeData._id === id) {
            if (city.offices.length > 1) setOffices(city.offices)
            setOfficeDetails(officeData)
            setCities(country.cities)
            setCity(city)
            setCountry(country)
          }
        })
      })
    })
  }

  useEffect(() => {
    titleHandler()
    listType === 'details' ? setActiveTap('map') : setActiveTap('list')
  }, [listType, titleHandler])

  const mapTapContent = listType !== 'details' && (
    <>
      <button
        onClick={() => setActiveTap('list')}
        className={`${styles.map__tap_toggle} ${
          activeTap === 'list' ? styles.map__tap_active : ''
        }`}
      >
        List
      </button>
      <button
        onClick={() => setActiveTap('map')}
        className={`${styles.map__tap_toggle} ${
          activeTap === 'map' ? styles.map__tap_active : ''
        }`}
      >
        Map
      </button>
    </>
  )

  const mapBoxHeader = listType === 'details' && (
    <h2 className={boxTitleClasses} onClick={handleListBack}>
      <span>
        <LeftArrow />
      </span>
      <span>{title}</span>
    </h2>
  )

  return (
    <div className={styles.map}>
      <div className={styles.map__tap}>{mapTapContent}</div>
      <div className={mapWrapperClasses}>
        <div className={officesClasses}>
          <Offices
            isCollapsed={isCollapsed}
            officeDetails={officeDetails}
            setOfficeDetails={setOfficeDetails}
            offices={offices}
            setOffices={setOffices}
            title={title}
            listType={listType}
            setListType={setListType}
            handleListBack={handleListBack}
            officesData={officesData}
            map={map}
            countryData={countryData}
            setCountry={setCountry}
            cityData={cityData}
            setCity={setCity}
            cities={cities}
            setCities={setCities}
          />
        </div>
        <div className={boxClasses}>
          {mapBoxHeader}
          {listType === 'details' && (
            <span
              className={styles.map__toggle}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <RightArrow /> : <Close />}
            </span>
          )}
          <Map
            smallMap={listType === 'details'}
            offices={officesData}
            setMap={setMap}
            map={map}
            setListType={setListType}
            findCityAndCountryOfOffice={findCityAndCountryOfOffice}
          />
          {listType === 'details' && isMobile && (
            <div className={styles.map__box_details}>
              <OfficeDetails office={officeDetails} listType={listType} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

MapContainer.schema = {
  name: 'map',
  label: 'Map',
  category: 'General',
}

export default MapContainer
