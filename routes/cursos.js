var express = require('express');
var router = express.Router();
const {reclutarse, getNumCarrera, materias} = require('../models/cursos');

const getCursos = async(req, res)=>{
    const cursos = await materias(); 
    console.log(cursos);
    res.render('cursos', {cursos});
    }

const getReclutarse = async(req, res)=>{
    const numCarreras = await  getNumCarrera();
    console.log(numCarreras);    
    res.render('apuntarse', {numCarreras});;
};

const reclutado = async(req, res)=>{
    const obj = req.body;
    const newAlumno = await reclutarse(obj);
    console.log(newAlumno)
    res.redirect('/cursos');
}


router.get('/apuntarse', getReclutarse);
router.post('/apuntarse', reclutado);
router.get('/', getCursos);
module.exports = router;