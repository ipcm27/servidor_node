class UserService {
    constructor() {
      this.users = [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' },
        { id: 3, name: 'Pedro' },
      ];
    }
  
    async getUserById(userId) {
      const user = this.users.find(user => user.id === parseInt(userId));
      if (!user) {
        throw new Error(`Usuário com ID ${userId} não encontrado`);
      }
      return user;
    }
  
    async createUser(userData) {
      const newUserId = this.users.length + 1;
      const newUser = { id: newUserId, ...userData };
      this.users.push(newUser);
      return newUser;
    }
  
    async updateUser(userId, userData) {
      const userIndex = this.users.findIndex(user => user.id === parseInt(userId));
      if (userIndex === -1) {
        throw new Error(`Usuário com ID ${userId} não encontrado`);
      }
      const updatedUser = { id: parseInt(userId), ...userData };
      this.users[userIndex] = updatedUser;
      return updatedUser;
    }
  
    async deleteUser(userId) {
      const userIndex = this.users.findIndex(user => user.id === parseInt(userId));
      if (userIndex === -1) {
        throw new Error(`Usuário com ID ${userId} não encontrado`);
      }
      this.users.splice(userIndex, 1);
    }
  }
  
  module.exports = UserService;