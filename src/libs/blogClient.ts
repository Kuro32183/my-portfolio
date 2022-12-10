import { createClient } from 'microcms-js-sdk'

const serviceDomain: string = process.env.NEXT_PUBLIC_SERVICE_ID || ''
const apiKey: string = process.env.NEXT_PUBLIC_API_KEY || ''

const blogClient = createClient({
  serviceDomain,
  apiKey,
})

export default blogClient
