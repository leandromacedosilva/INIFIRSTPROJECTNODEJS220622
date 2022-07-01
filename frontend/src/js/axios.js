// GET request for remote image in node.js
axios({
    method: 'get',
    url: 'http://127.0.0.1:7777/clients',
    responseType: 'stream'
  })
    .then(function (response) {
        const clients = response.data.data;
        console.log(clients);
      //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });