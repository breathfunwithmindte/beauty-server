const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const TIMES = [
    "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30", "06:30", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
]

const StoreSchema = mongoose.Schema({
    user: { type: Id, required: true, ref: "users" },
    store: { type: Id, required: true, ref: "stores" },
    items: [{
        product: { type: Id, required: true, ref: "products" },
        filters: [],
        description: String
    }],
    date: { type: Date, required: true },
    time: { type: String, required: true  },
}, { timestamps: true })

const Store = mongoose.model("stores", StoreSchema);

module.exports = Store;

function time_reserved_until ()
{
    let time = this.time // 17:00 - 17:30
    let service_time = this.service_time // 17:30
}