const express = require('express');
const colors = require('colors')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
    console.log(`'/' Request received`.red);
});

app.get('/about', (req, res)=>{
    res.render('contact');
    console.log(`'/about' Request received`.red)
});

app.get('/contact', (req, res)=>{
    res.send('<h1>works</h1>');
});

app.listen(port, ()=>{
    console.log(`Server on port: ${port}`);
});
