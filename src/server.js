const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes'))

mongoose.connect('mongodb+srv://kingaspx:abner6649@cluster0.kseg8.mongodb.net/url-shortner?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.listen(process.env.PORT || 5000);
console.log("Server runnning on port 5000")