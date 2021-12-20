var express = require('express');
var router = express.Router();
const {auth} = require('../models/cursos'); 
const sha1 = require('sha1');

const getLogin = async(req, res)=>{
    res.render('login');
}

const login = async(req, res)=>{
    req.body.pass = sha1(req.body["pass"]);
    var obj = req.body;
    console.log(obj);
    var result = await auth(obj);
    console.log(result);
    try{
        if(result.length === 0){
            res.render('login', {message : 'user o pass incorrectas'});
        }
    
        const [{id, admin}] = result;
        console.log(id, admin);
        req.session.idUser = id;
        req.session.admin = admin;
    
        if(result.length != 0 && req.session.admin  === 1){
            
          
            res.redirect('/perfilAdmin');
    
        }
        else if(result.length != 0 && req.session.admin === 0){
            res.redirect('/cursos'); 
           }
   
     }catch(e){
        console.log(e);
    }

   
}






router.get('/', getLogin);
router.post('/', login);

module.exports = router;