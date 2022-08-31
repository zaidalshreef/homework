const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");
const Product = require("./store");

mongoose.connect("mongodb://localhost:27017/test");

const app = express();

app.get("/not-married", async(req, res) => {
    const notmarried = await User.find({ isMarried:false})
    res.send(notmarried);
});

app.get("/distributor", async(req, res) => {
    const distributor = await Product.findOneAndUpdate({},{$push : {distributors: 'distributor'}});
    res.send(distributor);
});

app.get("/delete-user", async(req, res) => {
    const user = await User.findOneAndDelete({});
    res.send(user);
});



app.listen(3000, () => console.log(`Example app listening on port !`));
