const { Router } = require('express')
const MedicamentosController = require('../controllers/medicamentos.controller')

const router = Router()

router.get('/', MedicamentosController.getAll)
router.get('/filtered', MedicamentosController.getFiltered)

module.exports = router;