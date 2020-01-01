const router = require('express').Router();
const controller = require('../controller/user');

router.get('/', controller.userInfo); 
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.put('/edit', controller.edit);
module.exports = router;