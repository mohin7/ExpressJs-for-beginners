const express = require("express");
const app = express();

const userRoutes= require("./routes/userRoute.routes");
app.use(userRoutes);

app.get("/", (req, res) => {
    res.append("username", "fzp");
    res.status(200).sendFile("home.html",{root:"./views/"});
});

app.get("/about", (req, res) => {
    res.cookie("id", "170042039");
    res.send("<H1>About page</H1>")
});

app.get("/contacts", (req, res) => {
    res.cookie("username", "fzp");
    res.clearCookie("username");
    res.json({ name: "fzp", profession: "n/a" });
    res.send("<H1>Contacts page</H1>")
    
});

app.use((req, res) => {
    res.send("Error 404! Page doesn't exist");
});

module.exports = app;