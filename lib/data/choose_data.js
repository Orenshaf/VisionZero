import Chart from "../charts/chart";

const ChooseData = (DATA, borough, map, locations) => {
    const btn = document.getElementById(borough);
    btn.setAttribute("style", "background: white");
    btn.onclick = () => {
        map.clearMap();
        map.updateMap(locations);
        setTimeout(() => {Chart(DATA, btn.innerHTML)}, 1500)
    }

}

export default ChooseData;