// GET request for remote image in node.js
axios({
    method: 'get',
    url: 'http://127.0.0.1:7777/clients',
    responseType: 'stream'
  })
    .then(function (response) {
        const dataClients = response.data.data;
        //console.log(dataClients);
        const market = document.getElementById('market');

        dataClients.forEach(dataClients => {

          let template = `
          <div class="container">
                <div class="box-dv">
                    <p class="box-p">${dataClients.name}</p>
                    <p class="box-p">${dataClients.lastname}</p>
                    <p class="box-p">${dataClients.id}</p>
                </div>
            </div>
          `

          market.insertAdjacentHTML('beforeend', template);
        });
    });