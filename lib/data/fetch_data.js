import TotalData from '../util/data_util';
import ParseData from './parse_data';
import CreateButtons from '../htmlstuff/create_buttons';
import ChooseData from './choose_data';
import ChooseChart from '../charts/choose_chart';
import Chart from '../charts/chart';
import DataMap from '../maps/map';
import CreateSlider from '../htmlstuff/create_slider';
import LoadedButton from '../htmlstuff/loaded_button';
let Store = {};

const manhattanUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const manhattanData = {
    "$select": "date, borough, location, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'MANHATTAN' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

manhattanUrl.search = new URLSearchParams(manhattanData);

const bronxUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const bronxData = {
    "$select": "date, borough, location, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'BRONX' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

bronxUrl.search = new URLSearchParams(bronxData);

const queensUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const queensData = {
    "$select": "date, borough, location, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'QUEENS' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

queensUrl.search = new URLSearchParams(queensData);

const brooklynUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const brooklynData = {
    "$select": "date, borough, location, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'BROOKLYN' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

brooklynUrl.search = new URLSearchParams(brooklynData);

const statenIslandUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const statenIslandData = {
    "$select": "date, borough, location, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'STATEN ISLAND' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}
statenIslandUrl.search = new URLSearchParams(statenIslandData);

let map;

export default function FetchData() {
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
            TotalData(brooklynUrl).then(response => {
                ParseData(response).then(res => {
                    Store["BROOKLYN"] = res;
                    map.addMapData(Store["BROOKLYN"], "BROOKLYN");
                    ChooseData(Store["BROOKLYN"], "BROOKLYN", map);
                })
            }).then(() => {
                TotalData(bronxUrl).then(response => {
                    ParseData(response).then(res => {
                        Store["BRONX"] = res;
                        map.addMapData(Store["BRONX"], "BRONX");
                        ChooseData(Store["BRONX"], "BRONX", map);
                    })
                }).then(() => {
                    TotalData(statenIslandUrl).then(response => {
                        ParseData(response).then(res => {
                            Store["STATEN ISLAND"] = res;
                            map.addMapData(Store["STATEN ISLAND"], "STATEN ISLAND");
                            ChooseData(Store["STATEN ISLAND"], "STATEN ISLAND", map);
                        })
                    }).then(() => {
                        ParseData(Store).then(res => {
                            Store["NYC"] = res;
                            ChooseData(Store["NYC"], "NYC", map);
                        })
                    })
                })
            })
        })
    })

}
