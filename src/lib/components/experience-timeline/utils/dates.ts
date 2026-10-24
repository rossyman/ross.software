import { addMonths, format, formatDuration, intervalToDuration, parseISO, startOfMonth } from 'date-fns'

export const formatMonth = (month: string) => format(parseISO(month), 'MMM yyyy')

export const tenure = (start: string, end?: string | null) =>
  formatDuration(
    intervalToDuration({
      start: parseISO(start),
      end: addMonths(startOfMonth(end ? parseISO(end) : new Date()), 1)
    }),
    { format: ['years', 'months'] }
  )
