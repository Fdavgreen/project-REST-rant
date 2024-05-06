require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('Home') // Changed from res.send to res.render
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)



// require('dotenv').config()
// const express = require(`express`)
// const app = express()

// app.use(`/places`,require(`./controllers/places`))



// app.get('/', function (req, res) {
//     res.send('Hello world home page')
//   })

//   app.get('*', function (req, res) {
//     res.status(404).send('<h1>404 Page</h1>')
//   })

//   app.listen(process.env.PORT)