const rocketModel = require("../models/").rocket;

module.exports = {

    async getAllRockets(req, res) {
        rocketModel.findAll()
            .then(data => {
                if (data) res.status(201).send(data);
                else res.status(404).send("No Rocket");
            })
            .catch(err => {
                res.status(500).send({message: err.message || "Some error occurred while retrieving rockets."});
            });
    },
    async getRocketById(req, res) {
        rocketModel.findByPk(req.params.id
        ).then(data => {
            if (data) res.status(201).send(data);
            else res.status(404).send("No Rocket");
        }).catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving a rocket." });
        });
    },
    async createRocket(req, res) {
        rocketModel.create({
            nom: req.body.nom,
            annee: req.body.annee,
            organisation: req.body.organisation,
            destination: req.body.destination
        }).then(rocketCreated => {
            res.status(201).send(rocketCreated)
        }).catch(err => {
            res.status(400).send({ message: err.message || "Some error occurred while retrieving rockets." });
        });
    },
    async updateRocket(req, res) {
        rocketModel.findByPk(req.params.id)
            .then(rocketByPK => {
                if (rocketByPK) {
                    rocketByPK.update({
                        nom: req.body.nom, // body
                        annee: req.body.annee, // body
                        organisation: req.body.organisation, // body
                        destination: req.body.destination // body
                    }).then(updatedRocket => {
                        res.status(201).send(updatedRocket);
                    }).catch(err => {
                        res.status(404).send({ message: err.message || "Some error occurred while retrieving rockets." });
                    })
                }
            }).catch(err => {
                res.status(404).send({ message: err.message || "Some error occurred while retrieving rockets." });
            });
    },
    async deleteRocket(req, res) {
        rocketModel.findByPk(req.params.id)
        .then(rocketCollection => {
            if (rocketCollection) {
                rocketCollection.destroy();
                res.status(201).send("Deleted");
            }
            else
                re.status(404).send("Rocket Not Found")
        }).catch(err => {
            console.log(err);
            res.status(400).send({ message: err.message || "Some error occurred while retrieving rockets." });
        })
    }
};