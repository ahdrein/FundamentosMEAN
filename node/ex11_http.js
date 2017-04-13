const http = require('http')
const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-type": "text/html"})
  res.end('<h1>como escrever è á ã express?</h1>')
})

const porta = 3456
server.listen(porta, function() {
  console.log(`Escutando porta ${porta}`)
})
