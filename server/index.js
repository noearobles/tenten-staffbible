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
        "", ""], ["Tuna Tatahki",
        "dishImages/tatahki.jpeg",
        27,
        ["Tuna filet seared on robata charcoal", "Avocado Crema", "Ginger Garlic", "Crispy Shallots", "Ryu Chili Oil", "Yuzu Ginger Soy/Sudachi"],
        "", ""], ["Wagyu Beef Tartare",
        "dishImages/taratar.jpeg",
        25,
        ["Snake River Farms Tenderloin", "Japanese Mustard Aioli", "Shredded Tuna", "Quail Egg", "Wonton Crackers"],
        "", ""], ["Braised Mushroom Maki",
        "dishImages/mushroom.jpeg",
        14,
        ["Braised Miyatahki and Shitahki Mushrooms", "Kombu Aioli", "Crispy Shallots"],
        "", ""], ["Scallop Maki",
        "dishImages/scallop.jpeg",
        18,
        ["Raw Scallop", "Kewpie Mayo", "Tempura Flakes", "Seasonal Truffle", "Yuzu Vinagrette"],
        "", ""], ["Salmon Maki",
        "dishImages/salmon.jpeg",
        15,
        ["Salmon", "Avocado", "Shiso", "Brulèed Citrus", "Pickled Furrikake"],
        "", ""], ["Spicy Tuna Maki",
        "dishImages/stuna.jpeg",
        16,
        ["Tuna", "Cucumber", "Avocado", "Sesame Seeds", "Tempura Flakes", "Spicy Mayo"],
        "", ""], ["Hamachi Maki",
        "dishImages/hamachi.jpeg",
        16,
        ["Yellow Tail", "Charred SCallions", "Jalapeno Ponzu Relish", "Crunchy Rice Pearls", "Micro-Cilantro"],
        "", ""], ["Toro Maki",
        "dishImages/toro.jpeg",
        17,
        ["Bluefin Tuna Belly", "Ginger Scallion Oil", "Wasabi", "Fresh Mint", "Pickled Daikon"],
        "", ""], ["Chirashi Maki",
        "dishImages/chirashi.jpeg",
        19,
        ["Riceless Roll with Tuna", "Salmon", "Hamachi", "Snow Crab", "Kazami Wasabi", "Shredded Tuna", "Bonito Flakes", "Dashi Sauce"],
        "", ""], ["Snow Crab Maki",
        "dishImages/snowcrab.jpeg",
        24,
        ["Snow Crab Mix", "Citrus", "Herbs", "Avocado", "Cucumber", "Tobiko (Flying Fish Roe)"],
        "", ""], ["BBQ Toro Maki",
        "dishImages/bbq.jpeg",
        24,
        ["BBQ Seared Toro", "Futomaki (soy paper)", "Snow Crab", "Shibezuke", "Avocado", "Shiso", "Black Pepper", "Chives"],
        "", ""], ["Madai Nigiri",
        "dishImages/madai.jpeg",
        14,
        ["Red Bream", "Charred Skin", "Green Yuzukosho"],
        "", "GF"], ["Shima Aji Nigiri",
        "dishImages/shima.jpeg",
        14,
        ["Striped Jack", "Sake Ponzu", "Orange Salt"],
        "", "GF"],["Hirame Nigiri",
        "dishImages/hirame.jpeg",
        14,
        ["Olive Flounder", "Grilled Fin Muscle"],
        "", "GF"],["Akami Nigiri",
        "dishImages/akami.jpeg",
        11,
        ["Lean Tuna", "Pickled Wasabi"],
        "", "GF"],["Sake Nigiri",
        "dishImages/sake.jpeg",
        12,
        ["Salmon", "Ponzu", "Celery","Sesame"],
        "", "GF"],["Hamachi Nigiri",
        "dishImages/hamachinigiri.jpeg",
        12,
        ["Yellowtail", "Grated Ginger", "Scallions"],
        "", "GF"],["Mejina Nigiri",
        "dishImages/mejina.jpeg",
        14,
        ["Rudder", "Wasabi", "Matcha Salt"],
        "", "GF"],["Ikura Nigiri",
        "dishImages/ikura.jpeg",
        12,
        ["Salmon Roe", "Cucumber Layer", "Nikir","Cucumber Garnish","Kizame"],
        "", "GF"],["Inada Nigiri",
        "dishImages/inada.jpeg",
        15,
        ["Amberjack", "Cilantro","Yuzu","Serrano","Yellow Kosho", "Lime Salt"],
        "", "GF"],["Uni Santa Barbara Nigiri",
        "dishImages/uni.jpeg",
        22,
        ["Santa Barabara", "Kaluga Caviar", "Wasabi"],
        "", "GF"],["Itoyoridai Nigiri",
        "dishImages/ito.jpeg",
        19,
        ["Threadfin Bream", "Brûléed Strawberry", "Lemon Zest"],
        "", "GF"],["Toro Nigiri",
        "dishImages/toronigiri.jpeg",
        16,
        ["Pacific BLuefin Belly", "Wasabi", "Nikir","w/ or w/o Kalauga Caviar"],
        "", "GF"],["Sake Toro Nigiri",
        "dishImages/saketoro.jpeg",
        17,
        ["Salmon Belly", "Citrus Oil", "Tomato","Ikura"],
        "", "GF"],["Hamachi Toro Nigiri",
        "dishImages/hamachitoro.jpeg",
        16,
        ["Yellowtail Belly", "Charcoal Oil", "Robata Salt"],
        "", "GF"],["O-toro Nigiri",
        "dishImages/otoro.jpeg",
        19,
        ["Lighlty Seared Super Fatty Bluefin Belly", "Red Yuzukosho"],
        "", "GF"],["A5 Wagyu Nigiri",
        "dishImages/a5.jpeg",
        24,
        ["A5 Wagyu", "Sweet Soy", "Scallion"],
        "", "GF"],["10 Piece Sashimi Selection",
        "dishImages/10piece.jpeg",
        62,
        ["Chef's Selection"],
        "", "GF"],["18 Piece Sashimi Selection",
        "dishImages/18piece.jpeg",
        86,
        ["Chef's Selection"],
        "", "GF"],["Grilled Squash",
        "dishImages/squash.jpeg",
        22,
        ["Kubuoca Squash","Black Garlic Sauce","Baby Spinach","Shallots","Pumpkin Seed Crumple"],
        "", ""],["Short Rib",
        "dishImages/shortrib.jpeg",
        42,
        ["Snake River Farms Short Rib","Cooked Sou Vide for 72 Hours","Pickled Japanese Mushrooms","Micro Shiso","Japanese BBQ Sauce"],
        "", ""],["Wagyu New York Strip",
        "dishImages/nystrip.jpeg",
        72,
        ["Snake River Farms 10oz New York Strip","Grilled Zuccini","Summer Squash","Shiso Salsa Verde","Japanese BBQ Sauce"],
        "", ""],["A5 Wagyu Strip",
        "dishImages/wagyustrip.jpeg",
        185,
        ["10oz A5 Wagyu Strip","Shiso Wasabi Gremolata","Wasabi Peppercorn Cream","Veal Truffle Demi-glaze","Rosemary Bay Leaf","Citrus Salt"],
        "", ""],["A5 Wagyu Ribeye",
        "dishImages/ribeye.jpeg",
        250,
        ["22 oz A5 Wagyu Ribeye","Shiso Wasabi Gremolata","Wasabi Peppercorn Cream","Veal Truffle Demi-glaze","Rosemary Bay Leaf","Citrus Salt"],
        "", ""]
]
const getAllDishes = () => {
    const res = dishArr;
    const dish = res;
    dishes = [...dishes, dish];
    dishes.forEach((dish) => createDishCard(dish));
    console.log(dishes)
};
const extractDish = () => {
    const dishEls = document.getElementsByClassName("dish");
    let possibleDishes = [];
    for (let i = 0; i < dishEls.length; i++) {
        const dishEl = dishEls[i];
        possibleDishes = [...possibleDishes, dishEl];
    }
    possibleDishes.forEach((possDish) => possDish.remove());
};
// const getDish = (id) => {
//     const searchDishes = dishes.filter((touch) => touch.name === id);
//     extractDish()
//     searchDishes.forEach((dish) => createDishCard(dish));
// };
function createDishCard(arr) {
    arr.forEach((postArr) => {
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
    const searchedDish = searchTerm;
    if (searchedDish) {
        getDish(searchedDish);
        search.value = "";
    } else if (searchedDish === "") {
        dishes = [];
        extractDish();
        getAllDishes();
    }
});
getAllDishes()