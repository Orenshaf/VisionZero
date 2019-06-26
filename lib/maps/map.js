import Chart from "../charts/chart";

class DataMap {
    constructor(props) {
        const center = new google.maps.LatLng(40.730610, -73.935242);
        this.mapOptions = {
            zoom: 10,
            center,
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            zoomControl: true,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        }
        this.heatmapData = [];
        this.heatmap = null;
        this.map = null;
        this.borough = "MANHATTAN";
        this.year = 2013;
        this.boroughData = {};

        this.updateMapBorough = this.updateMapBorough.bind(this);
        this.initializeMap = this.initializeMap.bind(this);
        this.addClickEvent = this.addClickEvent.bind(this);
    }

    initializeMap() {
        setTimeout(() => {
            this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);
            this.addClickEvent();
        }, 1000)
    }

    addClickEvent() {
        this.map.addListener('dblclick', (e) => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            const geocoder = new google.maps.Geocoder;
            const latLng = new google.maps.LatLng(lat, lng)
            geocoder.geocode({ location: latLng }, (results, status) => {
                const boroughs = ["Manhattan", "Queens", "Brooklyn", "The Bronx", "Staten Island"];
                const addresses = results[0].address_components;
                for (let i = 0; i < addresses.length; i++) {
                    const longName = addresses[i].long_name;
                    if (boroughs.includes(longName)) {
                        if (longName.includes("The")) {
                            this.borough = longName.split(" ")[1].toUpperCase();
                            if (Object.keys(this.boroughData).includes(this.borough)) {
                                console.log(this.borough);
                                this.updateMapBorough();
                                setTimeout(() => { Chart(this.boroughData[this.borough], this.borough) }, 1);
                                break;
                            } else {
                                alert("Sorry still loading that data!")
                            }
                        } else {
                            this.borough = longName.toUpperCase();
                            if (Object.keys(this.boroughData).includes(this.borough)){
                                this.updateMapBorough()
                                setTimeout(() => { Chart(this.boroughData[this.borough], this.borough) }, 1);
                                break;
                            } else {
                                alert("Sorry still loading that data!")
                            }  
                        }
                    }
                }
            })
        });
    }

    addMapData(data, borough) {
        this.boroughData[borough] = data;
    }

    addSlider(slider){
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(slider);
    }

    updateMapBorough() {
        debugger;
        this.clearMap();
        const slider = document.getElementById("slider");
        this.year = slider.value;

        let locations = this.boroughData[this.borough][this.year].locations;

        setTimeout(() => {
            Object.keys(locations).forEach(location => {
                const weight = locations[location];
                const coordinates = location.split(",").reverse()
                this.heatmapData.push({ location: new google.maps.LatLng(...coordinates), weight });
            })
            this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: this.heatmapData,
                maxIntensity: 30
            });

            this.heatmap.set('radius', 1);
            this.heatmap.setMap(this.map);
        }, 0)

    }

    clearMap() {
        if (this.heatmap) {
            this.heatmap.setMap(null);
            this.heatmapData = [];
            this.heatmap = null;
        }
    }
}

export default DataMap;