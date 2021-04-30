const controller = require("../controllers/post.controller");

module.exports = function (app) {
    app.get("/api/rockets", controller.getAllRockets);
    app.get("/api/rockets/:id", controller.getRocketById);
    app.post("/api/rockets", controller.createRocket);
    app.put("/api/rockets/:id", controller.updateRocket);
    app.delete("/api/rockets/:id", controller.deleteRocket);
}