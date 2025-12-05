const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(500).send('OK')
})

app.listen(PORT)
