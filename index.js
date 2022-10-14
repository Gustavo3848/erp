const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const auth = require('./auth/auth.js');
const porta = 3033
const routerTable = require('./routes/table.js')

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json


app.get('/',(req,res)=>{
    const id = 1;

    const token = jwt.sign({ id }, "1234", {
      expiresIn: 300 // expires in 5min
    });
    return res.json({ auth: true, token: token });
})

app.use('/table', auth, routerTable)


app.listen(porta, function () {
    console.log("Servidor rodando...")
});