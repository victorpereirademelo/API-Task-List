import express from "express";

import './database/connection';

import userRoutes from './routes/userRoutes';
import sessionRoutes from './routes/sessionRoutes';

class App {
    constructor() {
        this.app = express();
    };

    middlewares() {
        this.app.use(express.json());
    };

    routes() {
        this.app.use('/users', userRoutes);
        this.app.use('/sessions', sessionRoutes);
    };

    setup() {
        this.middlewares();
        this.routes();
        this.app.listen(4444, () => console.log("Server Running"));
    };
};

export default new App();