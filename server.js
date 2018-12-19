const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/views/images') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('portfolio.hbs');
});

app.listen(port, () => {
    console.log('Server is up at port ' + port);
});

