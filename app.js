const express = require ('express');

const app = express();

app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index', {title:'Home'});
});
app.get('/about', (req, res)=>{
    res.render('about',{title: 'About'});
});
app.get('/blog/create', (req, res)=>{
    res.render('create');
});

app.use((req, res)=>{
    res.render('404')

});