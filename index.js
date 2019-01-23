const express = require('express');
const path = require('path');
const app = express();

const productsRouter = require('./routes/products');

const productsApiRouter = require('./routes/api/products');

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// View engine by express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Get the products
app.use('/products', productsRouter);

// Endpoints to use the api
app.use('/api/products', productsApiRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port 3001`));