const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('Contacto')
  } else if (req.url === '/image') {
    fs.readFile('./omen.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Internal server error')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 200 // OK
    res.end('404')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
