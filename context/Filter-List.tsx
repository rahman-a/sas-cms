import { createContext, useState, Dispatch } from 'react'

interface FilterListContextProps {
  activeList: string
  setActiveList: Dispatch<React.SetStateAction<string>>
}

interface FilterListContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const FilterListContext = createContext<FilterListContextProps>(
  {} as FilterListContextProps
)

export default function FilterListContextProvider({
  children,
}: FilterListContextProviderProps) {
  const [activeList, setActiveList] = useState<string>('')

  const passedValues = {
    activeList,
    setActiveList,
  }

  return (
    <FilterListContext.Provider value={passedValues}>
      {children}
    </FilterListContext.Provider>
  )
}
