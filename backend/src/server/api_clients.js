/* invoca o framework EXPRESS */
const express = require('express');

/* atribuo o método EXPRESS() a uma variável */
const app = express();

/*  */
app.get('/clients', (request, response) => {

    response.header('Access-Control-Allow-Origin', '*');

    const clients = [
        {
            name: 'John',
            lastname: 'Smith',
            id: 's1sa2w4eds455sdsa122',
        },
        {
            name: 'Michael',
            lastname: 'World',
            id: 'q1s82w4eds455sdsa491',
        },
        {
            name: 'Kevin',
            lastname: 'Wilson',
            id: 'b1sa2w4eds418ksih444',
        },
        {
            name: 'Valphed',
            lastname: 'Alvin',
            id: 'e1sa2w4edsb#8ksih1l3',
        },
        {
            name: 'Mayke',
            lastname: 'Whutsus',
            id: 'q3sa5f4edsn%2ksihH5T',
        }
    ];

    return response.json({data: clients});

});

app.listen(7777);

console.log('Server runnning at http://127.0.0.1:7777');