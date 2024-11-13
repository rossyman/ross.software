import {useMemo} from 'react'

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer>
      <small>
        &copy; {year}
      </small>
    </footer>
  )
}
