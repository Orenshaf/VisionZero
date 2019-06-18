export default function Header(borough) {
    if (document.getElementById('borough-header')) {
        const header = document.getElementById('borough-header');
        header.parentElement.removeChild(header);
    }
    const header = document.createElement("H1");
    header.setAttribute("id", "borough-header");
    header.innerHTML = `${borough}`;
    document.getElementById("header").appendChild(header);
}