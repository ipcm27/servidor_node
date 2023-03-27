const express = require('express');
const UserController = require('./userController');
const UserService = require('./userService');

const app = express();
const userService = new UserService();
const userController = new UserController(userService);

app.use(express.json());

// Mapeia os endpoints
app.get('/users/:id', userController.getUserById.bind(userController));
app.post('/users', userController.createUser.bind(userController));
app.put('/users/:id', userController.updateUser.bind(userController));
app.delete('/users/:id', userController.deleteUser.bind(userController));

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});