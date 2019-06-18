import StackedChart from './stacked_chart';
import GroupedChart from './grouped_chart';
import Header from '../htmlstuff/header';

let currentBorough = "MANHATTAN";

const Chart = (DATA, borough = currentBorough) => {
    Header(borough);
    let style;
    const radios = document.getElementsByTagName("INPUT");
    for (let radio of radios) {
        debugger;
        if (radio.checked) {
            style = radio.getAttribute("id");
        }
    }
    
    debugger;

    if (currentBorough !== borough) {
            if (document.getElementsByTagName("svg").length > 0) {
                const removeSVG = document.getElementsByTagName("svg");
                removeSVG[0].parentElement.removeChild(removeSVG[0]);
            }
            currentBorough = borough;
            if (style === "Stacked") {
                StackedChart(DATA);
            } else {
                GroupedChart(DATA);
            }
    } else {
        if (document.getElementsByTagName("svg").length > 0) {
            const removeSVG = document.getElementsByTagName("svg");
            removeSVG[0].parentElement.removeChild(removeSVG[0]);
        }
        if (style === "Stacked") {
            StackedChart(DATA, borough);
        } else {
            GroupedChart(DATA, borough);
        }
    }    
    //  else {
    //         if (newStyle === "Grouped") {
    //             currentStyle = newStyle
    //             // remove these once transitions work
    //             if (document.getElementsByTagName("svg").length > 0) {
    //                 const removeSVG = document.getElementsByTagName("svg");
    //                 removeSVG[0].parentElement.removeChild(removeSVG[0]);
    //             }
    //             GroupedChart(DATA);
    //         } else {
    //             currentStyle = newStyle;
    //             // remove these once transitions work
    //             if (document.getElementsByTagName("svg").length > 0) {
    //                 const removeSVG = document.getElementsByTagName("svg");
    //                 removeSVG[0].parentElement.removeChild(removeSVG[0]);
    //             }
    //             StackedChart(DATA);
    //         }
    //     }
    // } 
}

export default Chart;
