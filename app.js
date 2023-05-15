const express = require('express');
const hbs = require('hbs');
const app = express();
const port= 8080; 

//para uso de partials
//MiddleWare para ejecutar contenido dentro de la carpeta public
// app.use(express.static('public')); //Sin comentar esto, se crea conflico con el el hbs
//////////

//Handlebars
//TODO: require('hbs'); buscara por defecto en la carpeta views
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {
  console.log("error: " + err +"\nin "+ __dirname);
});


app.get('/', function (req, res) {
  //res.send('Home page');
  res.render('home',{
    nombre: 'Alex Taures',
    titulo: 'template'
  });
}) 

// app.get('/hello', function (req, res) {
//   res.send('Hello Word');
// })
app.get('*', function (req, res) {
  res.sendFile(__dirname + 'public/404.html');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})