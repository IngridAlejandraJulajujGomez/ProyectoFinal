const exp = require('constants');
const express = require('express')
const hbs= require('hbs');
//configurar variable de entrono
require('dotenv').config();
const app= express()
const port = process.env.PORT

/**CONT PORT? 8080 */

app.set('view engine', 'hbs');

//es donde se ubican los archivos a reutilizar
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('home3'))

//controlador de la ruta principal
//aquihacemos elllamado de hombe.hbs,noes necesario indicar el tipode archivo

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home3');
});

app.get('/proyecto1', (req, res) => {
    res.render('proyecto1');
  });
  
  app.get('/proyecto2', (req, res) => {
    res.render('proyecto2');
  });

  app.get('/proyecto3', (req, res) => {
    res.render('proyecto3');
  });

  app.get('/proyecto4', (req, res) => {
    res.render('proyecto4');
  });

  app.get('/proyecto5', (req, res) => {
    res.render('proyecto5');
  });


  /**vuelta */
  app.get('/home3', (req, res) => {
    res.render('home3');
});


app.listen(port,()=>{
    console.log(`Parcial final Funcionando en el puerto: ${port}`);
})