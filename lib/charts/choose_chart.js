import Chart from '../charts/chart';

const ChooseChart = (DATA) => {
    const chartStyle = ["Stacked", "Grouped"];
    chartStyle.forEach( style => {
        const radio = document.createElement("INPUT");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", `${style}-button`)

        if (style === 'Stacked') {
            radio.checked = true;
        }

        radio.onclick = () => {
            const radios = document.getElementsByTagName("INPUT")
            debugger;
            for (let button of radios) {
                if (button.checked) {
                    button.checked = false;
                }
            }

            radio.checked = true;
        }

        const label = document.createElement("SPAN");
        const text = document.createTextNode(`${style}`);
        label.appendChild(text);

        document.body.appendChild(label);
        document.body.appendChild(radio);
    })
}

export default ChooseChart;