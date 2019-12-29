const express = require('express')
require('./db/mongoose')

const cors = require('cors')
const eventRouter = require('./routers/event')

const bodyParser = require("body-parser");
const multer = require('multer');
const app = express()
app.use(cors())

const port = process.env.PORT || 3000

app.use(express.json())
app.use(eventRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
