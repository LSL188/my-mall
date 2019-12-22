//dayjs格式化时间
import dayjs from 'dayjs'

export function parseDate2Str(date, format) {
    format = format || 'YYYY--MM-DD HH:mm:ss'
    return dayjs(date).format(format)
}