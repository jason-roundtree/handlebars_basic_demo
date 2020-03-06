var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
 
var technologies = [
    { technology: "JavaScript" }, 
    { technology: "Node" },
    { technology: "Handlebars" },
    { technology: "CSS" },
    { technology: "HTML" },
];

app.get('/technologies', function (req, res) {
    res.render('technologies', { 
        technologies, 
        title: 'technologies' 
    });
});

app.get('/', function (req, res) {
    res.render('home', { title: 'Home'});
});

app.listen(3000, () => console.log('App listening...'));