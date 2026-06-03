import "./styles.css";
import Homepage from "./home.js";
import Menupage from "./menu.js";
import Aboutpage from "./about.js";

const content = document.getElementById("content");
content.appendChild(Homepage());

const home_button = document.getElementById("home-btn");
const menu_btn = document.getElementById("menu-btn");
const about_btn = document.getElementById("about-btn");


home_button.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(Homepage());
})

menu_btn.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(Menupage());
})


about_btn.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(Aboutpage());
})

