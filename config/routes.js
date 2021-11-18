const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')
const buildingController = require('../app/controllers/buildingController')
const roomController = require('../app/controllers/roomController')
const tenantController = require('../app/controllers/tenantController')

// owner api
router.get('/api/user', userController.all)
router.post('/api/user', userController.create)
router.get('/api/user/:id', userController.view)
router.put('/api/user/:id', userController.update)
router.delete('/api/user/:id', userController.destroy)

// buildings api
router.get('/api/building', buildingController.all)
router.post('/api/building', buildingController.create)
router.get('/api/building/:id', buildingController.view)
router.put('/api/building/:id', buildingController.update)
router.delete('/api/building/:id', buildingController.destroy)

// rooms api
router.get('/api/room', roomController.all)
router.post('/api/room', roomController.create)
router.get('/api/room/:id', roomController.view)
router.put('/api/room/:id', roomController.update)
router.delete('/api/room/:id', roomController.destroy)

// tenant
router.get('/api/tenant', tenantController.all)
router.post('/api/tenant', tenantController.create)
router.get('/api/tenant/:id', tenantController.view)
router.put('/api/tenant/:id', tenantController.update)
router.delete('/api/tenant/:id', tenantController.destroy)

module.exports = router