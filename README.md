## Overview

![Imgur](https://i.imgur.com/nKwIGVv.png)

In 2014 the Mayor Bill de Blasio put forth the Vision Zero initiative with the intention of ending traffic deaths and injuries in New York City.

Every year the NYPD releases data on every collision in New York City. The data represented in VisionZero intends to reflect the effect of Mayor de Blasio's initiative.

### Technologies

* `JavaScript` for retrieving data and calculations
* `D3.js` for creating graphs
* `Google Maps API` for visualizing accidents
* `HTML5` and `CSS3` for interactive visualization
* `Webpack` and `Babel` to bundle js files.

### Features 

![Giphy](https://media.giphy.com/media/RG3dTMvBAR6qmX81Nx/giphy.gif)

VisionZero users can:

 * See a broad overview of accidents in New York City from January 1st, 2013 until December 31st, 2018
 * See specific statistics about accidents for each borough in New York City
 * Toggle between stacked and grouped bar charts
 * Toggle between boroughs by double clicking on map
 * Toggle heatmap points by year
 
One of the biggest challenges was retreiving over a million data points and still having the application run smoothly. In order to do this I made fetch requests to each borough one by one and parsed the data in the background. Just as an example, here is how I fetched the data for Manhattan and Queens, but I continued the process for the other boroughs:

```javascript
TotalData(manhattanUrl).then(response => {
        ParseData(response).then((res) => {
            Store['MANHATTAN'] = res;
            map = new DataMap();
            map.initializeMap();
            setTimeout(() => CreateSlider(map), 2000);
            map.addMapData(Store["MANHATTAN"], "MANHATTAN");
            CreateButtons();
            ChooseChart(Store["MANHATTAN"]);
            ChooseData(Store["MANHATTAN"], ["MANHATTAN"], map);
            Chart(Store["MANHATTAN"]);
            LoadedButton(map);
        });
    }).then(() => {
        TotalData(queensUrl).then(response => {
            ParseData(response).then(res => {
                Store["QUEENS"] = res;
                map.addMapData(Store["QUEENS"], "QUEENS");
                ChooseData(Store["QUEENS"], "QUEENS", map);
            })
        }).then(() => {
        ...
        }
```

### Wireframe
This visualization consists of a single screen with a clickable map of New York City to breakdown data by borough<sub>(a)</sub> and a line chart injuries/deaths through the years<sub>(b)</sub>.

![Imgur](https://i.imgur.com/aSxUzjG.png)

### Data & APIs

CE Data is available through API and direct download from the [NYPD](https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95).



