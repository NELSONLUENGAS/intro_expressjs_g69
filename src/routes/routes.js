const { Router } = require('express')
const { handleCreateTrip, handleGetTrips, handleUpdateTrip, handleDeleteTrip } = require('../controllers/index')

const router = Router()

router.post("/viajes", handleCreateTrip)
router.get("/viajes", handleGetTrips)

router.put("/viajes/:id", handleUpdateTrip)
router.delete("/viajes/:id", handleDeleteTrip)

module.exports = router;