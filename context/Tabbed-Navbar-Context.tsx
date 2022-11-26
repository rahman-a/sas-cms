import { createContext, useState, Dispatch } from 'react'

interface TabbedNavbarContextProps {
  activeNav: string
  setActiveNav: Dispatch<React.SetStateAction<string>>
}

interface TabbedNavbarContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const TabbedNavbarContext = createContext<TabbedNavbarContextProps>(
  {} as TabbedNavbarContextProps
)

export default function TabbedNavbarContextProvider({
  children,
}: TabbedNavbarContextProviderProps) {
  const [activeNav, setActiveNav] = useState<string>('')

  const passedValues = {
    activeNav,
    setActiveNav,
  }

  return (
    <TabbedNavbarContext.Provider value={passedValues}>
      {children}
    </TabbedNavbarContext.Provider>
  )
}
