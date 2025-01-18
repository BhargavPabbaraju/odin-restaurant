import "./menu-styles.css";
import meatImage from '../assets/meat.jpg';
import shrimpRiceImage from '../assets/shrimp_rice.jpg';
import oshirukoImage from '../assets/oshiruko.png';
import smileImage from '../assets/smile.png';
import weddingCakeImage from '../assets/wedding_cake.png';
import semlaImage from '../assets/semla.png';

const menuItems = [
    {
        name: "Meat",
        image: meatImage,
        description: "Meat consists of animal flesh. It has been Monkey D. Luffy's favorite food since childhood. Baratie serves the finest quality meat.",
        price: 500,            
    },
    {
        name: "Shrimp fried rice",
        image: shrimpRiceImage,
        description: "Fried rice with shrimp as its main ingredient is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables and other seafood.",
        price: 300,        
    },
    {
        name: "Wedding cake",
        image: weddingCakeImage,
        description: "A wedding cake is a traditional cake served at wedding receptions. The ingredients for the cake include massive amounts of non-homogenized milk, sugar beets, bananas, roasted soybean powder, and yogurt",
        price: 2000,
    },
    {
        name: "Oshiruko",
        image: oshirukoImage,
        description: "Oshiruko is a sweet porridge made of azuki beans served in a bowl with mochi. It is a traditional desert in Wano.",
        price: 400,
    },
    {
        name: "Smile fruit",
        image: smileImage,
        description: "SMILE fruits are deliberately used as a food source at Ebisu Town in Wano Country (passed off as ordinary fruits to most of the population). Most SMILE fruits grant absolutely no powers to eaters and instead leave them unable to express negative emotions as a side-effect.",
        price: 150,        
    },
    {
        name: "Semla",
        image: semlaImage,
        description: "Semla is a type of sweet roll from Elpbaph. It consist of a cardamom-spiced wheat bread bun which has its top cut off and is then filled with a mixture of milk, almond paste, topped with whipped cream. The cut-off top serves as a lid and is dusted with icing sugar.",
        price: 600,        
    },
];


export function renderContent(){
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    menuItems.forEach((food)=>{
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const menuName = document.createElement("p");
        menuName.innerText = food.name;

        const menuImage = document.createElement("img");
        menuImage.src = food.image;

        menuItem.appendChild(menuName);
        menuItem.appendChild(menuImage);

        menu.appendChild(menuItem);

    })
    
    content.appendChild(menu);

}
