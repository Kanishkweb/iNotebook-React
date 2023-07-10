// Importing Mongoose DataBase Connection
const main = require("./db");

// Express Server Setup
const express = require('express')
const app = express()
const port = 7000

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
  console.log(`Example app listening on port ${port}`)
})
// Calling the mongoDB database connection
main().catch(err => console.log(err));