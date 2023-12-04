import { Client } from 'pg'

const pgClient = new Client({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: 'classy-fi',
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
})

export default async function connectDB (): Promise<void> {
  try {
    await pgClient.connect()
    console.log('Sucessfully connected to the db')
  } catch (error) {
    console.log('Error connecting to the database', error)
  }
}
