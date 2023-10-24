const colleagues = require('../../../data');

class UserManager {
  constructor() {
    this.users = colleagues;
  }
// créer un nvel utilisateur 
  createUser(name, job) {
    const user = {
      id: this.generateNewId(),
      name,
      job,
      projects: [],
      rdv: [],
    };

    this.users.push(user);
    return user;
  }

  generateNewId(){
    //trove le dernier id existant
 const existingIds = this.users.map(user => user.id);
  const maxId = Math.max(...existingIds);
  //+1 a cet id
  return maxId + 1;
  }; 

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