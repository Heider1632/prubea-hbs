const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  extname: '.hbs'
}));

app.set('view engine', '.hbs');


app.set('port',  process.env.PORT || 9000);

const port = app.get('port');

app.get('/', (req, res) => {
  res.render('index',  { "hey": "hola"});
})

app.listen(port, () => {
  console.log('Server on port', app.get('port'));
});
