const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = () => {}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
