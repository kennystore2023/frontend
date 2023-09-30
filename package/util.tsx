import { format, parseISO } from 'date-fns'

export const formatDate = (date: string, pattern: string) => {
  return date ? format(parseISO(date), pattern) : ''
}
