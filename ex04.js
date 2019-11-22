const express = require('express')
const server = express()

server.route('/clientes')
.get((req, res)=> res.send('lista de clientes'))
.post((req, res)=> res.send('Novo cliente'))
.put((req, res)=> res.send('alterar cliente'))
.delete((req, res)=> res.send('excluindo cliente'))
server.listen(3000, ()=> console.log('exercutando...'))