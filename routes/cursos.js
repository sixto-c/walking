var express = require('express');
var router = express.Router();


const getCursos = async(req, res)=>{
    res.render('cursos');
}

router.get('/', getCursos);
module.exports = router;