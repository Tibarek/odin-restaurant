export const pageLoad = function () {
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const desc = document.createElement("p");
    
    title.textContent = "Fut Coffee";
    desc.textContent = "The place to make tasty memories!";
    content.appendChild(title);
    content.appendChild(desc);
}
