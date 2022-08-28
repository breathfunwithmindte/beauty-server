const express = require("express");


const app = express();
app.use(require("cors")());
app.listen(5000);
app.use("/public", express.static(require("path").resolve() + "/public"))

app.get("/", (req, res) => {
    setTimeout(() => {
        res.status(400).json({ message: "okkk", nana: "nana" });
    }, 1000);
})

const salons_gn = require("./data/salons")
let salons = [];

salons = salons_gn();

setInterval(() => {
    salons = salons_gn();
}, 100000);

app.get("/api/v1/salons/read", (req, res) => {
   let beautydeals;
   if(typeof req.query.beautydeals === "string") {
    beautydeals = [req.query.beautydeals]
   }
   if(req.query.beautydeals instanceof Array === true) {
    beautydeals = req.query.beautydeals
   }
   const items = salons.filter(f => {
    let result = [];
    if(beautydeals) {
        console.log(f.beautydeals, beautydeals)
        result.push(f.beautydeals.some(s => beautydeals.some(ss => ss == s)))
    }
    if(req.query.availability == "0" || req.query.availability == "1") {
        result.push(f.availability === true);
    }
    if(req.query.category) {
        result.push(f.services.some(s => s == req.query.category))
    }
    return !result.some(s => s == false)
   })
   return res.status(200).json({ message: "", data: items.slice(0, 100), total: items.length })
})