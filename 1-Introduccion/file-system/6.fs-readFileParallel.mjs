import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./nombres.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('-----------------------------------')
  console.log('Primer texto: ', text)
  console.log('-----------------------------------')
  console.log('Segundo texto: ', secondText)
  console.log('-----------------------------------')
})
