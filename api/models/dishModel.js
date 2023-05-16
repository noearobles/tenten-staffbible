import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
});

export default mongoose.model("Dish", dishSchema);
