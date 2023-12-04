import { configDotenv } from 'dotenv'
import express from 'express'
import connectDB from './config/pg.connect'

configDotenv()

const app = express()

void connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(Number(process.env.PORT), () => {
  console.log(`ClassyFi API is listening at http://localhost:${process.env.PORT}`)
}
)
