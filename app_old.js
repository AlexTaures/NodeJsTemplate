const http = require('http');

http.createServer((req, res) => {

    res.writeHead(404) //Esto es para modificar parametros de la respuesta
    res.write('404 | Page not found'); //De esta manera se genera una respuesta
    res.end(); //Necesario para terminar la respuesta
})
.listen(8080);

console.log('escuchando en el puerto 8080');