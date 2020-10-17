const Profile = require('../models/profile')

module.exports = {
    show,
    create,
    delete: deleteProfile,
    update,

}

async function show(req,res){
    try{
        const profiles = await Profile.findOne({owner: req.user._id});
        res.status(200).json(profiles)
    } catch(err){
        res.status(404).json(err)
    }
}

async function create(req, res){
    try{
        // req.body.user = req.user._id
        const profiles = await Profile.create(req.body);

        res.status(201).json(profiles)
    } catch(err){
        res.status(404).json(err)
    }
}

async function deleteProfile(req, res){
    try{
        const deletedProfile = await Profile.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedProfile);
    } catch(err){
        res.status(404).json(err)
    }
}

async function update(req, res){
    try{
        const updateProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new:true});
        
        res.status(200).json(updateProfile);
    } catch(err){
        res.status(404).json(err)
    }
}