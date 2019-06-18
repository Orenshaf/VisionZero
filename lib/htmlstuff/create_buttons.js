export default function CreateButtons() {
    const boroughs = ["MANHATTAN", "QUEENS", "BROOKLYN", "BRONX", "STATEN ISLAND"];
    boroughs.forEach( borough => {
        const btn = document.createElement('BUTTON');
        btn.setAttribute("id", borough);
        btn.innerHTML = borough;
        document.body.appendChild(btn);
    })
}