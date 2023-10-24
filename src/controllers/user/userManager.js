const colleagues = require('../../../data');
const User = require('../../user/user');

class UserManager {
    constructor() {
        this.users = colleagues.map(colleague => new User(
            colleague.id,
            colleague.name,
            colleague.job,
            colleague.projects,
            colleague.rdv
        ));
    }

    generateNewId() {
        // Trouve le dernier id existant
        const existingIds = this.users.map(user => user.id);
        const maxId = Math.max(...existingIds);
        // +1 à cet id
        return maxId + 1;
    }

    getUsers() {
        return this.users;
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    createUser(name, job) {
        const newId = this.generateNewId();
        const newUser = new User(newId, name, job);
        this.users.push(newUser);
        return newUser;
    }

    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
        }
    }
}

module.exports = UserManager;
