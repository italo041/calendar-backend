const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/config')
const cors = require('cors')
 
// create express server
const app = express();

// Database
dbConnection()

// compareSync
app.use(cors())

// Public directory
app.use(express.static('public'))

// Read json body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// Listen request
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})