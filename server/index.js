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
const dish_card = document.getElementById("dishBox")
const generateList = (arg) => {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `<li>${arg[i]}</li>`
    }
    return items
}
const search = document.querySelector("#dishName");
const input = document.getElementById("form");
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowerCaseName(string) {
    return string.toLowerCase();
}
class dish {
    constructor(name, sprite, price, ingredients, type, gluten) {
        this.name = name;
        this.sprite = sprite;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
        this.gluten = gluten;
    }
}
let dishArr = [
    ["Miso Soup",
        "dishImages/misoSoup.jpeg",
        6,
        ["Tofu", "Wakame", "Scallions"],
        "Vegan", "Not GF"
    ],
    ["Charred Edamame",
        "dishImages/charredEdamame.jpeg",
        11,
        ["Smoked Edamame", "Chili Honey Furikake", "Togarashi"],
        "Vegan", "GF"],
    ["Cucumber Sunomono",
        "dishImages/cucumberSunomono.jpeg",
        9,
        ["Cucumber", "Daikon Radish", "Sesame", "Shiso", "White Onion Rice Vinegar"],
        "Vegan", "GF"],
    ["Seasonal Vegetable Tempura",
        "dishImages/vegTempura.jpeg",
        14,
        ["Ginger Kaeshi", "Tempura Fried Carrots", "Egg Plant", "Mushroom", "Squash", "Onion", "Bell Pepper"],
        "", "Not GF"],
    ["Blistered Shishito Peppers",
        "dishImages/shishitoPeppers.jpeg",
        8,
        ["Blistered Peppers", "Green Yuzukosho", "Ponzu Sauce"],
        "", ""],
    ["Chicken Karaage",
        "dishImages/karaage.jpeg",
        15,
        ["Fried Chicken Thighs", "Nori Honey", "Togarashi", "Kewpie Mayo"],
        "", ""],
    ["Crispy Baby Octopus",
        "dishImages/octopus.jpeg",
        18,
        ["Takoyaki", "Bonito Flakes", "Kewpie Mayo"],
        "", ""],
    ["Gyoza Tacos",
        "dishImages/tacos.jpeg",
        18,
        ["A5 or Tuna", "Aji Amarillo"],
        "", "Not GF"],
    ["Mushroom Ceviche",
        "dishImages/ceviche.jpeg",
        14,
        ["Aji Amarillo", "Lime", "Cilantro", "Avocado", "Serano", "Japanese Mushrooms (mytahkis bunashimeji)"],
        "", ""],
    ["Brussel Sprouts",
        "dishImages/brussels.jpeg",
        10,
        ["Fried Brussels", "Nato Glaze", "Pickled Root Vegetable", "Togorashi"],

        "", ""],
    ["Hamachi Carpaccio",
        "dishImages/carpaccio.jpeg",
        27,
        ["Yellowtail Sashimi", "Yuzu Truffle Vinegar", "Black Truffle", "Pink Peppercorn"],
        "", ""]
]
const getAllDishes = () => {
    const res = dishArr;
    const dish = res;
    dishes = [...dishes, dish];
    dishes.forEach((pmon) => createDishCard(pmon));
    console.log(dishes)
};
const extractDish = () => {
    const dishEls = document.getElementsByClassName("dish");
    let possibleDishes = [];
    for (let i = 1; i < dishEls.length; i++) {
        const dishEl = dishEls[i];
        possibleDishes = [...possibleDishes, dishEl];
    }
    possibleDishes.forEach((possDish) => possDish.remove());
};
// const getDish = (id) => {
//     const searchDishes = dishes.filter((touch) => console.log(touch[0]) === id);
//     extractDish();
//     searchDishes.forEach((dish) => createDishCard(dish));
// };
function createDishCard(arr) {
    arr.map((postArr) => {
        const dishEl = document.createElement("div");
        dishEl.classList.add("dish");
        const dishType = postArr[4];
        const gluten = postArr[5];
        const name = postArr[0];
        const price = postArr[2]
        const ingredients = postArr[3];
        const dishInnerHTML = `<div class="img-container">
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
    <ul>
    <small class="stats">Ingredients:<b> ${generateList(ingredients)}<b></small>
    </ul>`;
        dishEl.innerHTML = dishInnerHTML;
        dish_card.appendChild(dishEl);
    })
}
input.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    const searchedPM = searchTerm;
    if (searchedPM) {
        console.log(searchedPM);
        getDish(searchedPM);
        search.value = "";
    } else if (searchedPM === "") {
        dishes = [];
        extractDish();
        getAllDishes();
    }
});
getAllDishes()