function request() {
    var requestURL = 'https://api-eu.dhl.com/track/shipments?trackingNumber=' + document.getElementById('delivery').value;
    fetch(requestURL,
        {headers: new Headers({'DHL-API-Key': 'MAy2ckLSa0w0xgxJtgrXToRWOATR41DE'})})
        .then(function (response) {
            return response.json()
        }).then(function (json) {
        console.log(json)
    });
}