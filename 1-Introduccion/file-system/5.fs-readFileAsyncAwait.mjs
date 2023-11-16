import fs from 'node:fs/promises'

console.log('-----------------------------------')
console.log('Leyendo el primer archivo ...')
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('Primer texto: ', text)
console.log('-----------------------------------')

console.log('Hacer cosas mientras lee el archivo ...')

console.log('-----------------------------------')
console.log('Leyendo el segundo archivo ...')
const secondText = await fs.readFile('./nombres.txt', 'utf-8')
console.log('Segundo texto: ', secondText)
console.log('-----------------------------------')