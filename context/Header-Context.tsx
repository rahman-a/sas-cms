import { createContext, useState, Dispatch } from 'react'
import { Menu } from '@customTypes/Menu'

interface HeaderContextProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  isDropdownOpen: boolean
  setIsDropdownOpen: Dispatch<React.SetStateAction<boolean>>
  setSubNavType: Dispatch<React.SetStateAction<string>>
  subNavType: string
  subMenuLevel: number
  setSubMenuLevel: Dispatch<React.SetStateAction<number>>
  menu: Menu
  setMenu: Dispatch<React.SetStateAction<Menu>>
}

interface HeaderContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const HeaderContext = createContext<HeaderContextProps>(
  {} as HeaderContextProps
)

export default function HeaderContextProvider({
  children,
}: HeaderContextProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [subNavType, setSubNavType] = useState<string>('')
  const [menu, setMenu] = useState<Menu>({} as Menu)
  const [subMenuLevel, setSubMenuLevel] = useState<number>(1)

  const passedValues = {
    setIsOpen,
    isOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    setSubNavType,
    subNavType,
    subMenuLevel,
    setSubMenuLevel,
    menu,
    setMenu,
  }

  return (
    <HeaderContext.Provider value={passedValues}>
      {children}
    </HeaderContext.Provider>
  )
}
