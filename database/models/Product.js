const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const ProductSchema = mongoose.Schema({
    store: { type: Id, required: true, ref: "stores" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    filters: [],
}, { timestamps: true })

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;