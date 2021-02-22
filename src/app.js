const express = require('express');
const path = require('path');
const hbs = require('hbs');
var bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index')
})
  

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/faq',(req,res) => {
    res.render('faq');
})

app.get('/price', (req, res) => {
    res.render('form');
})

app.post('/price', (req,res) => {
    console.log(req.body);
    res.send({msg : 'ok'});
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})