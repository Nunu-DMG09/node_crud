const mysql= require('mysql');
// Cadena de conexion = STRING ... "server=localhost;user=root; password= ;database=movietime"
// Objeto de conexion = {host: 'localhost', user: 'root', password: '', database: 'movietime'}

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rakion2016123!',
    database: 'movietime'
});

// ACTIVAR LA CONEXION
conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: '+error);
        return; 
    }
    console.log('La conexion se realizo correctamente');
});
