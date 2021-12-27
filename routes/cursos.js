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
    console.log(obj);
    console.log(req.session.matricula);
    const newAlumno = await reclutarse(obj);
    console.log(newAlumno)
    res.redirect('/cursos');
}


const tomarCurso = async(req, res)=>{
  
    const mat = await materias();
    console.log(mat);
    res.render('tomarCurso', {mat});
};

const takeCourse = async(req, res)=>{
    var obj = req.body;
    console.log(obj);
    const newMateria_alu = await create_alu(obj);
    res.end();
}

router.get('/takeCourse', tomarCurso);
router.post('/takeCourse', takeCourse);
router.get('/apuntarse', getReclutarse);
router.post('/apuntarse', reclutado);
router.get('/', getCursos);
module.exports = router;