require('dotenv').config();


const express = require('express'),
bodyParser = require('body-parser'),
passport = require('passport'),
Auth0Strategy = require('passport-auth0'),
massive = require('massive'),
session = require('express-session');


const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK,
}, function(accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile)
    const db = app.get('db');
    db.find_user(profile.id).then(user => {
        if(!user[0]) {
            db.create_user([profile.displayName, profile.email, profile.id]).then((user) => {
                return done(null, user[0])
            })
        } else if (user) {
            return done(null, user[0])
        }
    })

}))

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})

app.get('/login', passport.authenticate('auth0'));
app.get('/login/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/logout', (req, res) => {
    req.logOut()
    return res.redirect(302, 'http:localhost:3000/#/');
})


// ////////// User ////////////////////

// app.get('/api/users', (req, res, next) => {
//     req.app.get('db').get_user().then(response => res.status(200).send(response))
// })



////////// Notes ///////////////////

app.post('/api/notes', (req, res, next) => {
    req.app.get('db').create_new_note().then(response => req.status(200).send(response))
})

app.get('/api/getNotes', (req, res, next) => {
    req.app.get('db').get_user_notes().then(response => res.send(200).send(response))
})

app.put('/api/editNotes', (req, res, next) => {
    req.app.get('db').edit_user_note().then(response => res.send(200).send(response))
})

app.delete('/api/deleteNote', (req, res, next) => {
    req.app.get('db').delete_user_note().then(response => res.send(200).send(response))
})


let port = 3034;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})