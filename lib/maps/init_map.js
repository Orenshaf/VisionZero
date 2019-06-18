const InitMap = (response) => {
    const center = new google.maps.LatLng(40.730610, -73.935242);
    const mapOptions = {
        zoom: 8,
        center: center,
    }

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

export default InitMap;