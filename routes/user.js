const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const {userSignup} = require('../controller/user')


router.post('/sign-up',asyncHandler(userSignup))
 

 

module.exports = router;