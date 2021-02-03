const Event = require('../models/Event')

const getEvent = async (req, res) => {

    const events = await Event.find({}).populate('user', 'name')

    res.json({
        ok: true,
        events
    })
}

const createEvent = async (req, res) => {

    const event = new Event( req.body )

    try {
        event.user = req.uid

        const eventSaved = await event.save()

        res.json({
            ok: true,
            event: eventSaved
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk with the admin'
        })
    }
 
}

const updateEvent = async (req, res) => {

    const eventId = req.params.id
    const uid = req.uid

    try {
        const event = await Event.findById( eventId )

        if (!event) {
            res.status(404).json({
                ok: false,
                msg: 'Event not exist'
            })
        }

        if ( event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'Without privileges'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new:true } )

        res.json({
            ok: true,
            event: eventUpdated
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk with the admin'
        })
    }
    
}

const deleteEvent = async (req, res) => {

    const eventId = req.params.id
    const uid = req.uid
    
    try {

        const event = await Event.findById(eventId)

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: "Event not exist"
            })
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "Without privileges"
            })
        }

        await Event.findByIdAndDelete(eventId)
 
        res.json({
            ok: true
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk with the admin'
        })
    }

    
}


module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}