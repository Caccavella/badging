require('dotenv').config();
// import axios from 'axios';

const express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    session = require('express-session');
const app = express()
//MIDDLEWARE
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

//DB CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})

//AUTHENTICATION
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile)
    const db = app.get('db');
    db.find_user(profile.id).then(user => {
        if (!user[0]) {
            db.create_user([profile.displayName, profile.id]).then((user) => {
                return done(null, user[0])
            })
        } else if (user) {
            console.log('Found User', user)
            return done(null, user[0]);
        } 
    })
}))
//INVOKED ONCE TO SET UP
passport.serializeUser(function (user, done) {
    // console.log('Serializing', user)
    done(null, user);
})
//USER COMES FROM SESSION - INVOKED ON EVERY ENDPOINT.
passport.deserializeUser(function (user, done) {
    console.log('deserial', user);
    // app.get('db').find_session_user(user[0].id).then(user => {
    //     return done(null, user[0]);
    // })
    done(null, user)
})
app.get('/login', passport.authenticate('auth0'));
app.get('/login/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/admin/',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/logout', (req, res) => {
    req.logOut()
    return res.redirect(302, 'http:localhost:3000/#/');
})

app.post('/addNote', (req, res) => {
    app.get('db').create_new_note([req.body.noteTitle, req.body.noteMessage, 1])
    .then(response => {
        return res.send(response)
    })
})

app.get('/getNotes', (req, res) => {
    app.get('db').get_notes().then(response => {
        return res.send(response)
    })
})

app.delete('/deleteNote/:id', (req, res) => {
    app.get('db').delete_user_note(req.params.id).then(response => {
        return res.send(response);
    })
})


app.get('/auth/authorized', (req, res) => {
    if (!req.user) {
        return res.status(403).send(false)
    } else {
        return res.status(200).send(req.user);
    }
})

let port = 3034;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})