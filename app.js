const express = require('express');

const app = express();

app.use(express.json());


// Método Get
app.get('/', (request, response)=>{
    return response.json({message: 'Servidor está funcionando! Modificado'})
})

// Método Post
app.post('/teste', (request, response)=>{
    const {name,date} = request.body;
    name = 'resposta' + name; // Concatenar para mostrar que deu certo

    return response.json({name,date})
})


app.listen(3333)