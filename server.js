const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection')

const app = express()

// set PORT
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'))

// mongodb connection
connectDB()

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs")

// load public files
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))
app.use('/img', express.static(path.resolve(__dirname, 'public/img')))
app.use('/js', express.static(path.resolve(__dirname, 'public/js')))


// laod routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})