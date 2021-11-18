const Room = require('../models/rooms')

const roomController = {}

roomController.all = (req, res) => {
    Room.find()
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomController.create = (req, res) => {
    const body = req.body
    const room = new Room(body)
    room.save()
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

roomController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Room.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((room) => {
            res.json(room)
        }).catch((err) => {
            res.json(err.message)
        })
}

roomController.view = (req, res) => {
    const id = req.params.id
    Room.findById(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

roomController.destroy = (req, res) => {
    const id = req.params.id
    Room.findByIdAndDelete(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

module.exports = roomController