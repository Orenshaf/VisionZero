import FetchData from '../lib/data/fetch_data';

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading").remove()
        const dashboard = document.getElementById("dashboard");
        dashboard.removeAttribute("style");
    }, 16000)
    FetchData();
})


