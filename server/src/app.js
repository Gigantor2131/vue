console.log('hello')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())
var emails =[]
app.post('/register', (req, res) => {
    emails.push((req.body.email))
    res.send({
        message: `Hello ${req.body.email}! test`
    })
})
app.get('/status', (req,res) =>{
    res.send(emails)
})

app.listen(process.env.port || 8081)
