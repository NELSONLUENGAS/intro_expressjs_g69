const { Router } = require('express');

const { handleDelete, handleUpdate } = require('../controllers/evento.controller');
const router = Router()


router.delete("/delete/:id", handleDelete)
router.put("/update/:id", handleUpdate)


module.exports = router;