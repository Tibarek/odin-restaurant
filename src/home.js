import latte from "./images/latte.jpg";

export const pageLoad = function () {
    const content = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    const title = document.createElement("h1");
    const homeDesc = document.createElement("div");
    const desc = document.createElement("p");
    const homeImg = document.createElement("img");

    homeDiv.classList.add("home-div");
    desc.classList.add("home-p");
    homeImg.src = latte;
    title.textContent = "Savor the Moment, Sip by Sip";
    desc.textContent = "Coffee, a popular beverage brewed from ground and roasted coffee beans, is cultivated from the tropical evergreen coffee plant and is one of the world's most consumed drinks and valuable traded commodities. ";
    
    homeDesc.appendChild(title);
    homeDesc.appendChild(desc);
    homeDiv.appendChild(homeImg);
    homeDiv.appendChild(homeDesc);
    content.appendChild(homeDiv);
}
