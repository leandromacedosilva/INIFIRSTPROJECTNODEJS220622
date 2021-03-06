// import do framework EXPRESS para o código
const express = require('express');

// atribuição do método EXPRESS() a uma CONST.
const app = express();

// atribuição da porta onde a plicação irá responder
const port = 9889;

// import library UUID V4.
const {v4: uuidv4} = require('uuid');

// import middleware for express middlewares
app.use(express.json());

// array com dados para uso em tempo de execução. 
const customers = [];

// create da rota POST 
app.post('/account', (request, response) => {
    /* var cpf e name usando desestruturação */
    const { name, lastname, cpf, rg  } = request.body;
    // regra de negócio para cadastro
    const customersAlreadyExists = customers.some(
        (customers) => customers.cpf === cpf
    );

    // informa que o CPF já está na base de dados.
    if(customersAlreadyExists){
        return response.status(400).json({arror: 'Customers Already Exists'});
        };

    //const id = uuidv4();
    customers.push({
         name,
         lastname,
         cpf, 
         rg,
         id: uuidv4(),
         statement: []
        });   
    return response.status(200).send();
});

/* usando o método GET para trazer os dados */
app.get('/products', (request, response) => {
    // testing QUERY PARAMS
    const query = request.query;
    console.log(query);
    return response.json(['Biscoito', 'Farinha', 'Sal']);
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

// informa o STATUS do servidor em execução
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`); 
});