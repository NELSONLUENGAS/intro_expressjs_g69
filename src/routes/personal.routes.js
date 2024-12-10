const { Router } = require('express')
const PersonalController = require('../controllers/personal.controller')

const router = Router()

router.get('/', PersonalController.getAll)
router.get('/filtered', PersonalController.getFiltered)

module.exports = router;