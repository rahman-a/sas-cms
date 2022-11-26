import { createContext, useState, Dispatch } from 'react'

interface TabbedInterfaceContextProps {
  activeTab: string
  setActiveTab: Dispatch<React.SetStateAction<string>>
}

interface TabbedInterfaceContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const TabbedInterfaceContext =
  createContext<TabbedInterfaceContextProps>({} as TabbedInterfaceContextProps)

export default function TabbedInterfaceContextProvider({
  children,
}: TabbedInterfaceContextProviderProps) {
  const [activeTab, setActiveTab] = useState<string>('')

  const passedValues = {
    activeTab,
    setActiveTab,
  }

  return (
    <TabbedInterfaceContext.Provider value={passedValues}>
      {children}
    </TabbedInterfaceContext.Provider>
  )
}
