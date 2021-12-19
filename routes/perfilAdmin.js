var express = require('express');
var router = express.Router();
const model = require('./../models/cursos');

const all  = async(req, res)=>{
    const status = true;
    const usuarios = await model.admin(status);
    console.log(usuarios);
    res.render('perfilAdmin', {usuarios, status});
}
const allFalse  = async(req, res)=>{
    const status = false;
    const deshabilitados = await model.admin(status);
    console.log(deshabilitados);
    res.render('perfilAdmin', {deshabilitados, status});
}

const borrar = async(req, res)=>{
    const habilitado = false;
    const id = req.params.id;
    const borrado = await model.borrar(id, habilitado); 
    console.log(borrado);
    res.redirect('/perfilAdmin');
}
const habilitar = async(req, res)=>{
    const habilitado = true;
    const id = req.params.id;
    const borrado = await model.borrar(id, habilitado); 
    console.log(borrado);
    res.redirect('/perfilAdmin/disabled');
}

const single = async(req, res)=>{
    const id = req.params.id;
    const particular = await model.single(id);
    console.log(single);
    res.render('single', {particular});
}
const getModificar = async(req, res)=>{
    const id = req.params.id;
    const particular = await model.single(id);
    console.log(single);
    res.render('modificarUser', {particular});
    
}

const modificacion = async(req,res)=>{
    const id = req.params.id;
    const obj = req.body;
    console.log(obj);
    const userModif= await model.modificar(id, obj);
    console.log(userModif);
    res.redirect('/perfilAdmin');
}



router.get('/', all);
router.get('/disabled', allFalse);
router.get('/disabled/:id', habilitar);
router.get('/delete/:id', borrar);
router.get('/single/:id', single);
router.get('/update/:id', getModificar);
router.post('/update/:id', modificacion);


module.exports = router;