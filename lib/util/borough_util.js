const state = {
    boroughs: [],
    years: {},
}


const url = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");
const data = {
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}
url.search = new URLSearchParams(data);


function postData(url = '', data = {}) {
    return fetch(url, {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        data,
    })
        .then(response => response.json());
}

postData(url, data)
    .then(response => {
        for (let i = 0; i < response.length; i++) {
            let borough = response[i].borough;
            if (state.boroughs.length === 5) {
                break;
            }

            if (borough && !state.boroughs.includes(borough)) {
                state.boroughs.push(borough);
            }
            
        }
        console.log(state);
    })
