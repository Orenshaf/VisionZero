const ParseData = (response) => {
    const bronx = parseBoro("BRONX", response);
    const bronxDates = parseDates(bronx);
    const bronxStore = {"BRONX": bronxDates};
    debugger;
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

export default ParseData;