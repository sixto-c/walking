var express = require('express');
var router = express.Router();

const verifyAdmin = (req, res, next)=>{
    req.session.idUser && req.session.admin === 1 ? (next()) : res.redirect('/login');
}

const verifyUser = (req, res, next)=>{
    req.session.idUser ? (next()) : res.redirect('/login');
}

const verifyLogin = (req, res, next)=>{
    
  !req.session.idUser ? (next()) : res.redirect('/cursos');
}
module.exports = {verifyAdmin, verifyUser, verifyLogin};
