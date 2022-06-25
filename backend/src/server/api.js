// import do framework EXPRESS para o código
const express = require('express');

// atribuição do método EXPRESS() a uma VAR
const app = express();

/* usando o método GET para trazer os dados */
app.get('/products', (request, response) => {
    response.json(['Biscoito','Farinha','Sal']);
})

/* usando o método POST para atualizar os itens da lista */
app.post('/products', (request, response) => {
    response.json(['Biscoito','Farinha','Sal', 'Leite']);
});

// atribuição da porta onde a plicação irá responder
app.listen(9889);

// informa o STATUS do servidor em execução
console.log('server running at http://localhost:9889');