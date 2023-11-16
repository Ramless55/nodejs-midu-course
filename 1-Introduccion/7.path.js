const path = require('node:path')

// barra separadora de carpetas según SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// devuelve el nombre del fichero
const base = path.basename(filePath)
console.log(base)

// quita el la extension del fichero
const fileName = path.basename(filePath, '.txt')
console.log(fileName)

// devuelve la extension del fichero
const extension = path.extname(filePath)
console.log(extension)