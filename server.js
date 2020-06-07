const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middlewares
app.use(express.static(__dirname + '/public'));

//Express HBS 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//routes
app.get('/', (req, res) => {
  res.render('home', {
    name: 'marco chi castillo'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});