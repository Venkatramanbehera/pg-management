const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/pgmanagement')
        .then(() => {
            console.log('connected to db')
        }).catch((err) => {
            console.log(err.message)
        })
}

module.exports = configureDB