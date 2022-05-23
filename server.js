const port = 9001
const express = require("express")
const server = express()
const bodyParser = require('body-parser')
const heroController = require("./controller/hero.controller")
const Swal = require('sweetalert2')


server.use(bodyParser.urlencoded({ extended: false }))
server.set('view engine', 'ejs')
server.set("views", "views/pages")


server.use("/hero", heroController)

server.use("/", (request, response) => {
    response.send("MAIN SERVER SUCCESS OK!")
})

server.get('/', function(request, response){
    response.render('pages/index')
})

server.get('/about', function(request, response){
    response.render('pages/about')
})

server.listen(port, () => {
    console.log("server running on " + port)
})