const express = require('express');
const path = require('path');
const app = express();

const productsRouter = require('./routes/products');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/products', productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port 3001`));