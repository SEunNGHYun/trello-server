const router = require('express').Router();
const controller = require('../controller/container');


router.get('/', controller.get);
router.post('/create', controller.create);
router.delete('/delete', controller.delete);
router.put('/edit', controller.edit);

module.exports = router;