const express = require('express')
const server = express()

server.route('/clientes')
  .get((req, res) => res.send('Lista de Cliente'))
  .post((req, res) => res.send('novo cliente'))
  .put((req, res) => res.send('Alterar cliente'))
  .delete((req, res) => res.send('deletar cliente'))

server.listen(3000, () => console.log('Executando...'))
