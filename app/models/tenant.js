const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        required: true
    },
    adhar: {
        type: String,
        required: true
    },
    roomId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    buildingId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Tenant = mongoose.model('Tenant', tenantSchema)

module.exports = Tenant