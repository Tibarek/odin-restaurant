export const menu = function() {
    const menuDiv = document.createElement("div");
    const foodList = document.createElement("p");
    const content = document.querySelector("#content");

    foodList.textContent = "Buna, Coffee";
    menuDiv.appendChild(foodList);
    content.appendChild(menuDiv);
}