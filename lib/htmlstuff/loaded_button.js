const LoadedButton = (map) => {
    const loader = document.getElementsByClassName("loader");
    const info = document.getElementsByClassName("info");
    loader[0].innerHTML = "";
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "Continue!";
    btn.setAttribute('class', "loaded-button");
    btn.addEventListener("click", () => {
        document.getElementById("loading").remove();
        const dashboard = document.getElementById("dashboard");
        dashboard.removeAttribute("style");
        setTimeout(() => map.updateMapBorough(), 5000);
    })
    info[0].appendChild(btn);
}

export default LoadedButton;