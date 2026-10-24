import { GithubIcon } from '@/lib/components/github-icon/github-icon'
import { LinkedinIcon } from '@/lib/components/linkedin-icon/linkedin-icon'
import { useMemo } from 'react'

export const Footer = () => {

  const year = useMemo(() => new Date().getFullYear(), [])
  const linkedinUrl = 'https://www.linkedin.com/in/ross-macphee'
  const githubUrl = 'https://github.com/rossyman'

  return (
    <footer>
      <small>&copy; {year}</small>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto' }}>
        <LinkedinIcon size={14} />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <GithubIcon size={14} />
      </a>
    </footer>
  )
}
