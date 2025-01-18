import mainImage from '../assets/image.png';


export function renderContent(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.innerText = "Baratie Restaurant";
    title.classList.add("custom-font");
    content.appendChild(title);

    const image = document.createElement("img");
    image.src = mainImage;
    image.classList.add("main-image");
    content.appendChild(image);

    const description = document.createElement("p");
    description.innerText = "The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region of the East Blue, close to the Paradise half of the Grand Line.";
    content.appendChild(description);

}
