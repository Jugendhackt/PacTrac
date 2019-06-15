function request() {
    var delivery = document.getElementById('delivery');
    var requestURL = 'https://api-eu.dhl.com/track/shipments?trackingNumber=' + delivery.value + "&language=de";

    var loading = document.getElementById('loading');
    document.getElementById('logo').src = "./Logos/PacTraclogokleinfuerweb01.png";
    loading.style.display = "flex";
    loading.style.justifyContent = "center";
    document.body.style.backgroundColor = "#facd2e";
    document.getElementById("shipment_progress").style.opacity = 0;
    document.getElementById("shipment_progress").style.transition = "none";

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
        document.getElementById('logo').src = "./Logos/Pactraclogoklein00.png";
        loading.style.display = "none";
        document.body.style.backgroundColor = "#2171cc";
        document.getElementById("shipment_progress").style.opacity = 1;
        document.getElementById("shipment_progress").style.transition = "opacity 1s";
        document.getElementById("origin").innerHTML = herkunft;
        document.getElementById("destination").innerHTML = ziel;
        document.getElementById("status_time").innerHTML = status_zeit;
        document.getElementById("status_description").innerHTML = status_beschreibung;
    }).catch(function error() {
        document.getElementById('logo').src = "./Logos/Pactraclogoklein00.png";
        loading.style.display = "none";
        document.body.style.backgroundColor = "#2171cc";
        window.alert("Wir konnten kein Paket mit dieser Sendungsnummer: " + delivery.value + " finden");
    });
}