const express = require('express')
const cors = require('cors');
require('dotenv').config()


const app = express()
const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())


const server = () => {
    app.listen(PORT, () => {
        console.log('listening to port',PORT);
    })
}

server()