import {RefObject, useEffect} from 'react'

export function useOutsideClick(ref: RefObject<HTMLDivElement>, handler: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(<Node>event.target)) {
        handler()
      }
    }
    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [ref, handler])
}
