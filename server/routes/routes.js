let express = require('express');
let router = express.Router();
let personController = require('../controllers/personController')
let validationMiddleware = require('../validations/validationMiddleware')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createPerson',
  validationMiddleware.validatePersonBody,
  personController.createPerson
)

module.exports = router;
