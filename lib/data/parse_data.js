const ParseData = async (response) => {
    if (Array.isArray(response)) {
        const dates = parseDates(response);
        const breakdown = breakdownStats(dates);
        return breakdown;
    } else {
        return sumTotals(Object.values(response));
    }
}

export default ParseData;

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
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            locations: {},
        },
        2014: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            locations: {},
        },
        2015: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            locations: {},
        },
        2016: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            locations: {},
        },
        2017: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            locations: {},
        },
        2018: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
            locations: {},
        },
    };

    Object.keys(obj).forEach(year => {
        let cyclistDeaths,
            motoristDeaths,
            pedestrianDeaths,
            cyclistInjuries,
            motoristInjuries,
            pedestrianInjuries;
        
        cyclistDeaths = data[year].map(datum => {
           return datum.number_of_cyclist_killed ? parseInt(datum.number_of_cyclist_killed) : 0;
        }) 

        motoristDeaths = data[year].map(datum => {
           return datum.number_of_motorist_killed ? parseInt(datum.number_of_motorist_killed) : 0;
        }) 

        pedestrianDeaths = data[year].map(datum => {
           return datum.number_of_pedestrians_killed ? parseInt(datum.number_of_pedestrians_killed) : 0;
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

        data[year].forEach(datum => {
            if (datum.location) {
                const location = datum.location.coordinates.map( coordinate => Number((coordinate).toFixed(3)))

                if (obj[year].locations[location] === undefined) {
                    obj[year].locations[location] = 1;
                } else {
                    obj[year].locations[location] += 1;
                }
            }
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

        if (cyclistInjuries.length > 0) {
            cyclistInjuries = cyclistInjuries.reduce((acc, el) => acc + el);
        }

        if (motoristInjuries.length > 0) {
            motoristInjuries = motoristInjuries.reduce((acc, el) => acc + el);
        }

        if (pedestrianInjuries.length > 0) {
            pedestrianInjuries = pedestrianInjuries.reduce((acc, el) => acc + el);
        }
        obj[year].cyclistDeaths += cyclistDeaths;
        obj[year].motoristDeaths += motoristDeaths;
        obj[year].pedestrianDeaths += pedestrianDeaths;
        
        obj[year].cyclistInjuries += cyclistInjuries;
        obj[year].motoristInjuries += motoristInjuries;
        obj[year].pedestrianInjuries += pedestrianInjuries;
    })
    return obj;
}

const sumTotals = (boroughs) => {
    const obj = {
        2013: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
        },
        2014: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
        },
        2015: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
        },
        2016: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
        },
        2017: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
        },
        2018: {
            cyclistDeaths: 0,
            motoristDeaths: 0,
            pedestrianDeaths: 0,
            cyclistInjuries: 0,
            motoristInjuries: 0,
            pedestrianInjuries: 0,
        },
    };

    boroughs.forEach(borough => {
        Object.keys(obj).forEach( year => {
            obj[year].cyclistDeaths += borough[year].cyclistDeaths;
            obj[year].motoristDeaths += borough[year].motoristDeaths;
            obj[year].pedestrianDeaths += borough[year].pedestrianDeaths;

            obj[year].cyclistInjuries += borough[year].cyclistInjuries;
            obj[year].motoristInjuries += borough[year].motoristInjuries;
            obj[year].pedestrianInjuries += borough[year].pedestrianInjuries;
        })
    })

    return obj;
}

// export default ParseData;