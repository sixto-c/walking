const pool = require("./../utils/cursos");
TABLA_USUARIOS = "usuarios";
TABLA_TECNOLOGIAS   = "tecnologias"
//este seguro va a ser para el admin
const registro = async(obj)=>{
    try{
        const query = "INSERT INTO ?? SET ?";
        const params = [TABLA_USUARIOS, obj];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}

//login
const auth = async({username, password})=>{
    try{
        const query = "SELECT id, admin FROM ?? WHERE username = ? AND password = ?";
        const params = [TABLA_USUARIOS, username, password];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}

const getCursos = async()=>{
    try{
        const query = "SELECT nombreCurso FROM ??";
        const params = [TABLA_TECNOLOGIAS];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}

const admin = async(habilitado)=>{
    try{
        const query = "SELECT id, username FROM ?? AS user WHERE user.habilitado = ?";
        const params = [TABLA_USUARIOS, habilitado];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }   
} 

const borrar = async(id, habilitado)=>{
    try{
        const query = "UPDATE ??  SET habilitado = ? WHERE id = ?";
        const params = [TABLA_USUARIOS, habilitado, id];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}
const single = async(id)=>{
    const query = "SELECT username, id, password FROM ?? WHERE id = ?";
    const params = [TABLA_USUARIOS, id];
    return await pool.query(query, params);
}

const modificar = async(id, obj)=>{
   try{
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [TABLA_USUARIOS, obj, id];
    return await pool.query(query, params);
   } 
   catch(e){
       console.log(e);
   }
    
}


module.exports= {registro, auth, getCursos, admin, borrar, single, modificar};