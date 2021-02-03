const { Router } = require('express')
const { check } = require('express-validator') 
const { validateFields } = require('../middlewares/validate-fields');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt')
const router = Router();

// Routes

router.post('/new', 
[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
    validateFields
]
,createUser)

router.post('/',
[
   check('email', 'El email es obligatorio').isEmail(),
   check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}) ,
   validateFields
],
 loginUser)


router.get('/renew', validateJWT, renewToken)

module.exports = router