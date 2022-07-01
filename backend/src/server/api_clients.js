const express = require('express');

const app = express();

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
        }
    ];

    return response.json({data: clients});

});

app.listen(7777);

console.log('Server runnning at http://127.0.0.1:7777');