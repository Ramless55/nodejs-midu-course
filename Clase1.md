# nodejs-midu-course

# Explicaciones hechas por mi para entender mas a profundidad la funcionalidad de NodeJS.

- NodeJS es un entorno de ejecución para JavaScript con una arquitectura orientada a eventos.
- El motor que utiliza es W8, al igual que chrome.
- Es un bucle en el que se van manejando las solicitudes que van llegando, esto ocurre en un solo thread, es decir es mono hilo, libera procesos para hacer tareas en asíncrono para simular que puede hacer muchas cosas al mismo tiempo a pesar de que no sea asi en realidad.

# globalThis

Objeto global de javascript común tanto para Entornos de NodeJS como en Navegador
El GlobalThis es una variable global en toda nuestra aplicación.
Console, fetch, promise y la mayoría de variables de este estilo que parecen naturalmente integradas al utilizar nodeJs son variables de global/globalThis (esto es por que dependiendo de el entorno globalThis apuntara a global o a window)

# Patron de diseño: modulo.

Es el patron de diseño que consiste en modularizar el código en diferentes ficheros para asi tener una mayor legibilidad del mismo.

# Extensiones:

- .js --> por defecto utiliza CommonJS
- .mjs --> para utilizar ES Modules
- .cjs --> para utilizar CommonJS de forma forzada.

# File System

Hay 2 métodos de file system para lectura de archivos

```js
fs.readFileSync
```

el cual es la manera sincrona de lectura de archivos, es decir bloqueara nuestra aplicación mientras lee dicho archivo, y

```js
fs.readFile
```

el cual lee los archivos de forma asíncrona sin bloquear la aplicación, readFile recibe un callback a diferencia de readFileSync que no lo recibe y debemos guardar el texto en una variable.

# File System + Promises

Si en lugar de importar el modulo node:fs importamos `node:fs/promises` podemos utilizar file system de forma asíncrona con promesas en lugar de callbacks.

# Transformar callbacks a promesas

Con

```js
const { promisify } = require('node:util')
```

podremos transformar métodos que utilizan callbacks asíncronos en promesas, por ejemplo si `fs/promises` no existiese y tuviésemos que utilizar readFile de fs, requeriríamos node:fs y luego haríamos

```js
const readFilePromise = promisify(fs.readFile)
```

para poder usarlo para leer archivos con promesas en lugar de callbacks.

# Async/Await

En el caso de async await ESModules acepta por defecto que await sea utilizado fuera de una función con async o lo que se le llamaría en el cuerpo del archivo y esto mismo se llama top level await, en cambio en Common JS esto no se puede hacer y una solución seria utilizar un IIFE (Immediately Invoked Function Expression) agregando el async en la misma.

# Path

El path se utiliza para construir nuevas rutas de archivos, saber si un archivo tiene una extension y recuperarla y crear rutas absolutas.

# Process

Da información que esta relacionada con el proceso actual.

# ^ (caret)

- El caret es un símbolo que esta al lado de las versiones de las dependencias que instalamos, e indica que esta sera actualizada mientras la actualización no sea un salto de version de por ejemplo 1.0.0 a 2.0.0 es decir que no cambie el primer numero de version, o sea actualizara los fix y feature de la version en la que se descargo como de 1.0.0 a 1.0.1.

- Una buena practica podría ser quitar el caret y descargarnos una extension llamado version lens que nos informe de las actualizaciones disponibles para nuestras dependencias. A esto se la llama SEMANTIC VERSIONING.

# SEMANTIC VERSIONING

- X.Y.Z => SEMANTIC VERSIONING
- X es la MAJOR y es cuando se rompe la compatibilidad hacia atrás.
- Y es la MINOR y es cuando añaden nuevas funcionalidades.
- Z es la PATCH y es cuando se arreglan bugs.

# standard

Esta es una dependencia que ayudara a que nuestro estilo de código sea igual en todos nuestros archivos. para configurarla hay que agregar en el package.json:

```json
"eslintConfig": {
"extends": "standard"
}
```

# puerto 0

Colocar que el servidor se levante en el puerto 0 va a hacer que se levante en el primer puerto que encuentro disponible. Para saber cual es el puerto podemos utilizar

```js
server.address().port
```
