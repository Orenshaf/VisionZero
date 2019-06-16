import StackedChart from './stacked_chart';
import GroupedChart from './grouped_chart';

let currentBorough = "NYC";
let currentStyle = "Stacked";
let newStyle;

const Chart = (DATA, borough = currentBorough) => {
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
            StackedChart(DATA, borough)
        } else {
            if (newStyle === "Stacked") {
                currentStyle = newStyle
                // remove these once transitions work
                if (document.getElementsByTagName("svg").length > 0) {
                    const removeSVG = document.getElementsByTagName("svg");
                    removeSVG[0].parentElement.removeChild(removeSVG[0]);
                }
                StackedChart(DATA, borough);
            } else {
                currentStyle = newStyle;
                // remove these once transitions work
                if (document.getElementsByTagName("svg").length > 0) {
                    const removeSVG = document.getElementsByTagName("svg");
                    removeSVG[0].parentElement.removeChild(removeSVG[0]);
                }
                GroupedChart(DATA, borough);
            }
        }
    } else {
        if (document.getElementsByTagName("svg").length > 0) {
            const removeSVG = document.getElementsByTagName("svg");
            removeSVG[0].parentElement.removeChild(removeSVG[0]);
        }
        StackedChart(DATA, borough)
    }    
}

export default Chart;
