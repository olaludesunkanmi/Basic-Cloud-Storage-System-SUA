const  addnewUser = require('../controllers/usersController');

const routes = (app) => {
    // console.log(addnewUser);
    app.route('/users')
        // .get((req,res, next) => {
        //     // middleware
        //     console.log(`Request from: ${req.originalUrl}`)
        //     console.log(`Request type: ${req.method}`)
        //     next();
        // }, (req,res, next) => {
        //     res.send('GET request successful!');
        // })
        
        // Post endpoint
        .post(addnewUser);

    // app.route('/contact/:contactID')
    //     // get a specific contact
    //     .get(getContactWithID)

    //     // updating a specific contact
    //     .put(updateContact)

    //     // deleting a specific contact
    //     .delete(deleteContact);
}

module.exports = routes;