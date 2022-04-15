const Sequelize = require('sequelize');
var db = require('../models');
const {SECRET} = require('../utils/keys');
const bcrypt = require("bcryptjs");
const {responder, erroResponder} = require('../utils/responseHandler')
const jwt = require('jsonwebtoken');

module.exports = {

   registerUser: async (req, res, next) => {
        let data = req.body
        let hashPasssword = await bcrypt.hash(data.password, 12)
        data.password = hashPasssword;
        db.user
        await db.User.create(data).then((data) => {
            const payload = {
                user_id: data.id,
                email: data.email,
                name: data.name
            }
            const token = jwt.sign(payload, SECRET)
            responder(req, res, 101, '', token)
        }).catch(err => {
            erroResponder(req, res, 102)
        })
   },

   getUser: async (req, res, next) => {
       if(req.user){
           let data = {
               name: req.user.name,
               email: req.user.email
           }
           responder(req, res, 103, data)
       }
   }

}