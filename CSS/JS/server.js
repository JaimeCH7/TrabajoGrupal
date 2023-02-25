const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err;
  
      const db = client.db('mydb');
      const users = db.collection('users');
  
      users.findOne({ email: email, password: password }, (err, result) => {
        if (err) throw err;
  
        if (result) {
          // Si las credenciales son válidas, redirigir al usuario a su página de perfil
          res.redirect('.../index.html');
          
        } else {
          // De lo contrario, mostrar un mensaje de error
          res.send('Credenciales inválidas');
        }
      });
    });
  });  

// Ruta de registro de usuario
app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;

    const db = client.db('mydb');
    const users = db.collection('users');

    // Verificar si el correo electrónico ya está en uso
    users.findOne({ email: email }, (err, result) => {
      if (err) throw err;

      if (result) {
        res.send('El correo electrónico ya está en uso');
      } else {
        // Agregar el nuevo usuario a la base de datos
        users.insertOne({ name, email, username, password }, (err, result) => {
          if (err) throw err;

          res.send('Usuario registrado correctamente');
        });
      }
    });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
