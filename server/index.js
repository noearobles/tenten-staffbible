const loader = document.querySelector(".loader-wrapper");
const content = document.querySelector(".content");
const main = document.querySelector(".pages");
function init() {
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
    content.style.display = "none";

}
init()
let dishes = [];
const poke_card = document.getElementById("pokemonBox")


const search = document.querySelector("#pokemonName");
const input = document.getElementById("form");
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowerCaseName(string) {
    return string.toLowerCase();
}


class dish {
    constructor(name, spriteBack, price, ingredients, type, gluten) {
        this.name = name;
        this.spriteBack = spriteBack;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
        this.gluten = gluten;
    }
}
let dishArr = [
    [
        "Miso Soup",
        "misoSoup.jpeg",
        6,
        [
            ["Tofu", "Wakame", "Scallions"],

        ],
        "Vegan", "Not GF"
    ], [
        "Charred Edamame",
        "charredEdamame.jpeg",
        11,
        [
            ["Smoked Edamame", "Chili Honey Furikake", "Togarashi"],

        ],
        "Vegan", "GF"],
    [
        "Cucumber Sunomono",
        "cucumberSunomono.jpeg",
        9,
        [
            ["Cucumber", "Daikon Radish", "Sesame", "Shiso", "White Onion Rice Vinegar"],

        ],
        "Vegan", "GF"
    ], ["Seasonal Vegetable Tempura",
        "vegTempura.jpeg",
        14,
        [
            ["Ginger Kaeshi", "Tempura Fried Carrots", "Egg Plant", "Mushroom", "Squah", "Onion", "Bell Pepper"],

        ],
        "", "Not GF"], ["Blistered Shishito Peppers",
        "shishitoPeppers.jpeg",
        8,
        [
            ["Blistered Peppers", "Green Yuzukosho", "Ponzu Sauce"],

        ],
        "", ""]]





function getAllDishes() {
    dishArr.forEach((postArr) => {
        const pMonEl = document.createElement("div");
        pMonEl.classList.add("pokemon");
        const dishType = postArr[4];
        const gluten = postArr[5];
        const name = postArr[0];
        const price = postArr[2]
        const ingredients = postArr[3];
        const pokeInnerHTML = `<div class="img-container">
    <img src="${postArr[1]}" 
    alt = "${name}"/>
    </div>
    <div class="info">
    <h3 class="name">${name}</h3>
    <small class="type"><span>${dishType}</span></small>
    </div>
    <div>
    <small class="type"><span>Price: $${price}</span></small>
    </div>
    <div>
    <small class="type"><span>${gluten}</span></small>
    </div>
    <div>
    <small class="stats"><span>Ingredients:<b> ${ingredients}<b></span></small>
    </div>`;
        pMonEl.innerHTML = pokeInnerHTML;
        poke_card.appendChild(pMonEl);
    })
}

getAllDishes()


