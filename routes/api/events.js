const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const eventsCtrl = require('../../controllers/events');

router.get('/events', eventsCtrl.index)
router.get('/events/:id', eventsCtrl.show)
router.post('/events', eventsCtrl.create);
router.delete('/events/:id', eventsCtrl.delete);
router.put('/events/:id', eventsCtrl.update),



module.exports = router;