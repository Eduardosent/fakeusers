import { config } from 'dotenv'
config()

const db = process.env.db

export { db }