class DataMap {
    constructor(props) {
        const center = new google.maps.LatLng(40.730610, -73.935242);
        this.heatmapData = [];
        this.heatmap = null;
        this.map = null;
        this.borough = null;
        this.year = 2013;
        this.mapOptions = {
            zoom: 10,
            center,
            disableDefaultUI: true,
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
        this.grabSlider = this.grabSlider.bind(this);
        this.updateMapYear = this.updateMapYear.bind(this);
    }

    initializeMap() {
        this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);
    }

    addSlider(slider){
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(slider);
    }

    updateMapBorough(borough) {
        if (borough !== this.borough) {
            this.borough = borough;
        }

        this.clearMap();
        let locations = this.borough[this.year].locations;

        setTimeout(() => {
            locations.forEach(entry => {

                entry = entry.reverse();

                this.heatmapData.push({ location: new google.maps.LatLng(...entry), weight: 1 });
            })
            this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: this.heatmapData
            });
            this.heatmap.set('radius', this.year < 2016 ? 3 : 15);
            this.heatmap.setMap(this.map);
        }, 0)
        
    }

    grabSlider() {
        const slider = document.getElementById("slider");
        this.updateMapYear(slider);
    }

    updateMapYear() {
        const slider = document.getElementById("slider");
        this.year = slider.value;
        debugger;
        if (this.borough) {
            this.updateMapBorough(this.borough);
        }
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