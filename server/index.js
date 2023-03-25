const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  res.send('<h1>hello </h1>')
})

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('server is running at http://127.0.0.1:5000')
})