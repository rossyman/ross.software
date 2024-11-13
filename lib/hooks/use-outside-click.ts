import {type RefObject, useEffect} from 'react'

export function useOutsideClick(ref: RefObject<HTMLDivElement | null>, handler: () => void) {
  useEffect(
    () => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler()
        }
      }
      window.addEventListener('mousedown', handleClick)
      return () => window.removeEventListener('mousedown', handleClick)
    },
    [ref, handler]
  )
}
