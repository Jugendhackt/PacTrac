function request() {
    var requestURL = 'https://api-eu.dhl.com/track/shipments?trackingNumber=' + document.getElementById('delivery').value + "&language=de";
    fetch(requestURL,
        {headers: new Headers({'DHL-API-Key': 'MAy2ckLSa0w0xgxJtgrXToRWOATR41DE'})})
        .then(function (response) {
            return response.json()
        }).then(function (json) {
        console.log(json)
        var herkunft = json.shipments[0].destination.address.addressLocality;
        var ziel = json.shipments[0].origin.address.addressLocality;
        var status_zeit = json.shipments[0].status.timestamp;
        var status_beschreibung = json.shipments[0].status.description;
    });
}