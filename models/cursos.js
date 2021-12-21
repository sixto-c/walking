const pool = require("./../utils/cursos");
const TABLA_ALUMNO = "alumno";
const TABLA_USUARIOS = "usuarios";
const TABLA_ALUMNO_MATERIA = "alumno_materia";
const TABLA_CARRERA = "carrera";
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


//funciones para administradores
const getUser = async(habilitado)=>{
    try{
        const query = "SELECT id, user FROM ?? WHERE habilitado = ?";
        const params = [TABLA_USUARIOS, habilitado];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}
const getAlumno = async()=>{
    try{
        const query = "SELECT alu.* FROM ??  as alu";
        const params = [TABLA_ALUMNO];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}

const alumnoSingle = async(matricula)=>{
    try{
        const query = "SELECT alu.matricula, alu.nombre, car.nom_carrera FROM ?? AS car JOIN ?? as alu ON nro_carrera = no_carrera AND alu.matricula = ? ";
        const params = [TABLA_CARRERA, TABLA_ALUMNO, matricula];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }
}


const getMaterias = async(matricula)=>{
    try{
        const query = "SELECT materia FROM ?? JOIN ?? ON num_materia = id_nroMateria AND id_matricula = ?";
        const params = [TABLA_MATERIAS, TABLA_ALUMNO_MATERIA, matricula];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }
}

const reclutarse = async(obj)=>{
   try{
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_ALUMNO, obj];
    return await pool.query(query, params);
   }catch(e){
       console.log(e);
   }
    
}

const getNumCarrera = async()=>{
    try{
        const query = "SELECT nom_carrera, nro_carrera FROM ??";
        const params = [TABLA_CARRERA];
        return await pool.query(query, params);

    }catch(e){
        console.log(e);
    }
} 

const materias = async()=>{
   try{
    const query = "SELECT materia FROM ??";
    const params = [TABLA_MATERIAS];
    return await pool.query(query, params);
   } catch(e){
       console.log(e)
   }
    

}


module.exports= {registro, auth, getUser, getAlumno, alumnoSingle, getMaterias, reclutarse, getNumCarrera, materias};