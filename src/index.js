import * as home from "./home";
import * as menu from "./menu";
import * as contact from "./contact";
import "./styles.css";

const navOptions = ["home","menu","contact"];


function navigate(to){
    const content = document.getElementById("content");
    content.replaceChildren();
    switch(to){
        case "home":{
            home.renderContent();
            break;
        }
        case "menu":{
            menu.renderContent();
            break;
        }
        case "contact":{
            contact.renderContent();
            break;
        }
        default:{
            throw Exception("Invalid navigation button id");
        }
    }


}

function addEventListeners(){
    navOptions.forEach((option)=> {
        const button = document.getElementById(option);
        button.addEventListener("click",()=>{navigate(option)});
    });
}



addEventListeners();
home.renderContent();

