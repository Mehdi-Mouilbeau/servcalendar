class UserManager {
  constructor() {
    this.users = [];
    this.userId = 1;
  }
// créer un nvel utilisateur 
  createUser(name, job) {
    const user = {
      id: this.userId++,
      name,
      job,
      projects: [],
      rdv: [],
    };

    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(id) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }
}

module.exports = UserManager;