const express = require('express');
const colors = require('colors')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/services', (req, res)=>{
    res.render('services');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.listen(port, ()=>{
    console.log(`Server on port: ${port}`);
});
