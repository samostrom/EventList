const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/profiles');

router.get('/profiles', profilesCtrl.show);
router.post('/profiles', profilesCtrl.create);
router.delete('/profiles/:id', profilesCtrl.delete);
router.put('/profiles/:id', profilesCtrl.update);


module.exports = router;