let express = require('express');
let router = express.Router();
let personController = require('../controllers/personController')
let validationMiddleware = require('../validations/validationMiddleware')

router.post('/persons',
  validationMiddleware.validatePersonBody,
  personController.createPerson
)

router.put('/persons/:id',
  validationMiddleware.validatePersonBody,
  personController.updatePerson
)

module.exports = router;
