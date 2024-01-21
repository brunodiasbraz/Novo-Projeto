const express = require("express");
const routes = express.Router();

const users = [{
    id: 1,
    name: 'Fideliza',
    email: 'fidelizaapp@gmail.com',
    password: 12345,
}];

routes.get('/', (req, res) => {
    res.send('Fideliza')
});

routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user)
    {
        return res.status(200).json(user);
    }

    return res.status(401).json({ message: 'Credenciais invalidas'});
})

module.exports = routes;