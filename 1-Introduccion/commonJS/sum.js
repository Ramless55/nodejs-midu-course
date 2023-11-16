//CommonJS export module

function sum (a, b) {
    return a + b
}

//variable global para decir que estamos exportando, metiendolo dentro de un objeto estas obligando a que en el resto de ficheros la funcion se llame de la misma manera que en este.
module.exports = {
    sum
}