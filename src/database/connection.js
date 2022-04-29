import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';

class Database {
    constructor() {
        this.connection = new Sequelize(dbConfig);
        this.init();
    };

    init() {
        const models = [User];

        models.forEach(model => model.init(this.connection));
    };
};

export default new Database();