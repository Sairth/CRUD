const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./Routers/index');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

router(app);

app.listen(port, (erro)=>{
    if(erro){
        console.log('Ocorreu um erro');
        return;
    }
    console.log('Servidor está funcionando na porta 3000');
})

mongoose.connect(/*insira aqui um DB*/)
.then(()=>{
    console.log("Banco de dados foi conectado");
})
.catch(()=>{
    console.log("A conecção do banco falhou");
})