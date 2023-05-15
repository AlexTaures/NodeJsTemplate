const express = require('express');
const app = express();
const port= 8080; 

//MiddleWare para ejecutar contenido dentro de la carpeta public
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('Home page')
})

app.get('/hello', function (req, res) {
  res.send('Hello Word')
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + 'public/404.html');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})