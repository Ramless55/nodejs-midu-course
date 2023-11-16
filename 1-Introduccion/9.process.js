// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit(0) //ok
// process.exit(1) //error

// controlar eventos del proceso
process.on('exit', () => {
  //limpiar recursos
})

// current working directory
console.log(process.cwd())