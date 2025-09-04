import { pageLoad } from "./home.js";
import {menu} from "./menu.js"
import { about } from "./about.js";


const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
    content.textContent = "";
    pageLoad();
});

menuBtn.addEventListener("click", () => {
    content.textContent = "";
    menu();
});

aboutBtn.addEventListener("click", () => {
    content.textContent = "";
    about();
});

pageLoad();


