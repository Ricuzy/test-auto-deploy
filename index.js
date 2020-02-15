var express = require('express')

var app = express()

app.get(`/`, (req, res, next) => {
    res.send(`Hello Deploy auto updated second Version`).end()
})

app.listen(9471, () => { console.log(`app is running at port: 9038`)})