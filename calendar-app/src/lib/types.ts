export type CalendarView = 'month' | 'week' | 'day'

export type CalendarEvent = {
  id: string
  title: string
  date: string
  time?: string
  endTime?: string
  description?: string
  location?: string
  color?: 'blue' | 'green' | 'amber' | 'purple'
}

export type CalendarDay = {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  events: CalendarEvent[]
}