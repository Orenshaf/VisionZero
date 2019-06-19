import FetchData from '../lib/data/fetch_data';

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => document.getElementById("loading").remove(), 16000)
    FetchData();
})


