var express = require('express');
var router = express.Router();
const model = require('./../models/cursos')

const AllCursos = async(req,res)=>{
    const cursos = await model.getCursos();
    console.log(cursos);
    res.render('cursos', {cursos});
}
 
router.get('/', AllCursos);


module.exports = router;