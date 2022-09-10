const express = require('express')

const morgan = require('morgan')

const api = require('./routes/api')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())

app.use('/api', api)

app.all('*', (req, res) => {
    res.status(404).json({ error: 'not found!' })
})

app.listen(5000, () => {
    console.log('Listening on port 5000...')
})