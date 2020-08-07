const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { UserSchema } = require('../models/userModel');


const User = mongoose.model('User', UserSchema);


const addnewUser = (req, res, callback) => {
    let newUser = new User(req.body);
    console.log(req.body);
    console.log(newUser);
    let username = req.body.userName;
    let password = req.body.password;
    if (!username || !password) {
      res.json({ msg: 'username and password is required!' })
    } else {
      const dirPath = path.join(__dirname, `../drive/${username}`,);
      console.log(dirPath)
      fs.mkdir(dirPath, (err) => {
        if (err) {
          res.json({ msg: 'username has been taken' });
        } else {
          newUser.save(callback);
        }
      });
    }
  }

module.exports = addnewUser;
