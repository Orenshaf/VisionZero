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
    slider.addEventListener("change", map.updateMapYear);
    sliderContainer.appendChild(slider);

    map.addSlider(sliderContainer);
}