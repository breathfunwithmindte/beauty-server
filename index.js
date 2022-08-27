const express = require("express");


const app = express();
app.use(require("cors")());
app.listen(5000);

app.get("/", (req, res) => {
    setTimeout(() => {
        res.status(400).json({ message: "okkk", nana: "nana" });
    }, 1000);
})