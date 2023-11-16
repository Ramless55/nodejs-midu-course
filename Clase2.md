# Doble request a pesar de ingresar una vez al endpoint (desde el navegador)

- esto es por que desde el navegador este intenta traer el favicon e interpreta que debe hacer otra llamada para conseguirlo.

# HTTP (Hyper Text Transfer Protocol)

- Protocolo de red mas utilizado en internet.
- El usuario hace una petición (request) en la que de por medio hay información de dicha petición (url, headers, method (GET, POST, PUT, DELETE), body(Datos a transmitir)) luego esto llega al servidor se procesa la información y se envía una respuesta que contiene información (statusCode, headers, body).

# Status Code

- http.cat es una web donde muestra todos los status code explicados (también esta la información en mdn).

  - 100 - 199: respuestas informativas.
  - 200 - 299: Respuestas Satisfactorias.
  - 300 - 399: Redirecciones.
  - 400 - 499: Errores del cliente.
  - 500- 599: Errores del servidor.

# Buffer

Un buffer es una clase global que se utiliza para trabajar con datos binarios, es decir lee el archivo como datos binarios y se guarda en un espacio de la memoria física como espacio reservado. Gracias a enviar el header correcto aclarando el tipo de información de la que sera el buffer, el navegador sera capaz de interpretar como debe construir esos datos binarios.
