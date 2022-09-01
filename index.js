const express = require("express");
const app = express();

app.set('port',process.env.PORT||5000)
//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cargamos el archivo de rutas
app.use(require('./routes/carta'));

app.listen(app.get('port'),() => {
    console.log("Servidor corriendo en el puerto 5000");
});

module.exports = app;