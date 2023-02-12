import moment, { Moment } from "moment"

const isInCurrentYear = (date: Moment) => moment().year() === date.year()
const isInCurrentWeek = (date: Moment) =>
  date.isBetween(
    moment().startOf('week'),
    moment().endOf('week'),
    'days',
    '[]'
  )

export const getDatesRange = (startDate: Moment, endDate: Moment, acc: Moment[] = []): Moment[] => {
  if (endDate.isSameOrBefore(startDate, 'day')) return acc
  return getDatesRange(startDate, endDate.clone().subtract(1, 'day'), [endDate, ...acc])
}


export const formatDate = (date: string) => {
  let dateObj = moment(date)
  if (isInCurrentWeek(dateObj)) return dateObj.format('dddd')
  else if (isInCurrentYear(dateObj)) return dateObj.format('D MMMM')
  else return dateObj.format('D MMMM, YYYY')
}