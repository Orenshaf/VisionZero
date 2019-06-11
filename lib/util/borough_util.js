const url = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");
const boroughs = ["BROOKLYN", "BRONX", "MANHATTAN", "QUEENS", "STATEN ISLAND"];

function postData(url = '') {
    return fetch(url, {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    })
        .then(response => response.json());
}

const boroughData = {}
boroughs.forEach(borough => {
    const data = {
        "$select": "count(number_of_persons_killed)",
        "$where": `borough = '${borough}'`,
        "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
    };

    url.search = new URLSearchParams(data);

    postData(url)
        .then(response => {
            const resultData = response;
            boroughData[borough] = parseInt(resultData[0].count_number_of_persons_killed);
        })
})

console.log(boroughData);
