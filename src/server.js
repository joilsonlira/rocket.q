const express = require('express')
const server = express()
const route = require('./route')
const path = require('path')
const port = process.env.PORT || 3000

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.static("public"))

// Midiware entre a rota e seu destino
server.use(express.urlencoded({extended:true}))

server.use(route)
server.listen(port, () => console.log("RODANDO"))

