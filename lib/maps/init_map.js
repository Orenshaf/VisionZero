const InitMap = (response) => {
    const center = new google.maps.LatLng(40.730610, -73.935242);
    const mapOptions = {
        zoom: 10,
        center: center,
        mapTypeId: 'satellite'
    }

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    // // let heatmapData = [];
    // // response.forEach(entry => {
    // //     if (entry.latitude && entry.longitude) {
    // //         heatmapData.push({location: new google.maps.LatLng(entry.latitude, entry.longitude), weight: 10});
    // //     }
    // // })
    // // debugger
    // // const heatmap = new google.maps.visualization.HeatmapLayer({
    // //     data: heatmapData
    // // });

    // // heatmap.setMap(map);
}

export default InitMap;