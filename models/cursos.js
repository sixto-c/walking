const pool = require("./../utils/cursos");
const TABLA_ALUMNO = "alumno";
const TABLA_USUARIOS = "usuarios";
const TABLA_ALUMNO_MATERIA = "alumno_materia";
const TABLA_CARRERAS = "carrera";
const TABLA_MATERIAS = "materias";


const registro = async(obj)=>{
    try{
        const query = "INSERT INTO ??  SET ?";
        const params = [TABLA_USUARIOS, obj];
        return await pool.query(query, params);
    }

catch(e){
    console.log(e);
}
}

const auth = async({user, pass})=>{
    try{
        const query = "SELECT id, admin FROM ?? WHERE user = ? and pass = ?"
        const params = [TABLA_USUARIOS, user, pass];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }
    
}



module.exports= {registro, auth};