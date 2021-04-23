const express = require('express');
const app = express();
const port = 3000;

/*Middlewares*/

app.use(express.static('public'));
app.set('view engine', 'ejs');

/*Routes*/

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

/*Listening*/

app.listen(port, ()=>{
    console.log(`Server on port: ${port}`);
});
