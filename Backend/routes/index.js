// Importing Mongoose DataBase Connection
const main = require("./db");

// Express Server Setup
var cors = require('cors')
const express = require('express')
const app = express()
const port = 8000
app.use(cors())

// EndPoints 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// MiddleWare 

app.use(express.json())


// Avalable Routes
app.use('/api/auth', require('./auth'))
app.use('/api/notes', require('./notes'))


// Listening the port 
app.listen(port, () => {
  console.log(`iNotebook Backend listening on port ${port}`)
})
// Calling the mongoDB database connection
main().catch(err => console.log(err));