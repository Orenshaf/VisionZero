import Chart from "../charts/chart";

const ParseData = (response) => {
    const bronx = parseBoro("BRONX", response);
    const bronxDates = parseDates(bronx);
    const Bronx = breakdownStats(bronxDates);

    const brooklyn = parseBoro("BROOKLYN", response);
    const brooklynDates = parseDates(brooklyn);
    const Brooklyn = breakdownStats(brooklynDates);

    const queens = parseBoro("QUEENS", response);
    const queensDates = parseDates(queens);
    const Queens = breakdownStats(queensDates);

    const manhattan = parseBoro("MANHATTAN", response);
    const manhattanDates = parseDates(manhattan);
    const Manhattan = breakdownStats(manhattanDates);

    const statenIsland = parseBoro("STATEN ISLAND", response);
    const statenIslandDates = parseDates(statenIsland);
    const StatenIsland = breakdownStats(statenIslandDates);

    const NewYorkCity = sumTotals(Bronx, Brooklyn, Queens, Manhattan, StatenIsland);
    
    const Store = {
        "BRONX": Bronx,
        "BROOKLYN": Brooklyn,
        "QUEENS": Queens,
        "MANHATTAN": Manhattan,
        "STATEN ISLAND": StatenIsland,
        "NYC": NewYorkCity
    }
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
        2013: [],
        2014: [],
        2015: [],
        2016: [],
        2017: [],
        2018: [],
    };
    data.forEach( element => {
        const year = parseInt(element.date.split("-")[0]);
        obj[year].push(element);
    })
    return obj;
}

const breakdownStats = (data) => {
    const obj = {
        2013: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2014: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2015: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2016: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2017: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2018: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
    };

    Object.keys(obj).forEach(year => {
        let cyclistDeaths,
            motoristDeaths,
            pedestrianDeaths,
            personDeaths,
            cyclistInjuries,
            motoristInjuries,
            pedestrianInjuries,
            personInjuries;
        
        cyclistDeaths = data[year].map(datum => {
           return datum.number_of_cyclist_killed ? parseInt(datum.number_of_cyclist_killed) : 0;
        }) 

        motoristDeaths = data[year].map(datum => {
           return datum.number_of_motorist_killed ? parseInt(datum.number_of_motorist_killed) : 0;
        }) 

        pedestrianDeaths = data[year].map(datum => {
           return datum.number_of_pedestrians_killed ? parseInt(datum.number_of_pedestrians_killed) : 0;
        }) 

        personDeaths = data[year].map(datum => {
           return datum.number_of_persons_killed ? parseInt(datum.number_of_persons_killed) : 0;
        })
        
        cyclistInjuries = data[year].map(datum => {
           return datum.number_of_cyclist_injured ? parseInt(datum.number_of_cyclist_injured) : 0;
        })

        motoristInjuries = data[year].map(datum => {
           return datum.number_of_motorist_injured ? parseInt(datum.number_of_motorist_injured) : 0;
        })

        pedestrianInjuries = data[year].map(datum => {
           return datum.number_of_pedestrians_injured ? parseInt(datum.number_of_pedestrians_injured) : 0;
        })

        personInjuries = data[year].map(datum => {
           return datum.number_of_persons_injured ? parseInt(datum.number_of_persons_injured) : 0;
        })
        
        if (cyclistDeaths.length > 0) {
            cyclistDeaths = cyclistDeaths.reduce((acc, el) => acc + el);
        }

        if (motoristDeaths.length > 0) {
            motoristDeaths = motoristDeaths.reduce((acc, el) => acc + el);
        }

        if (pedestrianDeaths.length > 0) {
            pedestrianDeaths = pedestrianDeaths.reduce((acc, el) => acc + el);
        }

        if (personDeaths.length > 0) {
            personDeaths = personDeaths.reduce((acc, el) => acc + el);
        }

        if (cyclistInjuries.length > 0) {
            cyclistInjuries = cyclistInjuries.reduce((acc, el) => acc + el);
        }

        if (motoristInjuries.length > 0) {
            motoristInjuries = motoristInjuries.reduce((acc, el) => acc + el);
        }

        if (pedestrianInjuries.length > 0) {
            pedestrianInjuries = pedestrianInjuries.reduce((acc, el) => acc + el);
        }

        if (personInjuries.length > 0) {
            personInjuries = personInjuries.reduce((acc, el) => acc + el);
        }

        obj[year].cyclistDeaths += cyclistDeaths;
        obj[year].motoristDeaths += motoristDeaths;
        obj[year].pedestrianDeaths += pedestrianDeaths;
        obj[year].personDeaths += personDeaths;
        
        obj[year].cyclistInjuries += cyclistInjuries;
        obj[year].motoristInjuries += motoristInjuries;
        obj[year].pedestrianInjuries += pedestrianInjuries;
        obj[year].personInjuries += personInjuries;
    })
    return obj;
}

const sumTotals = (...args) => {
    const obj = {
        2013: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2014: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2015: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2016: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2017: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
        2018: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            personDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            personInjuries: 0,
        },
    };
    args.forEach(borough => {
        Object.keys(obj).forEach( year => {
            obj[year].cyclistDeaths += borough[year].cyclistDeaths;
            obj[year].motoristDeaths += borough[year].motoristDeaths;
            obj[year].pedestrianDeaths += borough[year].pedestrianDeaths;
            obj[year].personDeaths += borough[year].personDeaths;

            obj[year].cyclistInjuries += borough[year].cyclistInjuries;
            obj[year].motoristInjuries += borough[year].motoristInjuries;
            obj[year].pedestrianInjuries += borough[year].pedestrianInjuries;
            obj[year].personInjuries += borough[year].personInjuries;
        })
    })

    return obj;
}

export default ParseData;