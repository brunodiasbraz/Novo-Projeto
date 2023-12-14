const express = require("express");
const req = require("express/lib/request");
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Ouvindo a porta 3000')
})