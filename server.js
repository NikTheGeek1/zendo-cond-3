const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const trialSchema = require('./models/trial'); // fetching the userSchema in the user model
const debriefSchema = require('./models/debrief'); // fetching the userSchema in the user model


const uri = "mongodb+srv://ntheodoropoulos:nikblod1!@cluster0-irjmg.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true })



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


// Serve the static files from the React app
const allowedOrigins = ['http://localhost:3000',
    'http://localhost:5000'];
app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));


app.use(session({ // allows to save sessions
    secret: 'thisisasecretkey', //process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    saveInitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection}) // save data to database
  }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/storeData', (req, res) => {
    const data = req.body;
    console.log(data);
    const new_trial = new trialSchema;
    new_trial.trial = data.trial;
    new_trial.data = data.data;
    new_trial.selected = data.selected;
    new_trial.posteriorORprior = data.posteriorORprior;
    new_trial.disp_order = data.dispOrder;
    new_trial.rule = data.rule;
    new_trial.ph4_answer = data.ph4_answer;
    new_trial.token_id = data.token_id;
    new_trial.save(function(err) {
      if (err)return handleError(err);
    });
    res.sendStatus(200);
});


app.post('/storeDebrief', (req, res) => {
    const data = req.body;
    const new_debrief = new debriefSchema;
    new_debrief.date = data.date;
    new_debrief.generalComment = data.generalComment;
    new_debrief.age = data.age;
    new_debrief.gender = new_debrief.gender;
    new_debrief.initial_strategy = data.initial_strategy;
    new_debrief.final_strategy = data.final_strategy;
    new_debrief.engaging = data.engaging;
    new_debrief.difficult = data.difficult;
    new_debrief.task_duration = data.task_duration;
    new_debrief.pol_orient = data.pol_orient;
    new_debrief.token_id = data.token_id;
    new_debrief.save(function(err) {
      if (err)return handleError(err);
    });

    res.sendStatus(200);
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

