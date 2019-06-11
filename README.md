## Overview

In 2014 the Mayor Bill de Blasio put forth the Vision Zero initiative with the intention of ending traffic deaths and injuries in New York City.

Every year the NYPD releases data on every collision in New York City. The data represented in VisionZero intends to reflect the effect of Mayor de Blasio's initiative.

### Functionality & MVP  
VisionZero users can:

 * See a broad overview of accidents in New York City from January 1st, 2009 until January 1st, 2019
 * See specific statistics about accidents for each borough in New York City
 * Toggle data between injuries and fatalities

In addition, this project contains:

 * An informational modal describing the cross entropy (CE) methodology with links to raw data
 * A production README


### Wireframe
This visualization consists of a single screen with a clickable map of New York City to breakdown data by borough<sub>(a)</sub>, a pie chart showing injuries/deaths<sub>(b)</sub>, and a line chart injuries/deaths through the years<sub>(c)</sub>.

![Wireframe](https://wireframe.cc/pro/pp/95706a42c254138)

### Data & APIs

CE Data is available through API and direct download from the [NYPD](https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95).

### Technologies

VisionZero will be built with:

* `JavaScript` for retrieving data and calculations
* `HTML5` and `CSS3` for interactive visualization
* `Webpack` and `Babel` to bundle js files.


