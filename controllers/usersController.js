const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { UserSchema } = require('../models/userModel');


const User = mongoose.model('User', UserSchema);

// const User = require("../models/userModel");

const addnewUser = (req, res) => {
    console.log(req.body);
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        const dirPath = path.join(__dirname, `..drive/${req.body.userName}`);
        (!fs.exists(dirPath) || req.body.userName)?fs.mkdir(dirPath, (err) => {
                  if (err) {
                    res.json({ msg: 'username has been taken' });
                  }
                }):res.send('User exists');
        return res.json(user);
    });
}

module.exports = addnewUser;
