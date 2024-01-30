const connectToMongo = require('./db');
const express = require('express');
const User = require('./models/User');
const app = express()

connectToMongo();
const port = 5000

app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes')) 

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})