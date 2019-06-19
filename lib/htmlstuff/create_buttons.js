export default function CreateButtons() {
    const boroughs = ["MANHATTAN", "QUEENS", "BROOKLYN", "BRONX", "STATEN ISLAND"];
    boroughs.forEach( borough => {
        const btn = document.createElement('BUTTON');
        btn.setAttribute("id", borough);
        btn.setAttribute("style", "background: gray");
        btn.innerHTML = borough;
        document.getElementById("buttons").appendChild(btn);
    })
}