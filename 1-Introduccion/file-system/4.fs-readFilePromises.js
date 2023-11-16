const fs = require('node:fs/promises')

console.log('-----------------------------------')
console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto: ', text)
  })
console.log('-----------------------------------')

console.log('Hacer cosas mientras lee el archivo ...')

console.log('-----------------------------------')
console.log('Leyendo el segundo archivo ...')
fs.readFile('./nombres.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto: ', text)
  })
console.log('-----------------------------------')