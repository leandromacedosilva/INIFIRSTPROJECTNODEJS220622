
// import do framework EXPRESS para o código
const express = require('express');

// atribuição do método EXPRESS() a uma VAR
const app = express();

/* 
 * atribuição do método GET() onde definimos o ENDPOINT,
 * e/ou ENDPOINT/PATH, RETORNOS E RESPOSTAS da aplicação, 
 * de acordo com o método, numa ARROW FUNCTION.
 */  
app.get('/', (request, response) => {
    // evio uma resposta/mensagem atraves do método SEND()
    return response.send('Hello, world!');
});

app.get('/json', (request, response) => {
    // resposta/mensagem atraves do método JSON()
    return response.json({message: 'Hello, world with JSON!'});
});

/* 
 * atribuição do método POST() onde definimos o ENDPOINT
 * e/ou ENDPOINT/PATH,
 * RETORNOS E RESPOSTAS da aplicação, de acordo com o método, 
 * numa ARROW FUNCTION. 
 */
app.post('/', function(request, response) {
    return response.send('Hello, world with method POST!');
});

// atribuição da porta onde a plicação irá responder
app.listen(9889);

// informa o STATUS do servidor em execução
console.log('server running at http://localhost:9889');