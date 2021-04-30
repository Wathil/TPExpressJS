const express = require("express");
const cors = require("cors");
const db = require("./src/models");

const app = express();

const rocket = db.rocket; //
db.sequelize.sync();

db.sequelize.sync({force:true}).then(() => {
    console.log("Drop and Sync");
    init();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

function init() {
    rocket.create({
        id: 1,
        nom: "V2",
        annee: "1943",
        organisation: "NAZI",
        destination: "Londres"
    });
    rocket.create({
        id: 2,
        nom: "Saturn V",
        annee: "1959",
        organisation: "NASA",
        destination: "Lune"
    });
}

require("./src/routes/post.routes")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to TPExpressJS." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});