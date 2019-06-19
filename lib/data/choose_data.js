import Chart from "../charts/chart";

const ChooseData = (DATA, borough) => {
    const btn = document.getElementById(borough);
    btn.setAttribute("style", "background: white");
    btn.onclick = () => {
        Chart(DATA, btn.innerHTML);
    }

}

export default ChooseData;