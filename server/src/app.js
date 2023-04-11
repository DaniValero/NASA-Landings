const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
require('./startup/db')()




const landings = require('./routes/landings')
const neas = require('./routes/neas')
const users = require('./routes/users')


app.use('/api/users', users)

app.use('/api/astronomy/landings', landings)

app.use('/api/astronomy/neas', neas)


app.listen(3000, () => console.log("Reptiliano afroamericano"))