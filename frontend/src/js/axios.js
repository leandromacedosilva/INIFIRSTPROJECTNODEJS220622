// GET request for remote image in node.js
axios({
    method: 'get',
    url: 'http://127.0.0.1:9889',
    responseType: 'stream'
  })
    .then(function (response) {
        const datainf = response.data.data;
        console.log(datainf);
      //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });