const { Router } = require('express')
const router = Router()

const { handleCreateTrip, handleGetTrips, handleUpdateTrip, handleDeleteTrip } = require('../controllers/index')


router.post("/", handleCreateTrip)
router.get("/", handleGetTrips)

router.put("/:id", handleUpdateTrip)
router.delete("/:id", handleDeleteTrip)

module.exports = router;