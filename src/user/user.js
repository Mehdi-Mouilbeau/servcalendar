class User {
    constructor(id, name, job, projects, rdv) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.projects = projects || [];
        this.rdv = rdv || [];
    }

    // Ajouter un projet
    addProject(project) {
        this.projects.push(project);
    }

    // Ajouter un rendez-vous
    addRdv(rdv) {
        this.rdv.push(rdv);
    }
}

module.exports = User;
