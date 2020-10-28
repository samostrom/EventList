
const { Profiler } = require('react')
const Event = require('../models/event')
const User = require('../models/user')
const Profile = require('../models/profile')

module.exports = {
    index,
    show,
    create,
    delete: deleteEvent,
    update,
}

async function index(req, res){
    try {
        const events = await Event.find({})
        
        res.status(200).json(events)
        
    } catch(err){
        res.status(404).json(err)
    }
}

async function show(req,res){
    try{
        const events = await Event.findById(req.params.id);

        res.status(200).json(events)
    } catch(err){
        res.status(404).json(err)
    }
}

async function create(req, res){
    try{
        const events = await Event.create(req.body);
        const profile = await Profile.findOne(req.params.id)
        events.host = profile
        await events.save()
        res.status(201).json(events)
    } catch(err){
        res.status(404).json(err)
    }
}

async function deleteEvent(req, res){
    try{
        const eventDelete = await Event.findByIdAndRemove(req.params.id);

        res.status(200).json(eventDelete)
    } catch(err){
        res.status(404).json(err)
    }
}

async function update(req, res){
    try{
        const updateEvent = await Event.findByIdAndUpdate(req.params.id);

        res.status(200).json(updateEvent)
    } catch(err){
        res.status(404).json(err)
    }
}