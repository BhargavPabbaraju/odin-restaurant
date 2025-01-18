import * as home from "./home";
import * as menu from "./menu";
import * as about from "./about";
import "./styles.css";

const navOptions = ["home","menu","about"];


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
        case "about":{
            about.renderContent();
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

