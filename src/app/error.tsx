'use client'

import Link from 'next/link'
import { ErrorMessage } from '@/lib/components/error-message/error-message'

type ErrorProps = {
  error: unknown
  retry: () => void
}

export default function ErrorPage({ retry }: ErrorProps) {
  return (
    <ErrorMessage code="500" title="Something went wrong.">
      <button type="button" onClick={retry}>
        Try again
      </button>
      <Link href="/">Back home</Link>
    </ErrorMessage>
  )
}
