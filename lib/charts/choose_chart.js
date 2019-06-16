import Chart from '../charts/chart';

const ChooseChart = (DATA) => {
    const chartStyle = ["Stacked", "Grouped"];
    chartStyle.forEach( style => {
        const radio = document.createElement("INPUT");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", `${style}-button`)
        if (style === "Stacked" && document.getElementById("Grouped-button")) {
            debugger;
            const button = document.getElementById("Grouped-button");
            if (!button.hasAttribute("checked")) {
                radio.setAttribute("checked", "checked");
            }
        } else if (style === "Grouped" && document.getElementById("Stacked-button")) {
            const button = document.getElementById("Stacked-button");
            if (!button.hasAttribute("checked")) {
                radio.setAttribute("checked", "checked");
            }
        } else {
            radio.setAttribute("checked", "checked");
        }

        const label = document.createElement("SPAN");
        const text = document.createTextNode(`${style}`);
        label.appendChild(text);

        document.body.appendChild(label);
        document.body.appendChild(radio);
    })
}

export default ChooseChart;