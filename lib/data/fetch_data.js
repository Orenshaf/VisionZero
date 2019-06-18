import TotalData from '../util/data_util';
import ParseData from './parse_data';
import CreateButtons from '../htmlstuff/create_buttons';
import ChooseData from './choose_data';
import ChooseChart from '../charts/choose_chart';
import Chart from '../charts/chart';
import Header from '../htmlstuff/header';

let Store = {};

const manhattanUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const manhattanData = {
    "$select": "date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'MANHATTAN' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

manhattanUrl.search = new URLSearchParams(manhattanData);

const bronxUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const bronxData = {
    "$select": "date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'BRONX' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

bronxUrl.search = new URLSearchParams(bronxData);

const queensUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const queensData = {
    "$select": "date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'QUEENS' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

queensUrl.search = new URLSearchParams(queensData);

const brooklynUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const brooklynData = {
    "$select": "date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'BROOKLYN' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}

brooklynUrl.search = new URLSearchParams(brooklynData);

const statenIslandUrl = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

const statenIslandData = {
    "$select": "date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
    "$limit": 1000000,
    "$where": "borough LIKE 'STATEN ISLAND' AND date > '2012-12-31' AND date < '2019-01-01'",
    "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
}
 statenIslandUrl.search = new URLSearchParams(statenIslandData);


export default function FetchData() {
    TotalData(manhattanUrl).then(response => {
        document.getElementById("loading").remove();
        Store["MANHATTAN"] = ParseData(response);
        CreateButtons();
        ChooseData(Store["MANHATTAN"], "MANHATTAN");
        Chart(Store["MANHATTAN"]);
        ChooseChart(Store["MANHATTAN"]);
    }).then(() => {
        TotalData(queensUrl).then(response => {
            Store["QUEENS"] = ParseData(response);
            ChooseData(Store["QUEENS"], "QUEENS");
        }).then(() => {
            TotalData(brooklynUrl).then(response => {
                Store["BROOKLYN"] = ParseData(response);
                ChooseData(Store["BROOKLYN"], "BROOKLYN");
            }).then(() => {
                TotalData(bronxUrl).then(response => {
                    Store["BRONX"] = ParseData(response);
                    ChooseData(Store["BRONX"], "BRONX");
                }).then(() => {
                    TotalData(statenIslandUrl).then(response => {
                        Store["STATEN ISLAND"] = ParseData(response);
                        ChooseData(Store["STATEN ISLAND"], "STATEN ISLAND");
                    })
                })
            })
        })
    })
}
