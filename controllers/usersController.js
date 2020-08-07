const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { UserSchema } = require('../models/userModel');


const User = mongoose.model('User', UserSchema);


const addnewUser = (req, res, callback) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        let username = req.body.userName;
    let password = req.body.password;
    if (!username || !password) {
      res.json({ msg: 'username and password is required!' })
    } else {
      const dirPath = path.join(__dirname, `../drive/${username}`,);
      console.log(dirPath)
      fs.mkdir(dirPath, (err) => {
        if (err) {
          res.json({ msg: 'error' });
        }
      });
        res.json(user);
    };
  })
}

module.exports = addnewUser;
