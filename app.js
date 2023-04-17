const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/logn3db', { useNewUrlParser: true, useUnifiedTopology: true })

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/register'));

// Server config
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

// in the console start mongodb with mongod, it will listen localhost or 127.0.0.1 in the port 27017
// in mongoose.connect('mongodb://localhost:27017/logn1db' logn1db is the name I give to the database
// in other tab nodemon app