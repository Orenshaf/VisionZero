const ParseData = (response) => {
    const bronx = parseBoro("BRONX", response);
    const bronxDates = parseDates(bronx);
    const bronxBreakdown = breakdownStats(bronxDates);
    const Bronx = bronxBreakdown;

    const brooklyn = parseBoro("BROOKLYN", response);
    const brooklynDates = parseDates(brooklyn);
    const brooklynBreakdown = breakdownStats(brooklynDates);
    const Brooklyn = brooklynBreakdown; 

    const queens = parseBoro("QUEENS", response);
    const queensDates = parseDates(queens);
    const queensBreakdown = breakdownStats(queensDates);
    const Queens = queensBreakdown; 

    const manhattan = parseBoro("MANHATTAN", response);
    const manhattanDates = parseDates(manhattan);
    const manhattanBreakdown = breakdownStats(manhattanDates);
    const Manhattan = manhattanBreakdown; 

    const statenIsland = parseBoro("STATEN ISLAND", response);
    const statenIslandDates = parseDates(statenIsland);
    const statenIslandBreakdown = breakdownStats(statenIslandDates);
    const StatenIsland = statenIslandBreakdown;
    
    const Store = {
        "BRONX": Bronx,
        "BROOKLYN": Brooklyn,
        "QUEENS": Queens,
        "MANHATTAN": Manhattan,
        "STATEN ISLAND": StatenIsland
    }
    debugger;
    return Store;
}

const parseBoro = (boro, response) => {
    const array = [];
    response.forEach( element => {
        if (element.borough === boro) {
            array.push(element);
        }
    })

    return array;
}

const parseDates = (data) => {
    const obj = {
        2012: [],
        2013: [],
        2014: [],
        2015: [],
        2016: [],
        2017: [],
        2018: [],
        2019: [],
    };
    data.forEach( element => {
        const year = parseInt(element.date.split("-")[0]);
        obj[year].push(element);
    })
    return obj;
}

const breakdownStats = (data) => {
    const obj = {
        2012: {
            deaths: 0,
            injuries: 0
        },
        2013: {
            deaths: 0,
            injuries: 0
        },
        2014: {
            deaths: 0,
            injuries: 0
        },
        2015: {
            deaths: 0,
            injuries: 0
        },
        2016: {
            deaths: 0,
            injuries: 0
        },
        2017: {
            deaths: 0,
            injuries: 0
        },
        2018: {
            deaths: 0,
            injuries: 0
        },
        2019: {
            deaths: 0,
            injuries: 0
        },
    };
    const years = [
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
    ]
    years.forEach(year => {
        let deaths;
        let injuries;
        deaths = data[year].map(datum => {
            const cyclist = datum.number_of_cyclist_killed ? parseInt(datum.number_of_cyclist_killed) : 0;
            const motorist = datum.number_of_motorist_killed ? parseInt(datum.number_of_motorist_killed) : 0;
            const pedestrians = datum.number_of_pedestrians_killed ? parseInt(datum.number_of_pedestrians_killed) : 0;
            const persons = datum.number_of_persons_killed ? parseInt(datum.number_of_persons_killed) : 0;
            
            return (cyclist + motorist + pedestrians + persons)
        }) 
        injuries = data[year].map(datum => {
            const cyclist = datum.number_of_cyclist_injured ? parseInt(datum.number_of_cyclist_injured) : 0;
            const motorist = datum.number_of_motorist_injured ? parseInt(datum.number_of_motorist_injured) : 0;
            const pedestrians = datum.number_of_pedestrians_injured ? parseInt(datum.number_of_pedestrians_injured) : 0;
            const persons = datum.number_of_persons_injured ? parseInt(datum.number_of_persons_injured) : 0;
            
            return (cyclist + motorist + pedestrians + persons)
        }) 
        if (deaths.length > 0) {
            deaths = deaths.reduce((acc, el) => acc + el);
        }
        if (injuries.length > 0) {
            injuries = injuries.reduce((acc, el) => acc + el);
        }
        obj[year].deaths += deaths;
        obj[year].injuries += injuries;
    })
    return obj;
}

export default ParseData;