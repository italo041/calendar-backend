const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const { getEvent, createEvent, updateEvent, deleteEvent} = require('../controllers/events')
const { validateJWT } = require('../middlewares/validate-jwt')
const { validateFields } = require('../middlewares/validate-fields') 
const { isDate } = require('../helpers/isDate')

router.use( validateJWT )

// Get events
router.get('/', getEvent)

// Create events
router.post('/', [
    check('title', 'The title is required').not().isEmpty(),
    check('start', 'The start date is required').custom( isDate),
    check('end', 'The end date is required').custom( isDate),
    validateFields
], createEvent)

// Update event
router.put('/:id', updateEvent)

// Delete event
router.delete('/:id', deleteEvent)


module.exports = router