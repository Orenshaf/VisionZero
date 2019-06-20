const LoadedButton = (map) => {
    const loader = document.getElementsByClassName("loader");
    loader[0].innerHTML = "";
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "Data has been fetched!";
    btn.addEventListener("click", () => {
        document.getElementById("loading").remove();
        const dashboard = document.getElementById("dashboard");
        dashboard.removeAttribute("style");
    })
    loader[0].appendChild(btn);
}

export default LoadedButton;