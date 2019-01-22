const express = require('express');
const path = require('path');
const app = express();
const expressJsx = require('./express-jsx');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/products', productsRouter);

const server = app.listen(8000, () => {
  console.log(`Listening http://localhost:${server.address().port}`)
})