import { useEffect } from 'react'

export function useScrollLock(locked) {
  useEffect(() => {
    document.body.classList.toggle('menu-open', locked)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [locked])
}
