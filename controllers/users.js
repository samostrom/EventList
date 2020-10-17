const Profile = require('../models/profile')
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { Profiler } = require('react');

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  const profile = new Profile({
    picture: '',
    name: req.body.name,
    bio:  '',
    friends: [],
  })
  try {
    await user.save();
    profile.owner = user._id
    await profile.save();
    const token = createJWT(user);
    res.json({token});
    
  } catch (err) {
    
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}

