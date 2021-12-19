var express = require('express');
var router = express.Router();
const {auth} = require('./../models/cursos'); 
const sha1 = require('sha1');

const get = (req, res)=>{res.render('login');}

const login = async(req, res)=>{
    try{
        req.body.password = sha1(req.body.password);
        var obj = req.body;
        var result = await auth(obj);
        console.log(result);
        if(result.length == 0){
            res.render('login', {message: "user o pass incorrecta"});
     
        }
        const [{id, admin}] = result;
        if(admin === 1){
            const [{id, admin}] = result;
            console.log(id, admin);
            req.session.idUser = id;
            req.session.admin = admin;
            res.redirect('/perfilAdmin');

        }
        else if(admin === 0){
            const [{id, admin}] = result;
            console.log(id, admin);
            req.session.idUser = id;
            req.session.admin = admin;
            res.redirect('/cursos')

        }            
        
    }
    catch(e){
        console.log(e);
    }
}

router.get('/', get);
router.post('/', login);//como mi action va a ser en login. y yo estoy en login.js no va ningun palabra en ('/')
module.exports = router;
 