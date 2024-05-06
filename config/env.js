import { config } from 'dotenv'
config()

const db = process.env.DATABASE

export { db }