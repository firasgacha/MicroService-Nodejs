const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

const foldersRoutes = require('./routes/folder');
const clientsRoutes = require('./routes/client');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(expressValidator());
app.use('/folder', foldersRoutes);
app.use('/client', clientsRoutes);

app.listen(port, () => {
    console.log(`Server listening at port:${port}`);
});