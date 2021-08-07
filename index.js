import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from './config'
import studentRoutes from './routes/studentRoutes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json()) /* apa alternative nya karena dia deprecated? */

app.use('/api', studentRoutes.routes)

app.listen(config.port, () => {
  console.log('App is listening from url http://localhost:' + config.port)
})
