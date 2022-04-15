var db = require('../models');
const { SECRET } = require("../utils/keys");
const { Strategy, ExtractJwt } = require("passport-jwt");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}


module.exports = (passport) => {

    passport.use(new Strategy(options, async (payload, done) => {
        try {
            let user
            if(payload){
                user = JSON.parse(JSON.stringify(payload))
            }
            return done(null, user)
        } catch (e) {
            return done(null, false)
        }
    }))
}