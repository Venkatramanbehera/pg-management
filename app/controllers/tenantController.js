const Tenant = require('../models/tenant')

const tenantController = {}

tenantController.all = (req, res) => {
    Tenant.find()
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

tenantController.create = (req, res) => {
    const body = req.body
    const tenant = new Tenant(body)
    tenant.save()
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err)
        })
}

tenantController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Tenant.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err)
        })
}

tenantController.view = (req, res) => {
    const id = req.params.id
    Tenant.findById(id)
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

tenantController.destroy = (req, res) => {
    const id = req.params.id
    Tenant.findByIdAndDelete(id)
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err.message)
        })
}


module.exports = tenantController