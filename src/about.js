import sini from "./images/sini.jpeg";

export const about = function() {
    const aboutDiv = document.createElement("div");
    const aboutHeader = document.createElement("h1");
    const aboutP = document.createElement("p");
    const aboutImg = document.createElement("img");
    const content = document.querySelector("#content");
    
    aboutDiv.classList.add("about-div");
    aboutHeader.textContent = "About Fut Cofee";
    aboutP.textContent = "Ethiopia is the birthplace of Arabica coffee, the world's fifth-largest producer, and a global leader in domestic consumption and export revenue. Its coffees are renowned for complex flavors, from floral and bright notes in Yirgacheffe to fruity and winey profiles in Sidamo and Harrar. Coffee is integral to Ethiopian culture, with the traditional coffee ceremony, or 'buna,' a cherished ritual involving roasting, grinding, and serving coffee in small cups alongside snacks like popcorn and incense.";
    aboutImg.src = sini;

    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutImg);
    aboutDiv.appendChild(aboutP);
    content.appendChild(aboutDiv);
}