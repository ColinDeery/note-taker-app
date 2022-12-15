const express = require('express')
const app = express()
const PORT = 3001
const api = require('./routes/api')
const html = require('./routes/html')

app.get('/', (req, res) => {
    res.send('')
})

app.use(express.json())
app.use(express.static('public'))
app.use('/api', api)
app.use('/', html)
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})