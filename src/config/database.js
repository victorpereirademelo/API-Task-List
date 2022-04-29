module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'amigo',
    password: null,
    database: 'tasklist',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};