const express = require('express');
const app = express();
const router = require('./router/router.js');
const port = 3000;

//definindo o ejs como view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`the server is running in port: ${port}`);
});