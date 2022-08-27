const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const ReviewSchema = mongoose.Schema({
    store: { type: Id, required: true, ref: "stores" },
    user: { type: Id, required: true, ref: "users" },
    review_number: { type: Number, default: 0, required: true },
    review_comment: { type: String, required: true },
}, { timestamps: true })

const Review = mongoose.model("reviews", ReviewSchema);

module.exports = Review;