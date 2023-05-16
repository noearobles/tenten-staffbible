import Dish from "../models/dishModel";

//Get all dishses
exports.getAllDishes = (req, res) => {
    Dish.find({}, (err, dishes) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.status(200).json(dishes);
        }
    });
};

//Get a single dish by ID
exports.getDishById = (req, res) => {
    const dishId = req.params.id;
    Dish.findById(dishId, (err, dish) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else if (!dish) {
            res.status(404).json({ error: "Dish not found" });
        } else {
            res.status(200).json(dish);
        }
    });
};

//Create a new dish
exports.createDish = (req, res) => {
    const dishData = req.body;
    const newDish = new Dish(dishData);
    newDish.save((err, dish) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.status(201).json(dish);
        }
    });
};

//Update dish by ID
exports.updateDishById = (req, res) => {
    const dishId = req.params.id;
    const dishData = req.body;
    Dish.findByIdAndUpdate(dishId, dishData, { new: true }, (err, dish) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else if (!dish) {
            res.status(404).json({ error: "Dish not found" });
        } else {
            res.status(200).json(dish);
        }
    });
};

//Delete dish by ID
exports.deleteDishById = (req, res) => {
    const dishId = req.params.id;
    Dish.findByIdAndRemove(dishId, (err, dish) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else if (!dish) {
            res.status(404).json({ error: "Dish not found" });
        } else {
            res.status(204).json({});
        }
    });
};
