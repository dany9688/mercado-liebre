const express = require('express')
const app = express()
const path = require('path')

app.listen(3000, () => console.log('Servidor corriendo'))

app.get('/', function (req, res){

    let file = path.resolve('vistas/index.html')
    res.sendFile(file)
})

app.get('/register.html', function (req, res){

    let file = path.resolve('vistas/register.html')
    res.sendFile(file)
})

app.get('/login.html', function (req, res){

    let file = path.resolve('vistas/login.html')
    res.sendFile(file)
})
app.get('/index.css', function (req, res){

    let file = path.resolve('styles/index.css')
   res.sendFile(file)
})

app.get('*', function (req,res){

    if (req.url.includes('.')) {
        let file = path.resolve('public/' + req.url)
       return res.sendFile(file)
    }
    })
