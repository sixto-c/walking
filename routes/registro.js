var express = require('express');
var router = express.Router();
const sha1 = require('sha1');
const {registro, auth} = require('../models/cursos');

const create = async(req, res)=>{
    req.body.pass = sha1(req.body.pass);
    const obj = req.body;
    console.log(obj);
    const newUser = await registro(obj);
    console.log(newUser);
    var result = await auth(obj);
    console.log(result);
    const [{id, admin}] = result;
    console.log(id, admin);
    req.session.idUser = id;
    res.redirect('/cursos');
}
const getRegistro = async(req,res)=>{
    res.render('registro');

}


router.post('/', create);
router.get('/', getRegistro);



module.exports = router;