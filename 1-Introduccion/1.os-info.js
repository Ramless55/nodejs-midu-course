//módulos nativos
const os = require('os')
console.log("Información de sistema operativo")
console.log('-------------------')

console.log('Nombre del sistema operativo: ', os.platform)
console.log('Version del sistema operativo: ', os.release)
console.log('Arquitectura ', os.arch())
console.log('CPUs: ', os.cpus().length)
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)