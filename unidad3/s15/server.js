// // Sin express.js
const http = require('http')

const hostname = '127.0.0.1'

const port = 3004 // 127.0.0.1:3004

const server = http.createServer((request, response) => {
    response.statusCode = 200 // statusCode de cada HTTP // Refiere a que el request hecho está bien
    response.setHeader('Content-Type', 'text/plain')
    response.end(('Shirley Natividad Azurin Sotelo'))
})

server.listen(port, hostname, () => { // Ejecutar en integrated terminal 'node main.js'
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
})