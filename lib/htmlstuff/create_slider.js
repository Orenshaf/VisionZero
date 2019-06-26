export default function CreateSlider(map) {
    const sliderContainer = document.createElement("DIV");
    sliderContainer.setAttribute("id", "slider-container");
    const slider = document.createElement("INPUT");
    slider.setAttribute("type", "range");
    slider.setAttribute("id", "slider");
    slider.setAttribute("min", 2013);
    slider.setAttribute("max", 2018);
    slider.setAttribute("step", 1);
    slider.setAttribute("list", "steplist");
    slider.addEventListener("change", map.updateMapBorough);
    const sliderLabels = document.createElement("UL");
    sliderLabels.setAttribute("id", "slider-labels");
    const years = ["2013", "2014", "2015", "2016", "2017", "2018"];
    years.forEach(year => {
        let yearLi = document.createElement("LI");
        yearLi.innerHTML = year;
        sliderLabels.appendChild(yearLi);
    })
    sliderContainer.appendChild(sliderLabels);
    sliderContainer.appendChild(slider);

    map.addSlider(sliderContainer);
}