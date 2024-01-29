const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// Create a User Using: POST "/api/auth/createuser." No login required
router.post('/',[
    body('name','Enter a Valid name').isLength({ min: 3 }),
    body('email','Enter a Valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
      })
    //   .then(user => res.json(user))
    //   .catch(err => {console.log(err)
    // res.json({error: 'please enter a unique value for email', message: err.message})})
    res.json({"Nice":"nice"})
});

module.exports = router;     