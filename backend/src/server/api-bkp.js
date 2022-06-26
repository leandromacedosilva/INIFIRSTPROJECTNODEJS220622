// import do framework EXPRESS para o código
const { response } = require('express');
const express = require('express');

// atribuição do método EXPRESS() a uma VAR.
const app = express();

//import middleware for express middlewares
app.use(express.json());

/* usando o método GET para trazer os dados */
app.get('/products', (request, response) => {
    // testing QUERY PARAMS
    const query = request.query;
    console.log(query);
    return response.json(['Biscoito', 'Farinha', 'Sal']);
})

/* usando o método POST para atualizar os itens da lista */
app.post('/products', (request, response) => {
    // testing BODY PARAMS
    const body = request.body;
    console.log(body);
    return response.json(['Biscoito', 'Farinha', 'Sal', 'Leite']);
});

/* usando o método PUT para alterar/atualizar item na lista */
app.put('/products/:id', (request, response) => {
    // testing ROUTE PARAMS
    const params = request.params;
    console.log(params);
    return response.json(['Biscoito', 'Sardinha', 'Sal', 'Leite']);
});

/* usando o método PATCH altera/atualiza item na lista */
app.patch('/products/:id', (request, response) => {
    return response.json(['Biscoito', 'Sardinha', 'Amburguer', 'Leite']);
});

/* o método DELETE exclui item da lista */
app.delete('/products/:id', (request, response) => {
    return response.json(['Biscoito', 'Farinha', 'Sal', 'Macarrao']);  
});

// atribuição da porta onde a plicação irá responder
app.listen(9889);

// informa o STATUS do servidor em execução
console.log('server running at http://localhost:9889');