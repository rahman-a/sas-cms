import React, {
  FormEvent,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styles from './Search.module.scss'
import { Magnifier } from '@components/icons'
import SearchResult from '../Search-Result/Search-Result'
import { HeaderContext } from '@context/Header-Context'
import classnames from 'classnames'
import { types } from 'react-bricks/frontend'

interface SearchProps {
  isEdit?: boolean
}

const Search: types.Brick<SearchProps> = ({ isEdit, ...rest }) => {
  const { isOpen } = useContext(HeaderContext)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const searchRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const initiateSearchHandler = (e: FormEvent) => {
    e.preventDefault()
    console.log(searchTerm)
  }

  const searchClasses = classnames(styles.search, {
    'playground__brick--edit': isEdit,
  })

  const resultsClasses = classnames(styles.search__results, {
    [styles.search__results_show]: isOpen,
  })

  useEffect(() => {
    const searchContainer = searchRef.current
    let timeout: ReturnType<typeof setTimeout>
    if (searchContainer) {
      timeout = setTimeout(() => {
        searchContainer.style.transform = `translateY(0)`
        searchContainer.style.opacity = '1'
        inputRef.current?.focus()
      }, 0)
    }
    return () => {
      searchContainer && (searchContainer.style.transform = `translateY(100%)`)
      clearTimeout(timeout)
    }
  }, [])
  return (
    <div className={searchClasses} {...rest}>
      <div className={styles.search__wrapper}>
        <form
          className={styles.search__input}
          onSubmit={initiateSearchHandler}
          ref={searchRef}
        >
          <input
            type='text'
            placeholder='Search for industries, products, services and more'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
            disabled={true}
          />
          <button>
            <Magnifier />
          </button>
        </form>
        {/* <div className={styles.search__loading}>
          <RotatingLines width='20' strokeColor='#fff' strokeWidth='5' />
          <span>Loading Result</span>
        </div> */}
        <div className={resultsClasses}>
          <h1 style={{ color: '#fff', margin: '1rem 0' }}>
            Searching isn't available right now
          </h1>
          <h3 style={{ color: '#fff' }}>
            We're working on making this feature available soon
          </h3>
          {/* <SearchResult />
          <SearchResult />
          <SearchResult />
          <button className={styles.search__view}>View All Results</button> */}
        </div>
      </div>
    </div>
  )
}

Search.schema = {
  name: 'header-search',
  label: 'Header Search',
  category: 'Header',
  hideFromAddMenu: true,
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
}

export default Search
