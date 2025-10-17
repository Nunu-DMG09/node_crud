const mysql= require('mysql2');
// Cadena de conexion = STRING ... "server=localhost;user=root; password= ;database=movietime"
// Objeto de conexion = {host: 'localhost', user: 'root', password: '', database: 'movietime'}

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movietime',
     waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4'
});

// ACTIVAR LA CONEXION
conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: '+error);
        return; 
    }
    console.log('La conexion se realizo correctamente');
});

module.exports = conexion;
