const express = require('express')
const cors = require('cors')

// environment variables
const PORT = process.env.PORT || 5000

// routes
const { main } = require('./routes')

// middlewares
const { error, error404 } = require('./middlewares')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(main)

// error handlers
app.use(error404)
app.use(error)

app.listen(PORT, () => console.log(`url: http://localhost:${PORT}`))
