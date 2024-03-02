const express = require("express");
const mysql = require("mysql2");
const myconn = require('express-myconnection');
const cors = require("cors");
const config = require("./config.js");
const routes = require("./routes/routes.js");

const app = express();
app.set('port', process.env.PORT || 3000)

const dbOptions = {
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

// Conexión a la base de datos
const connection = mysql.createConnection(dbOptions);

connection.connect(error => {
    if (error) {
        console.error("Error en la conexión:", error);
        return;
    }
    console.log("Conexión a MySQL establecida correctamente!");
});

// Configura CORS para admitir todas las solicitudes
app.use(cors());

//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// Rutas
app.get("/", (req, res) => {
    res.send("Gafete Start");
})

app.use('/api',routes);

// Servidor
app.listen(app.get('port'), ()=>{
    console.log('server running: http://localhost:3000')
})
