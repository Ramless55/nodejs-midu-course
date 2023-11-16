const fs = require('node:fs') // a partir de node 16 se recomienda utilizar el prefijo node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // su es un enlace simbólico
    stats.size // tamaño en bytes
)