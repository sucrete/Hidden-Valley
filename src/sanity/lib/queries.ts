import {defineQuery} from 'next-sanity'

export const RATES_QUERY = defineQuery(`*[_type == "rates"]`)


export const TICKER_QUERY = defineQuery(`*[_type == "ticker"][0] {
  tickerQuestion,
  tickerArray
}`)
