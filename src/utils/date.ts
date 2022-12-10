import dayjs from 'dayjs'
import 'dayjs/locale/ja'

/**
 * APIから返されるISO8601(UST)をJSTにしつつ表示形式を整えて表示
 *
 * @see {@link https://day.js.org/docs/en/display/format }
 *
 * @param  {string} iso8601 - dayjs()の引数
 * @param  {string} format - dayjs().format()の引数
 * @returns string
 */
export const date = (iso8601: string | undefined, format: string): string => {
  dayjs.locale('ja')
  return dayjs(iso8601)?.format(format)
}

/**
 * yyyymmdd -> yyyy-mm-dd というように年月日を区切り文字で整形
 *
 * @param  {string} yyyyddmm
 * @param  {string} delimiter - '/' や '-'
 * @returns string
 */
export const toDateWithDelimiter = (
  yyyyddmm: string,
  delimiter: string
): string => {
  return (
    yyyyddmm.substring(0, 4) +
    delimiter +
    yyyyddmm.substring(4, 6) +
    delimiter +
    yyyyddmm.substring(6)
  )
}
