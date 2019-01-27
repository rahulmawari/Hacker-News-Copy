const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport  = require('passport');
const db = require('./config/key').mongoUri;
const users = require('./routes/api/users.js');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/users',users);


mongoose.connect(db,{ useNewUrlParser: true }).then(()=> console.log("mongodb connected")).catch( err => console.log(err));
{ useNewUrlParser: true }
//passport middleware

app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server is running on port ${port}`));