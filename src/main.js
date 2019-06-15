import TotalData from '../lib/util/total_data_util';
import ParseData from '../lib/data/parse_data';
import ChooseData from '../lib/data/choose_data';

document.addEventListener("DOMContentLoaded", () => {
    let DATA;
    const url = new URL("https://data.cityofnewyork.us/resource/qiz3-axqb.json");

    const data = {
        "$select": "date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed",
        "$limit": 1000000,
        "$where": "borough IS NOT NULL AND date > '2012-12-31' AND date < '2019-01-01'",
        "$$app_token": "2sSaKKLyrQJ6NGnDCvtjftDQd"
    }

    url.search = new URLSearchParams(data);

    TotalData(url).then(response => {
        document.getElementById("loader").remove();
        DATA = ParseData(response);
        ChooseData(DATA);
    })
})


