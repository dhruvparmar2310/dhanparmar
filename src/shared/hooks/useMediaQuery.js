import { useState, useEffect } from 'react'

const useMediaQuery = (mediaQuery) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(mediaQuery)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, mediaQuery])

  return matches
}

export default useMediaQuery
