class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async getUserById(req, res) {
      const userId = req.params.id;
      const user = await this.userService.getUserById(userId);
      res.status(200).json(user);
    }
  
    async createUser(req, res) {
      const userData = req.body;
      const newUser = await this.userService.createUser(userData);
      res.status(201).json(newUser);
    }
  
    async updateUser(req, res) {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(userId, userData);
      res.status(200).json(updatedUser);
    }
  
    async deleteUser(req, res) {
      const userId = req.params.id;
      await this.userService.deleteUser(userId);
      res.status(204).send();
    }
  }
  
  module.exports = UserController;