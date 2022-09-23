import express from 'express'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(express.json())
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)

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

// * ----------Connection with Mongo Atlas ------------

const port = process.env.PORT
const db = process.env.DB || ''

const connectDB = async () => {
    try {
        mongoose.connect(db)

        console.log(`Connection successfully on port: ${port}`)
    } catch (error) {
        console.error('Failed to connect to MongoDB')
    }
}

connectDB()
