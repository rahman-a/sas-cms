import { createContext, useState, Dispatch } from 'react'

interface HeaderContextProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  isDropdownOpen: boolean
  setIsDropdownOpen: Dispatch<React.SetStateAction<boolean>>
  setSubNavType: Dispatch<React.SetStateAction<string>>
  setSubMenuId: Dispatch<React.SetStateAction<string>>
  setSubMenuL3Id: Dispatch<React.SetStateAction<string>>
  subNavType: string
  subMenuId: string
  subMenuL3Id: string
  subMenuLevel: number
  setSubMenuLevel: Dispatch<React.SetStateAction<number>>
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
  const [subMenuId, setSubMenuId] = useState<string>('')
  const [subMenuL3Id, setSubMenuL3Id] = useState<string>('')
  const [subMenuLevel, setSubMenuLevel] = useState<number>(1)

  const passedValues = {
    setIsOpen,
    isOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    setSubNavType,
    subNavType,
    setSubMenuId,
    subMenuId,
    setSubMenuL3Id,
    subMenuL3Id,
    subMenuLevel,
    setSubMenuLevel,
  }

  return (
    <HeaderContext.Provider value={passedValues}>
      {children}
    </HeaderContext.Provider>
  )
}
