var express = require('express')

var app = express()

app.get(`/`, (req, res, next) => {
    res.send(`Hello Deploy auto`).end()
})

app.listen(9038, () => { console.log(`app is running at port: 9038`)})