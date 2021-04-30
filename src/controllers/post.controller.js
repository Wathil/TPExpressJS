const rocketModel = require("../models/").rocket;

module.exports = {

    async getAllRockets(req, res) {
        try {
            const rocketCollection = await rocketModel.findAll();
            if (rocketCollection)
                res.status(201).send(rocketCollection);
            else
                res.status(404).send("No Rocket")
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async getRocketById(req, res) {
        try {
            const rocketByPK = await rocketModel.findByPk(req.params.id);
            if (rocketByPK)
                res.status(201).send(rocketByPK);
            else
                res.status(404).send("Post Not Found")
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async createRocket(req, res) {
        try {
            const rocketCreated = await rocketModel.create({
                nom: req.body.nom,
                annee: req.body.annee,
                organisation: req.body.organisation,
                destination: req.body.destination
            });
            res.status(201).send(rocketCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
    async updateRocket(req, res) {
        try {
            const rocketByPK = await rocketModel.findByPk(req.params.id);
            if (rocketByPK) {
                const updatedRocket = await rocketByPK.update({
                    nom: req.body.nom, // body
                    annee: req.body.annee, // body
                    organisation: req.body.organisation, // body
                    destination: req.body.destination // body
                })
                res.status(201).send(updatedRocket);
            }
            else {
                res.status(404).send("Rocket " + id + "Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
    async deleteRocket(req, res) {
        try {
            const rocketCollection = await rocketModel.findByPk(req.params.id);
            if (rocketCollection) {
                rocketCollection.destroy();
                res.status(201).send("Deleted");
            }
            else
                re.status(404).send("User Not Found")
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }
};