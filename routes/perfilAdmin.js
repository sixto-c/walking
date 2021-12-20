var express = require('express');
var router = express.Router();
const {getUser, getAlumno, alumnoSingle,getMaterias} = require('../models/cursos');


const getAdmin = async(req, res)=>{
    res.render('perfilAdmin');
}

const all = async(req, res)=>{
    const habilitado = true;
    const usuarios = await getUser(habilitado);
    console.log(usuarios);
    res.render('perfilAdmin', {usuarios});
}

const allAlumno = async(req, res)=>{
    const alumnos = await getAlumno();
    console.log(alumnos);
    res.render('alumnos', {alumnos});
}

const SingleUser = async(req,res)=>{
    const matricula = req.params.matricula;
    const usuario = await alumnoSingle(matricula);
    console.log(usuario);
    res.render('single', {usuario});
}
const SingleMaterias = async(req,res)=>{
    const matricula = req.params.matricula;
    const materias = await getMaterias(matricula);
    console.log(materias);
    res.render('materias', {materias});
}

router.get('/materias/:matricula', SingleMaterias);
router.get('/single/:matricula', SingleUser);
router.get('/', all);
router.get('/', getAdmin);
router.get('/alumnos', allAlumno);
module.exports = router;