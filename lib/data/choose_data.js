import Chart from "../charts/chart";

const ChooseData = (DATA, borough, map) => {
    const btn = document.getElementById(borough);
    btn.setAttribute("style", "background: white");
    btn.onclick = () => {
        map.updateMapBorough(DATA);
        setTimeout(() => {Chart(DATA, btn.innerHTML)}, 1500)
    }

}

export default ChooseData;