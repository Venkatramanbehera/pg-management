const express = require('express')
const cors = require('cors')
const configureDB = require('./config/database')
const router = require('./config/routes')

const app = express()
const PORT = 3088

// var util = require('util');
// var encoder = new util.TextEncoder('utf-8');
// db setup
configureDB()

app.use(cors())

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log('app is running in port', PORT)
})