var express = require('express');
var router = express.Router();
const model = require('../models/cursos');
const sha1 = require('sha1');

const registro = async(req,res)=>{
    req.body.password = sha1(req.body.password)
    const obj = req.body;
    const newUser = await model.registro(obj);
    console.log(obj);
    var result = await model.auth(obj);//#1//me sirve para que sepa que cuando me registro, tengo un id. y me permita pasar a la siguente pagina
    console.log(result);//#1
    const [{id, admin}] = result;//#1
    console.log(id, admin);//#1
    req.session.idUser = id;//#1
    req.session.admin = admin;//#1
    res.redirect('/cursos');
}

const getRegistro = async(req,res)=>{
    res.render('registro');
}

router.get('/', getRegistro);
router.post('/', registro);

module.exports = router;