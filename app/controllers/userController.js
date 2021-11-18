const User = require('../models/user')

const userController = {}

// view all user
userController.all = (req, res) => {
    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

// create a user
userController.create = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

// view user
userController.view = (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

// update user
userController.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    User.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

// delete user
userController.destroy = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

module.exports = userController