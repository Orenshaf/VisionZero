import StackedChart from './stacked_chart';
import GroupedChart from './grouped_chart';

let currentBorough = "MANHATTAN";
let currentStyle = "Stacked";
let newStyle;

const Chart = (DATA, borough = currentBorough) => {
    if (document.getElementById('borough-header')) {
        const header = document.getElementById('borough-header');
        header.parentElement.removeChild(header);
    }
    const header = document.createElement("H1");
    header.setAttribute("id", "borough-header");
    header.innerHTML = `${borough}`;
    document.body.appendChild(header);

    const radios = document.getElementsByTagName("INPUT");
    for (let button of radios) {
        if (button.checked) {
            newStyle = button.id;
        }
    }
    
    if (currentBorough !== borough || currentStyle !== newStyle) {
        if (currentBorough !== borough) {
            if (document.getElementsByTagName("svg").length > 0) {
                const removeSVG = document.getElementsByTagName("svg");
                removeSVG[0].parentElement.removeChild(removeSVG[0]);
            }
            currentBorough = borough;
            if (currentStyle === "Stacked") {
                StackedChart(DATA);
            } else {
                GroupedChart(DATA);
            }
        } else {
            if (newStyle === "Stacked") {
                currentStyle = newStyle
                // remove these once transitions work
                if (document.getElementsByTagName("svg").length > 0) {
                    const removeSVG = document.getElementsByTagName("svg");
                    removeSVG[0].parentElement.removeChild(removeSVG[0]);
                }
                StackedChart(DATA);
            } else {
                currentStyle = newStyle;
                // remove these once transitions work
                if (document.getElementsByTagName("svg").length > 0) {
                    const removeSVG = document.getElementsByTagName("svg");
                    removeSVG[0].parentElement.removeChild(removeSVG[0]);
                }
                GroupedChart(DATA);
            }
        }
    } else {
        if (document.getElementsByTagName("svg").length > 0) {
            const removeSVG = document.getElementsByTagName("svg");
            removeSVG[0].parentElement.removeChild(removeSVG[0]);
        }
        if (currentStyle === "Stacked") {
            StackedChart(DATA, borough);
        } else {
            GroupedChart(DATA, borough);
        }
    }    
}

export default Chart;
