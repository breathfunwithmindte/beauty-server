const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const StoreSchema = mongoose.Schema({
    user: { type: Id, required: true, ref: "users" },
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    categories: [],
    services: [String]
}, { timestamps: true })

const Store = mongoose.model("stores", StoreSchema);

module.exports = Store;