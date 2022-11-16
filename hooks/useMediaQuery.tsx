import { useEffect, useState } from 'react'

const useMediaQuery = (breakpoint: string) => {
  const [isMatches, setIsMatches] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoint)
    setIsMatches(mediaQuery.matches)
  }, [breakpoint])
  return isMatches
}

export default useMediaQuery
