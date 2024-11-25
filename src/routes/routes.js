const { Router } = require('express')
const { handleCreateTrip, handleGetTrips } = require('../controllers/index')

const router = Router()

router.post("/viajes", handleCreateTrip)
router.get("/viajes", handleGetTrips)

module.exports = router;