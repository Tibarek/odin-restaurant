export const about = function() {
    const aboutDiv = document.createElement("div");
    const aboutUs = document.createElement("p");
    const content = document.querySelector("#content");

    aboutUs.textContent = "From 1990 to present!";
    aboutDiv.appendChild(aboutUs);
    content.appendChild(aboutDiv);
}