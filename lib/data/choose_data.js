import Chart from "../chart";

const ChooseData = (DATA) => {
    Object.keys(DATA).forEach( borough => {
        debugger;
        const btn = document.createElement('BUTTON')
        btn.innerHTML = `${borough}`
        btn.onclick = () => {
            Chart(DATA, btn.innerHTML);
        }
        document.body.appendChild(btn);
    })
}

export default ChooseData;