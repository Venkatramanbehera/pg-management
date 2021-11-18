const Building = require('../models/buildings')

const buildingController = {}

buildingController.all = (req, res) => {
    Building.find()
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

buildingController.create = (req, res) => {
    const body = req.body
    const building = new Building(body)
    building.save()
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

buildingController.view = (req, res) => {
    const id = req.params.id
    Building.findById(id)
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

buildingController.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Building.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

buildingController.destroy = (req, res) => {
    const id = req.params.id
    Building.findByIdAndDelete(id)
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = buildingController