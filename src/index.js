const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources/views"));


//route
app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
})