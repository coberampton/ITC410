const express = require('express')
const bodyParser = require('body-parser');
const { text } = require('express');

const app = express()

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path)
    req.greet = 'World'
    next()
})

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello ' + req.greet)
})

app.get('/foo/:myParam', function(req, res) {
    res.send('Path parameter: ' + req.params.myParam);
});

app.post('/', (req, res) => {
    const content = req.get('content-type')
    if (content === "text/plain" || content === "application/json") {
        console.log('Body: ', req.body)
        res.send('Success!')
    }
    else {
        res.status(400).send()
    }
})

app.listen(3000)