import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { db, port } from './utils/constants'
import { router } from './routes/index'
import { fillUsers } from './utils/mockups/mockupsCharge'

//* ----------------Server configuration -----------------

const app = express()
app.use(express.json())
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    )
    next()
})

app.use('/', router)

// * ----------Connection with Mongo Atlas ------------

const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('Connection successfully')
    } catch (error) {
        console.error('Failed to connect to MongoDB')
    }
}

connectDB()

// * ----------Connection Local and mockups charge ------------

app.listen(port, async () => {
    await fillUsers()
    console.log(`Server listening on port: ${port}`)
})
